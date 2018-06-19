const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'butter salmon fabric unique weather boil someone transfer arrest ship blade direct',
    'https://rinkeby.infura.io/Pl6xPjaQsH53VZLUGgI4'
)

const web3 = new Web3(provider);

web3.eth.getAccounts(async function(err, accounts){
    
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there!']})
    .send({gas: '1000000', from: accounts[0]});
    
    console.log("Contract deployed to", result.options.address);
});
