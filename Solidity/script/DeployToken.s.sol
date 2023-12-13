// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {SoulboundToken} from "../src/SoulboundToken.sol";

contract DeployToken is Script {
    function run() public returns (SoulboundToken) {
        vm.broadcast();
        SoulboundToken soulboundToken = new SoulboundToken();
        vm.broadcast();
        return soulboundToken;
    }
}
