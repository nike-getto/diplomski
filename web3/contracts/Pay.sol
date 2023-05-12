// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Pay {
    // Storage variables
    uint256 private s_amountToPay;
    address private s_addressToPay;

    constructor(uint256 _amountToPay, address _addressToPay) {
        s_amountToPay = _amountToPay;
        s_addressToPay = _addressToPay;
    }

    // Getter functions
    function getAmountToPay() public view returns (uint256) {
        return s_amountToPay;
    }

    function getAddressToPay() public view returns (address) {
        return s_addressToPay;
    }
}
