const express = require('express');
// ETH
const PORT = process.env.PORT || 5000;
var Eth = require('web3-eth');
// var eth = new Eth(Eth.givenProvider || 'ws://some.local-or-remote.node:8546');
var eth = new Eth('http://localhost:8545');
// WEB3
var Web3 = require('web3');
// var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
var web3 = new Web3('http://localhost:8545');

var app = express();

app.use(function (req, res, next) {
    // print_request(req);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .get('/hello', (req, res, next) => {
        console.log('get hello');
        
        res.status(200).send("(๑•̀ㅂ•́)و✧");
    })
    .get('/methods', (req, res, next) => {
        console.log(Web3.utils);
        console.log("------------");
        console.log(Web3.version);
        console.log("------------");
        console.log(Web3.givenProvider);
        console.log("------------");
        console.log(Web3.providers);
        console.log("------------");
        console.log(Web3.modules);
        console.log("------------");
        res.status(200).send("done");
    })
    .get('/account', (req, res, next) => {
        web3.eth.getAccounts(console.log);
        res.status(200).send("done");
    })
    .listen(PORT, () => {
        console.log(`Listen on ${PORT}`);
        console.log(`Process pid: ${process.pid}`);
    });