import { useQuery } from "@tanstack/react-query";
import CoinRanking from "../components/CoinRanking";

const AllCoins = () => {
  const { data: crypticCoin, isError, isLoading,error } = useQuery({
    queryKey: ["crypticCoin"],
    queryFn: async () => {
      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          page: 1,
          sparkline: false,
        },
      });
      return response.data;
    },
    
  });


  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">All Coins</h1>

      {/* Loading and Error States */}
      {isLoading && <p className="text-center text-xl text-gray-500">Loading...</p>}

      {/* {isError && !(error instanceof Error && error.message === "Error loading data") ? (
        <p className="text-center text-xl text-red-500">Error loading data</p>
      ) : null} */}
      {/* CoinRanking Component */}
      {crypticCoin && crypticCoin.length > 0 ? (
        <div className="w-full max-w-screen-xl bg-white p-6 rounded-lg shadow-lg">
          <CoinRanking crypticCoin={crypticCoin} />
        </div>
      ) : (
        <div className="text-center text-xl text-gray-500">No data to show right now</div>
      )}
    </div>
  );
};

export default AllCoins;
