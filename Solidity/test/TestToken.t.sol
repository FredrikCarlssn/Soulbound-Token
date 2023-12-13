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
            "data:application/json;base64,eyJuYW1lIjoiU291bGJvdW5kIFRva2VuIiwgImRlc2NyaXB0aW9uIjoiQSB0b2tlbiB0aGF0IGlzIHNvdWxib3VuZCB0byB5b3VyIHdhbGxldC4iLCAiaW1hZ2UiOiAiaXBmczovL1FtVVRlTkhyY1JaQlk1ekR3bVFISjNwa1NhZnNMUDZKTGVHOGJ2Qjh6UHdIN2kiLCAiYXR0cmlidXRlcyI6IFt7InRyYWl0X3R5cGUiOiAiUmFyaXR5IiwgInZhbHVlIjogIkNvbW1vbiJ9LCB7InRyYWl0X3R5cGUiOiAiWFAgQm9vc3QiLCAidmFsdWUiOiAxfV19"
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
        //0
        vm.prank(msg.sender);
        vm.expectRevert(abi.encodeWithSelector(selector, 0, 1, msg.sender));
        soulboundToken.mintSoulboundToken(msg.sender, 1);
    }

    function testInvalidAllowListMint() public {
        //1
        vm.prank(msg.sender);
        vm.expectRevert(abi.encodeWithSelector(selector, 1, 2, msg.sender));
        soulboundToken.mintSoulboundToken(msg.sender, 2);
        assertEq(soulboundToken.claimedSoulboundToken(msg.sender, 2), false);
    }

    function testInvalidOwnerMint() public {
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
            1, //xpBoost
            2 //mintingType
        );

        assertEq(soulboundToken.getCounter(), counter + 1);
        assertEq(soulboundToken.soulboundTokenToMintingType(counter), 2);

        vm.prank(msg.sender);
        soulboundToken.mintSoulboundToken(msg.sender, counter);
        assertEq(
            soulboundToken.claimedSoulboundToken(msg.sender, counter),
            true
        );
    }
}
