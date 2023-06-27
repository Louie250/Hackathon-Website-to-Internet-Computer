# Hackathon Website converted to run locally using Internet Computer's SDK
This project is the first of five milestones. The goal was to take the hackathon frontent (written in React) and have it run as a canister using Internet Computer's SDK. There was a lot to learn, and it took about 10 or so new projects to be created to get this working, but it now runs as expected.

# Resources
- [IC's Customizing the frontend](https://internetcomputer.org/docs/current/developer-docs/frontend/custom-frontend)
- [Original Hackathon Entry](https://github.com/JoshuaFutcher/hackathon-frontend)

# Commands used to get the project working
```bash
npm install
npm install --save-dev typescript ts-loader
npm install --save react react-dom
npm install --save-exact
```

## Running the project
```bash
# Starts the replica, running in the background
dfx start --background

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
```
Once the job completes, the application will be available at `http://localhost:4943?canisterId={asset_canister_id}`.
