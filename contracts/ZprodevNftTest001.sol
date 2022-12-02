// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ZprodevNftTest001 is ERC721 {
    using Counters for Counters.Counter;
    using Strings for uint256;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("ZPRODEV_NFT_TEST_001", "ZPRODEV_NFT_TEST_001") {}

    function safeMint(address to) public {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        pure
        override(ERC721)
        returns (string memory)
    {
        bytes memory bytesName = abi.encodePacked(
            '"name":"TEST #', tokenId.toString(), '"'
        );
        bytes memory bytesImage = abi.encodePacked(
            '"image":"https://via.placeholder.com/256.png/FFFFFF/000000/?text=', tokenId.toString(), '"'
        );
        bytes memory bytesJson = abi.encodePacked(
            '{',
                bytesName, ',',
                bytesImage,
            '}'
        );
        return string(bytesJson);
    }
}
