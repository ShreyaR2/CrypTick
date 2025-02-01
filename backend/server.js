const express = require('express')
const Web3 = require('web3').Web3;
const { HttpProvider } = require('web3-providers-http');
const dataRoutes = require('./src/route/dataRoutes');
const app = express();
require('dotenv').config();


const web3 = new Web3(new HttpProvider(process.env.INFURA_SEPOLIA));

const contractABI =[
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "_factory",
       "type": "address"
      },
      {
       "internalType": "address",
       "name": "_weth",
       "type": "address"
      }
     ],
     "stateMutability": "nonpayable",
     "type": "constructor"
    },
    {
     "inputs": [
      {
       "internalType": "address",
       "name": "token",
       "type": "address"
      }
     ],
     "name": "getMarketData",
     "outputs": [
      {
       "internalType": "uint256[12]",
       "name": "stats",
       "type": "uint256[12]"
      }
     ],
     "stateMutability": "view",
     "type": "function"
    }
   ]

const contractAddress = "0x37f0de6ff7efa9c72c7a79b8531b05d071395938";
const tokenAddress = "0x779877A7B0D9E8603169DdbD7836e478b4624789";




// getAllData();
// fetchAndStoreMarketData();





//Clean Code




app.use('/api/v1/dataRoutes',dataRoutes);

app.listen(3000,()=>{
    console.log("Server is running on 3000");
    
})