-include .env

.PHONY: flat test vTest localDeploy Sepolia Mumbai

DEFAULT_ANVIL_KEY := 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

flat: 
	@forge flatten src/SoulboundToken.sol --output flattened.sol

test:
	@forge test -vv --gas-report

vTest:
	@forge test -vvvv --gas-report

localDeploy: 
	@forge script script/DeployToken.s.sol:DeployToken --rpc-url http://localhost:8545 --private-key $(DEFAULT_ANVIL_KEY) --broadcast

Sepolia:
	@forge script script/DeployToken.s.sol:DeployToken --rpc-url https://eth-sepolia-public.unifra.io --private-key $(SEPOLIA_TESTNET_PRIVATE_KEY) --broadcast  --etherscan-api-key ${ETHERSCAN_API_KEY} --verify

Mumbai:
	@forge script script/DeployToken.s.sol:DeployToken --rpc-url https://polygon-mumbai-bor.publicnode.com --private-key $(MUMBAI_TESTNET_PRIVATE_KEY) --broadcast  --etherscan-api-key ${POLYGONSCAN_API_KEY} --verify

verify:
	forge verify-contract --etherscan-api-key ${ETHERSCAN_API_KEY} ${ADDRESS} src/SoulboundToken.sol:SoulboundToken --watch  --chain sepolia