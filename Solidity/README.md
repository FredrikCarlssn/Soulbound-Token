# Soulbound Tokens

This is a framework for creating and storing Soulbound Tokens on any EVM-compatibale blockchain.

# Getting Started

## Foundry

- `GetFoundry`: Install foundry [at this link](getFoundry.sh) (getFoundry.sh)
- `Install dependencies`: run this command in project terminal to install all dependencies ↓

```bash
forge install
```

## DOTENV

- Make sure you have DOTENV installed globally

Create a file called .env and copy all the variables form .env.example into the new file. Make sure to only store wallets and keys with no real value in this file. The following environment variables are used:

- `SEPOLIA_TESTNET_PRIVATE_KEY=`: Private key for a wallet with sepolia funds
- `MUMBAI_TESTNET_PRIVATE_KEY=`: Private key for a wallet with Mumbai funds
- `ETHERSCAN_API_KEY=`: A API key to be able to verify a contract on Etherscan
- `POLYGONSCAN_API_KEY=`: A API key to be able to verify a contract on Polygonscan
- `ADDRESS=`: This is a helper variable to the Makefile. If a contract verification failed, the address to the contract can be pasted here to retry the verification

# MAKEFILE commands

Make sure you have MAKEFILE installed globally

# Makefile Targets

- `flat`: This target uses the `forge flatten` command to flatten the `src/SoulboundToken.sol` contract into a single file named `flattened.sol`. Flattening is the process of consolidating all dependencies of a contract into a single file, which is often required for contract verification on block explorers like Etherscan.

- `test`: This target runs the `forge test` command with verbose output (`-vv`) and a gas report. This command is used to run unit tests for the smart contract.

- `vTest`: This target is similar to `test`, but it provides more detailed output (`-vvvv`) for debugging purposes.

- `localDeploy`: This target uses the `forge script` command to deploy the `SoulboundToken` contract to a local Ethereum network (localhost:8545). The `DEFAULT_ANVIL_KEY` is used as the private key for the deployment account. To use this command you must first run Anvil.

- `Sepolia`: This target deploys the `SoulboundToken` contract to the Sepolia testnet. The `SEPOLIA_TESTNET_PRIVATE_KEY` is used as the private key for the deployment account, and the contract is verified on Etherscan using the `ETHERSCAN_API_KEY`.

- `Mumbai`: This target deploys the `SoulboundToken` contract to the Mumbai testnet (Polygon/Matic network). The `MUMBAI_TESTNET_PRIVATE_KEY` is used as the private key for the deployment account, and the contract is verified on Polygonscan using the `POLYGONSCAN_API_KEY`.

- `verify`: This target uses the `forge verify-contract` command to verify the `SoulboundToken` contract on the Sepolia testnet. The `ETHERSCAN_API_KEY` is used for Etherscan API access, and the `ADDRESS` should be the address where the contract was deployed.

# SoulboundToken Smart Contract

The `SoulboundToken` contract is an ERC721 token with enumerable and burnable features. It also includes a custom storage structure for Soulbound tokens.

## State Variables

- `_tokenIdCounter`: A private variable to keep track of the total number of tokens minted.
- `allowList`: A public mapping that tracks which addresses are allowed to mint which Soulbound tokens.
- `claimedSoulboundToken`: A public mapping that tracks which Soulbound tokens have been claimed by which addresses.

## Errors

- `nonExistentToken(uint256 _tokenId)`: Triggered when an operation is attempted on a token that does not exist.
- `invalidMint(uint8 MintingType, uint8 SoulboundToken, address Address)`: Triggered when an invalid minting operation is attempted.
- `alereadyExists(uint8 SoulboundToken)`: Triggered when an operation is attempted on a token that already exists.

## Enum

- `MintingType`: Defines the types of minting operations that can be performed. It includes `Everyone`, `AllowList`, and `Owner`.

## Constructor

- `constructor() ERC721("SoulBound", "SBT") {}`: Initializes the contract with the name "SoulBound" and the symbol "SBT".

## Functions

#### Everyone

```solidity
function Everyone(address _recipient, uint8 _soulboundToken) internal {
    if (claimedSoulboundToken[_recipient][_soulboundToken] == true) {
        revert invalidMint(0, _soulboundToken, _recipient);
    } else {
        claimedSoulboundToken[_recipient][_soulboundToken] = true;
    }
}
```

This internal function is used to handle the minting of a Soulbound token when the minting type is Everyone. It checks if the token has already been claimed by the recipient. If it has, it reverts the transaction. If it hasn't, it sets the token as claimed by the recipient.

### AllowList

```solidity
function AllowList(
    address _recipient,
    uint8 _soulboundToken,
    address _sender
) internal {
    if (
        allowList[_recipient][_soulboundToken] == false ||
        _recipient != _sender ||
        claimedSoulboundToken[_recipient][_soulboundToken] == true
    ) {
        revert invalidMint(1, _soulboundToken, _recipient);
    } else {
        claimedSoulboundToken[_recipient][_soulboundToken] = true;
    }
}
```

This internal function is used to handle the minting of a Soulbound token when the minting type is AllowList. It checks if the recipient is on the allow list for the token, if the sender is the recipient, and if the token has already been claimed by the recipient. If any of these conditions are not met, it reverts the transaction. If all conditions are met, it sets the token as claimed by the recipient.

### Owner

```solidity
function Owner(
    address _recipient,
    uint8 _soulboundToken,
    address _sender
) internal {
    if (owner() != _sender) {
        revert invalidMint(2, _soulboundToken, _recipient);
    } else {
        claimedSoulboundToken[_recipient][_soulboundToken] = true;
    }
}
```

This internal function is used to handle the minting of a Soulbound token when the minting type is Owner. It checks if the sender is the owner of the contract. If not, it reverts the transaction. If the sender is the owner, it sets the token as claimed by the recipient.

### addToAllowList

```Solidity
function addToAllowList(
    address _address,
    uint8 _soulboundToken
) public onlyOwner {
    allowList[_address][_soulboundToken] = true;
}
```

This public function allows the owner of the contract to add an address to the allow list for a specific Soulbound token. It sets the corresponding entry in the allowList mapping to true.

### removeFromAllowList

```Solidity
function removeFromAllowList(
    address _address,
    uint8 _soulboundToken
) public onlyOwner {
    allowList[_address][_soulboundToken] = false;
}
```

This public function allows the owner of the contract to remove an address from the allow list for a specific Soulbound token. It sets the corresponding entry in the allowList mapping to false.

### tokenURI

```Solidity
function tokenURI(
    uint256 _tokenId
) public view override returns (string memory) {
    if (ownerOf(_tokenId) == address(0)) revert nonExistentToken(_tokenId);

    return
        string(
            abi.encodePacked(
                _baseURI(),
                Base64.encode(constructAttributes(_tokenId))
            )
        );
}
```

This public function overrides the tokenURI function from the ERC721 standard. It returns a URI for a given token ID. The URI is a base64-encoded JSON string that contains the token's attributes. If the token does not exist, it reverts the transaction.

### \_baseURI

```Solidity
function _baseURI() internal pure override(ERC721) returns (string memory) {
    return "data:application/json;base64,";
}
```

This internal function overrides the \_baseURI function from the ERC721 standard. It returns the base URI for all tokens, which is a data URI with the MIME type application/json and the encoding base64.

### transferFrom

```Solidity
function transferFrom(
    address from,
    address to,
    uint256 tokenId
) public pure override(ERC721, IERC721) {
    revert("SoulboundToken: transfer not allowed");
}
```

This public function overrides the transferFrom function from the ERC721 standard. It reverts any transaction, effectively disabling transfers of Soulbound tokens.

### burn

```Solidity
function burn(uint256 tokenId) public override {
    address owner = ownerOf(tokenId);
    uint8 soulboundToken = tokenIdToSoulboundTokens[tokenId];
    claimedSoulboundToken[owner][soulboundToken] == false;
    super.burn(tokenId);
}
```

This public function overrides the burn function from the ERC721Burnable extension. It burns a specific Soulbound token and sets it as unclaimed by the owner.

# SoulboundStorage Smart Contract

The `SoulboundStorage` contract is a storage contract for Soulbound tokens. It provides functions to create Soulbound tokens, construct token attributes, and get the current counter value.

## State Variables

- `counter`: An internal variable used to keep track of the total number of Soulbound tokens.
- `soulboundTokenToUri`: A public mapping in the `SoulboundStorage` contract that associates each Soulbound token (represented by a unique number) with a URI, which is a string representation of the token's metadata in base64-encoded JSON format.
- `numberToSoulboundToken`: A public mapping from a token number to a `SoulboundTokenStruct`.
- `tokenIdToSoulboundToken`: A public mapping from a token ID to a token number.
- `soulboundTokenToMintingType`: A public mapping from a token number to a minting type.

## Structs

- `SoulboundTokenStruct`: This struct is used to store the attributes of a Soulbound token. It includes `MediaType`, `IPFS`, `Name`, `Description`, and `Rarity`.

## Constructor

- `constructor() Ownable(msg.sender)`: This constructor function initializes the contract with two Soulbound tokens.

## Functions

# constructor

```Solidity
constructor() Ownable(msg.sender) {
    // ...
}
```

This constructor function initializes the contract with two pre-defined Soulbound tokens.

# createSoulboundToken

```Solidity
function createSoulboundToken(
    string memory _mediaType,
    string memory _IPFS,
    string memory _name,
    string memory _description,
    string memory _rarity,
    uint8 _mintingType
) public onlyOwner returns (bool success, uint8 StandardTokenNumber) {
    // ...
}
```

This public function creates a new Soulbound token with the provided attributes and minting type. It returns a boolean indicating whether the token was successfully created and the token number.

# constructAttributes

```Solidity
function constructAttributes(
    uint256 _tokenId
) internal view returns (bytes memory) {
    // ...
}
```

This internal function constructs the attributes for a given token ID. It retrieves the SoulboundTokenStruct for the token ID and encodes it into a JSON string. The JSON string includes the name, description, media type, IPFS link, and rarity of the token. The function returns the JSON string as a byte array.

# getCounter

```Solidity
function getCounter() external view returns (uint8) {
    return counter - 1;
}
```

This external function returns the current counter value minus one. The counter value is a state variable that tracks the total number of tokens or the last token ID.

# Foundry Framework

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
