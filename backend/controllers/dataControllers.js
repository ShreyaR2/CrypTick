const axios = require('axios');
const Web3 = require('web3').Web3;
const { HttpProvider } = require('web3-providers-http');
const contractABI = require('../abi.json');
require('dotenv').config();


const web3 = new Web3(new HttpProvider(process.env.INFURA_SEPOLIA));

const getIndividualData = async (req,res) => { 
 
  const {tokenAddress} = req.body;
  
  try {
    const contract = new web3.eth.Contract(contractABI, process.env.CONTRACT_ADDRESS);
    const result = await contract.methods.getMarketData(tokenAddress).call();

    const SCALE_FACTOR = 1e11;
    try {
      const inputData = {
        std_rush_order: Number(result[0]) / SCALE_FACTOR,
        avg_rush_order: Number(result[1]) / SCALE_FACTOR,
        std_trades: Number(result[2]) / SCALE_FACTOR,
        std_volume: Number(result[3]) / SCALE_FACTOR,
        avg_volume: Number(result[4]) / SCALE_FACTOR,
        std_price: Number(result[5]) / SCALE_FACTOR,
        avg_price: Number(result[6]) / SCALE_FACTOR,
        avg_price_max: Number(result[7]) / SCALE_FACTOR,
        hour_sin: Number(result[8]) / SCALE_FACTOR,
        minute_sin: Number(result[9]) / SCALE_FACTOR,
        minute_cos: Number(result[10]) / SCALE_FACTOR,
        avg_PV: (Number(result[6]) * Number(result[4])) / SCALE_FACTOR ** 2, // Normalize price * volume
      };

      // Send scaled data to FastAPI
      const response = await axios.post("http://localhost:8000/cryptik_prediction",inputData);
      console.log("Prediction:", response.data);

      res.status(200).json(response.data);

    } catch (error) {
      console.log("Error in ML in getIndividualData : ", error.message);
      return res.status(500).json({message:"Error in ML in getIndividualData"});
    }

  } catch (err) {
    console.error("Error in Blockchain in getIndividualData :", err.message);
    return res.status(500).json({message:"Error in Blockchain in getIndividualData"});
  }

};

const getAllData = async (req,res) => {
  const memeCoins = [
    "0x7169D38820dfd117C3FA1f22a697dBA58d90BA06",
    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    "0x779877A7B0D9E8603169DdbD7836e478b4624789",
    "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
    "0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5",
  ];


  let finalData = [];
  for (let i = 0; i < memeCoins.length; i++) {
    try {
      const contract = new web3.eth.Contract(contractABI, process.env.CONTRACT_ADDRESS);
      const result = await contract.methods.getMarketData(memeCoins[i]).call();

      const SCALE_FACTOR = 1e11;
      try {
        const inputData = {
          std_rush_order: Number(result[0]) / SCALE_FACTOR,
          avg_rush_order: Number(result[1]) / SCALE_FACTOR,
          std_trades: Number(result[2]) / SCALE_FACTOR,
          std_volume: Number(result[3]) / SCALE_FACTOR,
          avg_volume: Number(result[4]) / SCALE_FACTOR,
          std_price: Number(result[5]) / SCALE_FACTOR,
          avg_price: Number(result[6]) / SCALE_FACTOR,
          avg_price_max: Number(result[7]) / SCALE_FACTOR,
          hour_sin: Number(result[8]) / SCALE_FACTOR,
          minute_sin: Number(result[9]) / SCALE_FACTOR,
          minute_cos: Number(result[10]) / SCALE_FACTOR,
          avg_PV: (Number(result[6]) * Number(result[4])) / SCALE_FACTOR ** 2, // Normalize price * volume
        };

        // Send scaled data to FastAPI
        const response = await axios.post("http://localhost:8000/cryptik_prediction",inputData);
        finalData.push(response.data);

      } catch (error) {
        console.log("Error in ML: ", error.message);
        return res.status(500).json({message:"Error in ML"})
      }
    } catch (error) {
      console.log("Error in Blokchain", error.message);
      return res.status(500).json({message:"Error in Blokchain"})
    }
  }

  console.log(finalData);
  res.status(500).json(finalData);
};


module.exports = {
  getAllData,
  getIndividualData,
};
