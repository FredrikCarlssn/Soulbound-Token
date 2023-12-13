//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract SoulboundStorage is Ownable {
    uint8 internal counter = 1;
    mapping(uint8 => SoulboundTokenStruct) public numberToSoulboundToken;
    mapping(uint256 => uint8) public tokenIdToSoulboundTokens;
    mapping(uint8 => uint8) public soulboundTokenToMintingType;

    struct SoulboundTokenStruct {
        string MediaType;
        string IPFS;
        string Name;
        string Description;
        string Rarity;
        uint8 XpBoost;
    }

    constructor() Ownable(msg.sender) {
        createSoulboundToken(
            "image", //mediaType
            "QmUTeNHrcRZBY5zDwmQHJ3pkSafsLP6JLeG8bvB8zPwH7i", //IPFS
            "Soulbound Token", //name
            "A token that is soulbound to your wallet.", //description
            "Common", //rarity
            1, //xpBoost
            0 //mintingType
        );
        createSoulboundToken(
            "image", //mediaType
            "QmUTeNHrcRZBY5zDwmQHJ3pkSafsLP6JLeG8bvB8zPwH7i", //IPFS
            "Soulbound Token AllowList", //name
            "A token that is soulbound to your wallet.", //description
            "Common", //rarity
            1, //xpBoost
            1 //mintingType
        );
        createSoulboundToken(
            "image", //mediaType
            "QmUTeNHrcRZBY5zDwmQHJ3pkSafsLP6JLeG8bvB8zPwH7i", //IPFS
            "Soulbound Token Owner", //name
            "A token that is soulbound to your wallet.", //description
            "Common", //rarity
            1, //xpBoost
            2 //mintingType
        );
    }

    function createSoulboundToken(
        string memory _mediaType,
        string memory _IPFS,
        string memory _name,
        string memory _description,
        string memory _rarity,
        uint8 _xpBoost,
        uint8 _mintingType
    ) public onlyOwner returns (bool success, uint8 StandardTokenNumber) {
        if (
            counter > 255 ||
            _xpBoost > 255 ||
            keccak256(bytes(_mediaType)) == "" ||
            keccak256(bytes(_IPFS)) == "" ||
            keccak256(bytes(_name)) == "" ||
            keccak256(bytes(_description)) == "" ||
            keccak256(bytes(_rarity)) == ""
        ) {
            return (false, 0);
        }

        numberToSoulboundToken[counter] = SoulboundTokenStruct(
            _mediaType,
            _IPFS,
            _name,
            _description,
            _rarity,
            _xpBoost
        );
        soulboundTokenToMintingType[counter] = _mintingType;

        counter += 1;
        return (true, counter - 1);
    }

    function constructAttributes(
        uint256 _tokenId
    ) internal view returns (bytes memory) {
        SoulboundTokenStruct
            storage soulboundTokenStruct = numberToSoulboundToken[
                tokenIdToSoulboundTokens[_tokenId]
            ];
        bytes memory uri = abi.encodePacked(
            '{"name":"',
            soulboundTokenStruct.Name,
            '", "description":"',
            soulboundTokenStruct.Description,
            '", "image": "ipfs://',
            soulboundTokenStruct.IPFS,
            '", "attributes": [',
            '{"trait_type": "Rarity", "value": "',
            soulboundTokenStruct.Rarity,
            '"}, {"trait_type": "XP Boost", "value": ',
            Strings.toString(soulboundTokenStruct.XpBoost),
            "}]}"
        );
        return uri;
    }

    function getCounter() external view returns (uint8) {
        return counter - 1;
    }
}
