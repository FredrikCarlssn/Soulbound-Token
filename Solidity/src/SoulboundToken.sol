// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {SoulboundStorage} from "./721Adaption/SoulboundStorage.sol";
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";

contract SoulboundToken is ERC721, SoulboundStorage {
    uint256 private _tokenIdCounter;
    mapping(address => mapping(uint8 => bool)) public allowList; //address => SoulboundTokens => bool
    mapping(address => mapping(uint8 => bool)) public claimedSoulboundToken; //address => SoulboundTokens => bool

    error nonExistentToken(uint256 _tokenId);
    error invalidMint(uint8 MintingType, uint8 SoulboundToken, address Address);
    error alereadyExists(uint8 SoulboundToken);

    enum MintingType {
        Everyone, // 0
        AllowList, // 1
        Owner // 2
    }

    constructor() ERC721("SoulBound", "SBT") {}

    // ------------------ //
    //  Minting Function  //
    // ------------------ //

    function mintSoulboundToken(
        address _recipient,
        uint8 _soulboundToken
    ) public {
        address sender = msg.sender;
        uint8 mintingType = soulboundTokenToMintingType[_soulboundToken];
        if (mintingType == uint8(MintingType.Everyone)) {
            Everyone(_recipient, _soulboundToken);
        } else if (mintingType == uint8(MintingType.AllowList)) {
            AllowList(_recipient, _soulboundToken, sender);
        } else if (mintingType == uint8(MintingType.Owner)) {
            Owner(_recipient, _soulboundToken, sender);
        } else {
            revert invalidMint(mintingType, _soulboundToken, _recipient);
        }

        _tokenIdCounter += 1;
        tokenIdToSoulboundTokens[_tokenIdCounter] = _soulboundToken;
        _safeMint(_recipient, _tokenIdCounter);
    }

    function Everyone(address _recipient, uint8 _soulboundToken) internal {
        if (claimedSoulboundToken[_recipient][_soulboundToken] == true) {
            revert invalidMint(0, _soulboundToken, _recipient);
        } else {
            claimedSoulboundToken[_recipient][_soulboundToken] = true;
        }
    }

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

    // ------------------ //
    // AllowList Functions//
    // ------------------ //

    function addToAllowList(
        address _address,
        uint8 _soulboundToken
    ) public onlyOwner {
        allowList[_address][_soulboundToken] = true;
    }

    function removeFromAllowList(
        address _address,
        uint8 _soulboundToken
    ) public onlyOwner {
        allowList[_address][_soulboundToken] = false;
    }

    // ------------------ //
    // URI-JSON Generator //
    // ------------------ //

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

    function _baseURI() internal pure override(ERC721) returns (string memory) {
        return "data:application/json;base64,";
    }

    // ------------------ //
    // Enable Burn //
    // ------------------ //

    function burn(uint256 tokenId) public {
        _burn(tokenId);
    }

    // ------------------ //
    // Disable Transfers  //
    // ------------------ //

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public pure override {
        revert("SoulboundToken: transfer not allowed");
    }
}
