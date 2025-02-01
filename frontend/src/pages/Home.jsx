import React from "react";
import Hero1 from "../components/HeroTyping";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// import { axiosInstance } from "../lib/axios";
import axios from "axios";

const Dashboard = () => {
  const {
    data: crypticCoin,isError,isLoading} = useQuery({
    queryKey: ["crypticCoin"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            page: 1,
            sparkline: false,
          },
        }
      );
      return response.data;
    },
  });

  console.log(crypticCoin);
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Top 10 Cryptos</h1>
      {isLoading && <p className="text-center">Loading...</p>}
      {isError && <p className="text-center text-red-500">Error loading data</p>}

      <CoinRanking crypticCoin={crypticCoin} />
    </div>
  );
};

export default Dashboard;
