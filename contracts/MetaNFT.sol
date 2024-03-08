// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract MetaNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("Meta", "MTA") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function promptDescription() external pure returns (string memory) {
        return "Generate an image of solana with ethereum in space";
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmUPyC6y8iTR8RMSa81or3NHsfLqoMx1c5XZzw1e4cUNXp/";
    }
}