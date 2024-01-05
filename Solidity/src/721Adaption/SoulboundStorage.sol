//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";

contract SoulboundStorage is Ownable {
    uint8 internal counter = 1;
    mapping(uint8 => SoulboundTokenStruct) public numberToSoulboundToken;
    mapping(uint8 => string) public soulboundTokenToUri;
    mapping(uint256 => uint8) public tokenIdToSoulboundToken;
    mapping(uint8 => uint8) public soulboundTokenToMintingType;

    struct SoulboundTokenStruct {
        string MediaType;
        string IPFS;
        string Name;
        string Description;
        string Rarity;
    }

    constructor() Ownable(msg.sender) {
        createSoulboundToken(
            "image", //mediaType
            "QmRo5BChNbZGNQyZRFcyaujF8XGZZykqyVF77Mb47DyeDF", //IPFS
            "Knight", //name
            "The Felorian knights are a powerful hybrid of human and lion, standing as a beacon of valor in the world of Naramunz. Renowned for their prowess in melee combat, these noble knights wield swords and shields to defeat their enemies.", //description
            "Common", //rarity
            0 //mintingType
        );
        createSoulboundToken(
            "image", //mediaType
            "QmXo73fbAfLPyx4op8BQi7nT57G8fgGEjRChhnkSXpVH72", //IPFS
            "Gunner", //name
            "The Vulpian gunners are mutated foxes adept at dealing precise damage from close or long range. Known for their agility and quick reflexes, they have a natural bonus to evasion, making them harder to hit in combat.", //description
            "Common", //rarity
            0 //mintingType
        );
    }

    function createSoulboundToken(
        string memory _mediaType,
        string memory _IPFS,
        string memory _name,
        string memory _description,
        string memory _rarity,
        uint8 _mintingType
    ) public onlyOwner returns (bool success, uint8 StandardTokenNumber) {
        if (
            counter > 255 ||
            keccak256(bytes(_mediaType)) == "" ||
            keccak256(bytes(_IPFS)) == "" ||
            keccak256(bytes(_name)) == "" ||
            keccak256(bytes(_description)) == "" ||
            keccak256(bytes(_rarity)) == ""
        ) {
            return (false, 0);
        }

        soulboundTokenToUri[counter] = string(
            abi.encodePacked(
                "data:application/json;base64,",
                Base64.encode(
                    constructAttributes(
                        SoulboundTokenStruct(
                            _mediaType,
                            _IPFS,
                            _name,
                            _description,
                            _rarity
                        )
                    )
                )
            )
        );
        soulboundTokenToMintingType[counter] = _mintingType;

        counter += 1;
        return (true, counter - 1);
    }

    function constructAttributes(
        SoulboundTokenStruct memory soulboundTokenStruct
    ) internal pure returns (bytes memory) {
        bytes memory uri = abi.encodePacked(
            '{"name":"',
            soulboundTokenStruct.Name,
            '", "description":"',
            soulboundTokenStruct.Description,
            '", "',
            soulboundTokenStruct.MediaType,
            '": "ipfs://',
            soulboundTokenStruct.IPFS,
            '", "attributes": [',
            '{"trait_type": "Rarity", "value": "',
            soulboundTokenStruct.Rarity,
            '"}]}'
        );
        return uri;
    }

    function getCounter() external view returns (uint8) {
        return counter - 1;
    }
}
