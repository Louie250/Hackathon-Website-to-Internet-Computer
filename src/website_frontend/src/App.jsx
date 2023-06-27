import React from 'react'
import { forwardRef, useState } from 'react'
import GlowEdge from '../assets/components/Glow'
import { Container, Card, Title, SegmentedControl, Center, Box, Paper, Stack, Group, CloseButton, Button, StarIcon, ActionIcon, Text, Modal, Avatar, Chip, Badge, MultiSelect, SimpleGrid, Select } from '@mantine/core'
import { Link, NavLink, Navigate, Outlet, Route, Routes, useLocation, useMatch, useNavigate, useParams } from 'react-router-dom'
import useStore from './store'
import Navigation from '../assets/components/Navigation'


const SelectTokenItem = forwardRef(
  ({ image, name, label, description, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);


const SendForm = () => {
  const dummyUsers = [{ value: 'josh', label: "Joshua Futcher" }]

  const location = useLocation();
  const qp = new URLSearchParams(location.search)
  const [tokenId, setTokenId] = useState(qp.get("tokenId"));
  const [user, setUser] = useState();
  const tokens = useStore(store => store.tokens.entities.map(tokenId => store.tokens.byId[tokenId]));
  const token = useStore(store => store.tokens.byId[tokenId]);

  return (
    <Stack>
      <Paper p="md" withBorder>
        <Group position="apart" align="center" mb={"sm"}>
          <Title order={4}>Sending</Title>
          <Button size="xs" variant="default" onClick={() => setTokenId('')}>Change</Button>
        </Group>

        {token ? (
          <>
            <Card withBorder p="sm">
              <TokenItem token={token} />
            </Card>
          </>
        ) : (
          <Select
            searchable
            itemComponent={SelectTokenItem}
            placeholder={"Pick a token"}
            data={tokens.map(t => ({ ...t, value: t.id, label: t.name }))}
            value={tokenId}
            onChange={(v) => setTokenId(v)}
          />
        )}
      </Paper>

      <Paper p="md" withBorder>
          <Title order={4} mb={"sm"}>To User</Title>


        <Select
          searchable
          placeholder={"Pick a user"}
          data={dummyUsers}
          value={user}
          onChange={(v) => setUser(v)}
        />
      </Paper>

      <Button size="lg" disabled={!tokenId || !user}>
        Send
      </Button>
    </Stack>
  )
}

const CollectionsCard = ({ collection }) => {
  const tokenCount = useStore(state =>
    state.tokens.entities
      .map(tokenId => state.tokens.byId[tokenId])
      .filter(token =>
        collection.categories.some(collectionCategory => token.categories.includes(collectionCategory))
      ).length
  );

  return (
    <Link to={`${collection.id}`} style={{ textDecoration: 'none' }}>
      <Card withBorder p="xl" sx={{ backgroundColor: `hsl(${collection.color} / 10%)`, backdropFilter: 'blur(3px)' }}>
        <Title order={3}>{collection.name}</Title>
        {tokenCount} tokens
      </Card>
    </Link>
  )
}

const CollectionsListPage = () => {
  const collections = useStore(state => state.collections.entities.map(id => state.collections.byId[id]));
  
  return (
    <Stack spacing="sm">
      {collections.map(collection => (
        <CollectionsCard collection={collection} key={collection.id} />
      ))}
    </Stack>
  );
}

const TokenItem = ({ token }) => {
  return (
    <Group>
      <Avatar src={token.image} />
      <Stack spacing={0}>
        <Text size="sm">
          {token.name}
        </Text>
        <Text size="xs">
          {token.description}
        </Text>
      </Stack>
    </Group>
  )
}

const TokenEditor = ({ token, open, setOpen }) => {
  const categories = useStore(state => state.categories.byId);
  const updateToken = useStore(state => state.tokens.updateToken);
  const location = useLocation();

  if(!token) return null;
  return (
    <Modal
      withOverlay
      opened={!!open}
      onClose={() => setOpen(false)}
      centered
      title={
        <Group>
          <Avatar src={token.image} radius="sm" />
          <Title order={3}>{token.name}</Title>
        </Group>
      }
    >
      <Stack spacing="xs">
        <Text size="sm">{token.description}</Text>

        <MultiSelect
          data={Object.entries(categories).map(([id, v]) => ({ label: v.name, value: id }))}
          label="Categories"
          value={token.categories}
          size="sm"
          variant="filled"
          onChange={(value) => {
            updateToken({ ...token, categories: value })
          }}
          sx={{ zIndex: 1000 }}
          placeholder="Give me a category!"
        />

        <SimpleGrid cols={2} spacing="0px">
          <Stack spacing={3}>
            <Text size="sm">Issued</Text>
            <Text size="xs">{token.dateCreated.toLocaleDateString("en-US")}</Text>
          </Stack>

          <Stack spacing={3}>
            <Text>Owned By</Text>
            {/** TODO: Does this make any sense?? if you can send it surely its owned by u? */}
            <Text size="xs">{token.owner}</Text>
          </Stack>
        </SimpleGrid>

        <NavLink to={"/send?tokenId="+token.id} state={{ back: location.pathname }} style={{ display: 'block', width: '100%', textDecoration: 'none' }}>
          <Button variant='filled' color="green.8" fullWidth>
            Send token 🛫
          </Button>
        </NavLink>
        
      </Stack>
    </Modal>
  )
}

const Collection = () => {
  const { collectionId } = useParams();
  const [showTokenId, setShowTokenId] = useState(null);
  const [showTokenModal, setShowTokenModal] = useState(null);

  const allTokens = useStore(state => state.tokens);
  const collection = useStore(state => state.collections.byId[collectionId]);
  const showToken = useStore(state => state.tokens.byId[showTokenId]);

  const filteredTokens = 
    allTokens.entities
        .map(id => allTokens.byId?.[id])
        .filter(token => token.categories.includes(collectionId))

  if (!collection) return null;

  return (
    <>
      <Title order={2} mb="sm">{collection.name}</Title>
      <Stack spacing="xs">
        {filteredTokens.map((token) => (
          <Card key={token.id} withBorder p="sm" role="button" sx={{ cursor: 'pointer' }} onClick={() => {
            setShowTokenId(token.id)
            setShowTokenModal(true)
          }}>
            <TokenItem key={token.id} token={token} />
          </Card>
        ))}

        <TokenEditor open={showTokenModal} setOpen={setShowTokenModal} token={showToken} />
      </Stack>
    </>
  )
}

const PageContainer = ({ back, title }) => (
  <Container size="sm" className='page' pt="xl">
    <Group align="center" position={back ? "apart" : "right"}>
      {!!back && (
        <NavLink to={back} style={{ textDecoration: 'none' }}>
          <Button size="xs" variant="default">
            {"< Back"}
          </Button>
        </NavLink>
      )}

      <Title order={1} size="36px" align="right" mb="lg" mt="sm">{title}</Title>
    </Group>

    <Outlet />
  </Container>
);

const CollectionsPage = () => {
  const match = useMatch("/collections");
  const { state } = useLocation();

  return (
    <PageContainer
      back={state?.back ? 
        state.back :
          match ? 
            undefined : 
            "/collections"
      }
      title="🪙 Collections"
    />
  );
}

const SendPage = () => {
  const match = useMatch("/send");
  const { state } = useLocation();

  return (
    <PageContainer
      back={state?.back ? 
        state.back :
          match ?  undefined : "/send"}
      title="🛫 Send"
    />
  )
}

const Layout = ({ children }) => (
  <>
    <GlowEdge />
    {children}
    <Navigation />
    <div style={{ height: '90px' }} />
  </>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Navigate to="/collections" />} />
        <Route path="/collections" element={<CollectionsPage />}>
          <Route index element={<CollectionsListPage />} />
          <Route path=":collectionId" element={<Collection />} />
        </Route>
        <Route path="/send" element={<SendPage />}>
          <Route index element={<SendForm />} />
        </Route>
      </Routes>
    </Layout>
  )
}

export default App
