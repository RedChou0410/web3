pragma solidity ^0.8.4;
contract Test {
    uint a;
    address d = 0xdCad3a6d3569DF655070DEd06cb7A1b2Ccd1D3AF;

    constructor(uint testInt)  { a = testInt;}

    event Event(uint indexed b, bytes32 c);

    event Event2(uint indexed b, bytes32 c);

    function foo(uint b, bytes32 c) public returns(address) {
        emit Event(b, c);
        return d;
    }
}


// would result in the JSON:
[
    {
        "type": "constructor"
        "stateMutability": "nonpayable",
        "inputs": [{"internalType":"uint256","name":"testInt","type":"uint256"}],
    },
    {
        "type": "event"
        "name": "Event",
        "inputs": [{"indexed":true,"internalType":"uint256","name":"b","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"c","type":"bytes32"}],
        "anonymous": false,
    },
    {
        "type": "event"
        "name": "Event2",
        "inputs": [{"indexed":true,"internalType":"uint256","name":"b","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"c","type":"bytes32"}],
        "anonymous": false,
    },
    {
        "type": "function"
        "name": "foo",
        "stateMutability": "nonpayable",
        "inputs": [{"internalType":"uint256","name":"b","type":"uint256"},{"internalType":"bytes32","name":"c","type":"bytes32"}],
        "outputs": [{"internalType":"address","name":"","type":"address"}],
    }
]