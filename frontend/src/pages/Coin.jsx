import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import CryptoCard from "../components/CryptoCard";

const Coin = () => {
  const { symbol } = useParams();

  const { data: crypticCoins } = useQuery({
    queryKey: ["crypticCoins"],
    queryFn: async () => {
      const response = await axiosInstance.get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          page: 1,
          sparkline: false,
        },
      });
      return response.data;
    },
    staleTime: 60000, // Cache data for 60s
  });

  const tokens = [
    { name: "usdt", address: "0x7169D38820dfd117C3FA1f22a697dBA58d90BA06" },
    { name: "uni", address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984" },
    { name: "link", address: "0x779877A7B0D9E8603169DdbD7836e478b4624789" },
    { name: "usdc", address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238" },
    { name: "LINK", address: "0xf8Fb3713D459D7C1018BD0A49D19b4C44290EBE5" },
  ];

  const tokenAddress = useMemo(() => {
    return tokens.find((token) => token.name.toLowerCase() === symbol?.toLowerCase())?.address;
  }, [symbol]);

  const { data: coinData } = useQuery({
    queryKey: ["coinData", tokenAddress],
    queryFn: async () => {
      if (!tokenAddress) return null;
      const response = await axiosInstance.post(`/dataRoutes/name`, { tokenAddress });
      return response.data;
    },
    enabled: !!tokenAddress, // Only fetch if tokenAddress exists
  });

  const tokenData = crypticCoins?.find((t) => t.symbol === symbol);

  return <CryptoCard tokenData={tokenData} coinData={coinData} />;
};

export default Coin;
