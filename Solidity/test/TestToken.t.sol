// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {SoulboundToken} from "../src/SoulboundToken.sol";

contract TestToken is Test {
    SoulboundToken soulboundToken;

    bytes4 selector = bytes4(keccak256("invalidMint(uint8,uint8,address)"));

    struct SoulboundTokenStruct {
        string MediaType;
        string IPFS;
        string Name;
        string Description;
        string Rarity;
        uint8 XpBoost;
    }

    function setUp() public {
        vm.prank(msg.sender);
        soulboundToken = new SoulboundToken();
        vm.prank(msg.sender);
        soulboundToken.mintSoulboundToken(msg.sender, 1);
    }

    function testMintedSoulboundToken() public {
        assertEq(soulboundToken.claimedSoulboundToken(msg.sender, 1), true);
    }

    function testUri() public {
        string memory uri = soulboundToken.tokenURI(1);
        console.log("uri", uri);
        assertEq(
            uri,
            "data:application/json;base64,eyJuYW1lIjoiS25pZ2h0IiwgImRlc2NyaXB0aW9uIjoiVGhlIEZlbG9yaWFuIGtuaWdodHMgYXJlIGEgcG93ZXJmdWwgaHlicmlkIG9mIGh1bWFuIGFuZCBsaW9uLCBzdGFuZGluZyBhcyBhIGJlYWNvbiBvZiB2YWxvciBpbiB0aGUgd29ybGQgb2YgTmFyYW11bnouIFJlbm93bmVkIGZvciB0aGVpciBwcm93ZXNzIGluIG1lbGVlIGNvbWJhdCwgdGhlc2Ugbm9ibGUga25pZ2h0cyB3aWVsZCBzd29yZHMgYW5kIHNoaWVsZHMgdG8gZGVmZWF0IHRoZWlyIGVuZW1pZXMuIiwgImltYWdlIjogImlwZnM6Ly9RbVJvNUJDaE5iWkdOUXlaUkZjeWF1akY4WEdaWnlrcXlWRjc3TWI0N0R5ZURGIiwgImF0dHJpYnV0ZXMiOiBbeyJ0cmFpdF90eXBlIjogIlJhcml0eSIsICJ2YWx1ZSI6ICJDb21tb24ifV19"
        );
    }

    function testAllowList() public {
        vm.prank(msg.sender);
        soulboundToken.addToAllowList(msg.sender, 2);
        assertEq(soulboundToken.allowList(msg.sender, 2), true);
        vm.prank(msg.sender);
        soulboundToken.mintSoulboundToken(msg.sender, 2);
        assertEq(soulboundToken.claimedSoulboundToken(msg.sender, 2), true);
    }

    function testOwner() public {
        vm.prank(msg.sender);
        soulboundToken.mintSoulboundToken(msg.sender, 3);
        assertEq(soulboundToken.claimedSoulboundToken(msg.sender, 3), true);
    }

    function testInvalidEveryoneMint() public {
        vm.prank(msg.sender);
        soulboundToken.createSoulboundToken(
            "image", //mediaType
            "QmUTeNHrcRZBY5zDwmQHJ3pkSafsLP6JLeG8bvB8zPwH7i", //IPFS
            "Soulbound Token Owner", //name
            "A token that is soulbound to your wallet.", //description
            "Common", //rarity
            0 //mintingType
        );
        // First mint
        vm.prank(msg.sender);
        soulboundToken.mintSoulboundToken(msg.sender, 3);
        // Second mint should fail
        vm.prank(msg.sender);
        vm.expectRevert(abi.encodeWithSelector(selector, 0, 3, msg.sender));
        soulboundToken.mintSoulboundToken(msg.sender, 3);
    }

    function testInvalidAllowListMint() public {
        vm.prank(msg.sender);
        soulboundToken.createSoulboundToken(
            "image", //mediaType
            "QmUTeNHrcRZBY5zDwmQHJ3pkSafsLP6JLeG8bvB8zPwH7i", //IPFS
            "Soulbound Token Owner", //name
            "A token that is soulbound to your wallet.", //description
            "Common", //rarity
            1 //mintingType
        );
        //1
        vm.prank(msg.sender);
        vm.expectRevert(abi.encodeWithSelector(selector, 1, 3, msg.sender));
        soulboundToken.mintSoulboundToken(msg.sender, 3);
        assertEq(soulboundToken.claimedSoulboundToken(msg.sender, 3), false);
    }

    function testInvalidOwnerMint() public {
        vm.prank(msg.sender);
        soulboundToken.createSoulboundToken(
            "image", //mediaType
            "QmUTeNHrcRZBY5zDwmQHJ3pkSafsLP6JLeG8bvB8zPwH7i", //IPFS
            "Soulbound Token Owner", //name
            "A token that is soulbound to your wallet.", //description
            "Common", //rarity
            2 //mintingType
        );
        //2
        vm.prank(address(0xc9c81Af14eC5d7a4Ca19fdC9897054e2d033bf05));
        vm.expectRevert(abi.encodeWithSelector(selector, 2, 3, msg.sender));
        soulboundToken.mintSoulboundToken(msg.sender, 3);
        assertEq(soulboundToken.claimedSoulboundToken(msg.sender, 3), false);
    }

    function testCreateAndMintSoulboundToken() public {
        uint8 counter = soulboundToken.getCounter();

        vm.prank(msg.sender);
        soulboundToken.createSoulboundToken(
            "image", //mediaType
            "QmUTeNHrcRZBY5zDwmQHJ3pkSafsLP6JLeG8bvB8zPwH7i", //IPFS
            "Soulbound Token Owner", //name
            "A token that is soulbound to your wallet.", //description
            "Common", //rarity
            2 //mintingType
        );
        counter++;

        assertEq(soulboundToken.getCounter(), counter);
        assertEq(soulboundToken.soulboundTokenToMintingType(counter), 2);

        vm.prank(msg.sender);
        soulboundToken.mintSoulboundToken(msg.sender, counter);
        assertEq(
            soulboundToken.claimedSoulboundToken(msg.sender, counter),
            true
        );
    }
}
