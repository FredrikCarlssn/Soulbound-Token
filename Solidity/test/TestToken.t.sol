// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {SoulboundToken} from "../src/SoulboundToken.sol";

contract TestToken is Test {
    SoulboundToken soulboundToken;

    uint8 setupCounter;

    bytes4 selector = bytes4(keccak256("invalidMint(uint8,uint8,address)"));
    bytes4 selector2 = bytes4(keccak256("ERC721NonexistentToken(uint256)"));
    bytes4 selector3 =
        bytes4(keccak256("ERC721InsufficientApproval(address,uint256)"));

    struct SoulboundTokenStruct {
        string MediaType;
        string IPFS;
        string Name;
        string Description;
        string Rarity;
    }

    function setUp() public {
        vm.prank(msg.sender);
        soulboundToken = new SoulboundToken();
        vm.prank(msg.sender);
        soulboundToken.createSoulboundToken(
            "image", //mediaType
            "QmUTeNHrcRZBY5zDwmQHJ3pkSafsLP6JLeG8bvB8zPwH7i", //IPFS
            "Soulbound Token", //name
            "A token that is soulbound to your wallet.", //description
            "Common", //rarity
            0 //mintingType
        );
        setupCounter = soulboundToken.getCounter();
        vm.prank(msg.sender);
        soulboundToken.mintSoulboundToken(msg.sender, setupCounter);
    }

    function testClaimedSoulboundtoken() public {
        assertEq(
            soulboundToken.claimedSoulboundToken(msg.sender, setupCounter),
            true
        );
    }

    function testUri() public {
        string memory uri = soulboundToken.tokenURI(1);
        console.log("uri", uri);
        assertEq(
            uri,
            "data:application/json;base64,eyJuYW1lIjoiU291bGJvdW5kIFRva2VuIiwgImRlc2NyaXB0aW9uIjoiQSB0b2tlbiB0aGF0IGlzIHNvdWxib3VuZCB0byB5b3VyIHdhbGxldC4iLCAiaW1hZ2UiOiAiaXBmczovL1FtVVRlTkhyY1JaQlk1ekR3bVFISjNwa1NhZnNMUDZKTGVHOGJ2Qjh6UHdIN2kiLCAiYXR0cmlidXRlcyI6IFt7InRyYWl0X3R5cGUiOiAiUmFyaXR5IiwgInZhbHVlIjogIkNvbW1vbiJ9XX0="
        );
    }

    function testAddToAllowList() public {
        vm.prank(msg.sender);
        soulboundToken.createSoulboundToken(
            "image", //mediaType
            "QmUTeNHrcRZBY5zDwmQHJ3pkSafsLP6JLeG8bvB8zPwH7i", //IPFS
            "Soulbound Token Owner", //name
            "A token that is soulbound to your wallet.", //description
            "Common", //rarity
            1 //mintingType
        );
        uint8 counter = soulboundToken.getCounter();

        vm.prank(msg.sender);
        soulboundToken.addToAllowList(msg.sender, counter);
        assertEq(soulboundToken.allowList(msg.sender, counter), true);
        vm.prank(msg.sender);
        soulboundToken.mintSoulboundToken(msg.sender, counter);
        assertEq(
            soulboundToken.claimedSoulboundToken(msg.sender, counter),
            true
        );
    }

    function testRemoveFromAllowList() public {
        vm.prank(msg.sender);
        soulboundToken.createSoulboundToken(
            "image", //mediaType
            "QmUTeNHrcRZBY5zDwmQHJ3pkSafsLP6JLeG8bvB8zPwH7i", //IPFS
            "Soulbound Token Owner", //name
            "A token that is soulbound to your wallet.", //description
            "Common", //rarity
            1 //mintingType
        );
        uint8 counter = soulboundToken.getCounter();

        vm.prank(msg.sender);
        soulboundToken.addToAllowList(msg.sender, counter);
        assertEq(soulboundToken.allowList(msg.sender, counter), true);
        vm.prank(msg.sender);
        soulboundToken.removeFromAllowList(msg.sender, counter);
        assertEq(soulboundToken.allowList(msg.sender, counter), false);
    }

    function testInvalidEveryoneMint() public {
        // Second mint should fail
        vm.prank(msg.sender);
        vm.expectRevert(
            abi.encodeWithSelector(selector, 0, setupCounter, msg.sender)
        );
        soulboundToken.mintSoulboundToken(msg.sender, setupCounter);
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
        uint8 counter = soulboundToken.getCounter();

        vm.prank(msg.sender);
        vm.expectRevert(
            abi.encodeWithSelector(selector, 1, counter, msg.sender)
        );
        soulboundToken.mintSoulboundToken(msg.sender, counter);
        assertEq(
            soulboundToken.claimedSoulboundToken(msg.sender, counter),
            false
        );
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
        uint8 counter = soulboundToken.getCounter();
        //2
        vm.prank(address(0x4a09304465416C13892beD9574eAedd657708D0f));
        vm.expectRevert(
            abi.encodeWithSelector(selector, 2, counter, msg.sender)
        );
        soulboundToken.mintSoulboundToken(msg.sender, counter);
        assertEq(
            soulboundToken.claimedSoulboundToken(msg.sender, counter),
            false
        );
    }

    function testCreateAndMintSoulboundToken() public {
        uint8 startCount = soulboundToken.getCounter();
        vm.prank(msg.sender);
        soulboundToken.createSoulboundToken(
            "image", //mediaType
            "QmUTeNHrcRZBY5zDwmQHJ3pkSafsLP6JLeG8bvB8zPwH7i", //IPFS
            "Soulbound Token Owner", //name
            "A token that is soulbound to your wallet.", //description
            "Common", //rarity
            2 //mintingType
        );
        uint8 counter = soulboundToken.getCounter();

        assertEq(startCount, counter - 1);
        assertEq(soulboundToken.soulboundTokenToMintingType(counter), 2);

        vm.prank(msg.sender);
        soulboundToken.mintSoulboundToken(msg.sender, counter);
        assertEq(
            soulboundToken.claimedSoulboundToken(msg.sender, counter),
            true
        );
    }

    function testTransferRevert() public {
        vm.prank(msg.sender);
        vm.expectRevert("SoulboundToken: transfer not allowed");
        soulboundToken.transferFrom(
            msg.sender,
            address(0x4a09304465416C13892beD9574eAedd657708D0f),
            setupCounter
        );
    }

    function testOwnerBurn() public {
        vm.prank(msg.sender);
        soulboundToken.burn(1);
        assertEq(soulboundToken.claimedSoulboundToken(msg.sender, 1), false);
        vm.expectRevert(abi.encodeWithSelector(selector2, 1));
        soulboundToken.ownerOf(1);
    }

    function testInvalidBurn() public {
        vm.expectRevert(
            abi.encodeWithSelector(
                selector3,
                0x7FA9385bE102ac3EAc297483Dd6233D62b3e1496,
                1
            )
        );
        soulboundToken.burn(1);
    }
}
