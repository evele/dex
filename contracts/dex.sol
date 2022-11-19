pragma experimental ABIEncoderV2;
pragma solidity ^0.8.0;


import "./wallet.sol";


contract Dex is Wallet {

    enum Side  {
        BUY,
        SELL
    }

    struct Order {
        uint id;
        address trader;
        bool buyOrder;
        bytes32 ticker;
        uint amount;
        uint price;
    }

    mapping(bytes32 => mapping(uint => Order[])) public orderBook;

    function getOrderBook(bytes32 _ticker, Side _side) view public returns(Order[] memory){
        return orderBook[_ticker][uint(_side)];
    }

    function createLimitOrder(bool _buyOrder,bytes32 _ticker,uint _amount,uint _price) public {
        
    }
}