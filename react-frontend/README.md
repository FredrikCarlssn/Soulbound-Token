# Soulbound Token Claiming Grounds

This is the front-end for the Soulbound Token smart contract. The project is built with React and uses the ThirdwebProvider for interacting with the Sepolia blockchain.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [ThirdwebProvider](https://docs.thirdweb.com/) - The blockchain interraction platform used
- [React Router](https://reactrouter.com/) - Used for routing
- [Styled-components](https://styled-components.com/) - Used for component styling
- [Dotenv](https://www.npmjs.com/package/dotenv) - Used to manage environment variables

## Project Structure

The main entry point of the application is `index.js`. This file sets up the React application, including the routing for different pages such as the landing page, profile page, and claim page.

The tokens are stored in the `Tokens` folder. This folder contains a JSON file with all the token templates, as well as an `img` folder for all media associated with each token template.

## Smart Contract

The smart contract address is stored in CONST.js in the source folder. The contract is link to to Etherscan is https://sepolia.etherscan.io/address/0xEC0502AdB6D7426Fd6531c33bb4832A352F0D58f

## Available Routes

- `/` - The landing page of the application.
- `/profile` - The profile page where users can view their tokens.
- `/profile/:token/:tokenId` - A detailed view of a specific token owned by the user.
- `/claim` - The page where users can claim new tokens.
- `/claim/:token` - The page where users can claim a specific token.
- `/about` - The about page with information about the project.

## Run Locally

Install dependencies --- yarn -or- npm

```bash
yarn

---

npm i
```

Start the server

```bash
yarn start

---

npm start
```

## Environment Variables

To run this project, you will need to add the `CLIENT_ID` variables to your .env file.

You can generate your `clientId` and `secretKey` via thirdweb's [dashboard](https://thirdweb.com/create-api-key).

## Deployment

Deploy the application to GitHub-pages using the following command:

```bash
yarn deploy

---

npm run deploy
```
