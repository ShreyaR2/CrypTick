const axios = require('axios');


const getIndividualData = async () => {
  try {
    const contract = new web3.eth.Contract(contractABI, contractAddress);
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
      const response = await axios.post(
        "http://localhost:8000/cryptik_prediction",
        inputData
      );
      console.log("Prediction:", response.data);
      console.log("Data sent successfully");
    } catch (error) {
      console.log("Error in ML in getIndividualData : ", error.message);
    }
  } catch (err) {
    console.error("Error in Blockchain in getIndividualData :", err.message);
  }
};

const getAllData = async () => {
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
      const contract = new web3.eth.Contract(contractABI, contractAddress);
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
        const response = await axios.post(
          "http://localhost:8000/cryptik_prediction",
          inputData
        );
        // console.log("Prediction:", response.data);
        finalData.push(response.data);
      } catch (error) {
        console.log("Error in ML: ", error.message);
      }
    } catch (error) {
      console.log("Error in Blokchain", error.message);
      break;
    }
  }

  console.log(finalData);
};

modeule.exports = {
  getAllData,
  getIndividualData,
};
