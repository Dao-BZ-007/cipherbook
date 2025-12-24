// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CipherBook {

    enum OrderType { BUY, SELL }
    enum OrderStatus { OPEN, FILLED, CANCELLED }

    struct Order {
        address owner;
        OrderType orderType;
        uint64 price;
        uint64 amount;
        OrderStatus status;
    }

    uint256 public nextOrderId;
    mapping(uint256 => Order) public orders;

    function placeOrder(
        uint8 orderType,
        uint64 price,
        uint64 amount
    ) external {
        orders[nextOrderId] = Order({
            owner: msg.sender,
            orderType: OrderType(orderType),
            price: price,
            amount: amount,
            status: OrderStatus.OPEN
        });

        nextOrderId++;
    }

    function cancelOrder(uint256 orderId) external {
        Order storage order = orders[orderId];
        require(order.owner == msg.sender, "Not owner");
        require(order.status == OrderStatus.OPEN, "Already closed");

        order.status = OrderStatus.CANCELLED;
    }

    // ✅ NEW — confirm match
    function confirmMatch(uint256 buyId, uint256 sellId) external {
        Order storage buy = orders[buyId];
        Order storage sell = orders[sellId];

        require(buy.status == OrderStatus.OPEN, "Buy closed");
        require(sell.status == OrderStatus.OPEN, "Sell closed");
        require(buy.orderType == OrderType.BUY, "Not BUY");
        require(sell.orderType == OrderType.SELL, "Not SELL");
        require(buy.price >= sell.price, "Price mismatch");

        buy.status = OrderStatus.FILLED;
        sell.status = OrderStatus.FILLED;
    }
}
