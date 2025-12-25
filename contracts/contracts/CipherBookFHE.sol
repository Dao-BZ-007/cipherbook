// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@zama-fhevm/contracts/FHE.sol";

contract CipherBookFHE {

    enum OrderType { BUY, SELL }
    enum OrderStatus { OPEN, FILLED, CANCELLED }

    struct Order {
        address owner;
        OrderType orderType;
        euint64 price;     // 🔐 encrypted
        euint64 amount;    // 🔐 encrypted
        OrderStatus status;
    }

    uint256 public nextOrderId;
    mapping(uint256 => Order) internal orders;

    // ----------------------------
    // PLACE ORDER (ENCRYPTED)
    // ----------------------------
    function placeOrder(
        uint8 orderType,
        bytes calldata encryptedPrice,
        bytes calldata encryptedAmount
    ) external {
        orders[nextOrderId] = Order({
            owner: msg.sender,
            orderType: OrderType(orderType),
            price: FHE.asEuint64(encryptedPrice),
            amount: FHE.asEuint64(encryptedAmount),
            status: OrderStatus.OPEN
        });

        nextOrderId++;
    }

    // ----------------------------
    // CONFIRM MATCH (FHE LOGIC)
    // ----------------------------
    function confirmMatch(uint256 buyId, uint256 sellId) external {
        Order storage buy = orders[buyId];
        Order storage sell = orders[sellId];

        require(buy.status == OrderStatus.OPEN, "Buy closed");
        require(sell.status == OrderStatus.OPEN, "Sell closed");
        require(buy.orderType == OrderType.BUY, "Not BUY");
        require(sell.orderType == OrderType.SELL, "Not SELL");

        // 🔐 FHE comparison (NO DECRYPTION)
        ebool canMatch = FHE.ge(buy.price, sell.price);
        require(FHE.decrypt(canMatch), "Price mismatch");

        buy.status = OrderStatus.FILLED;
        sell.status = OrderStatus.FILLED;
    }
}
