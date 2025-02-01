import React from "react";
import Hero1 from "../components/HeroTyping";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// import { axiosInstance } from "../lib/axios";
import axios from "axios";

const Dashboard = () => {
  const {
    data: crypticCoin,isError,isLoading,} = useQuery({
    queryKey: ["crypticCoin"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            // per_page: 10,
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

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-gray-600 font-medium ">Coin</th>
              <th className="px-6 py-3 text-left text-gray-600 font-medium">Price</th>
            </tr>
          </thead>
          <tbody>
            {crypticCoin?.map((c) => (
              <tr key={c.id} className="border-b">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img src={c.image} alt={c.name} className="w-6 h-6" />
                <Link to={`/coin/${c.symbol}`}>
                  <span className="font-medium ml-8">{c.name}</span>
                </Link>
                </td>
                <td className="px-6 py-4 font-medium">${c.current_price.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
