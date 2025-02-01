import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "../pages/NewsItem"; // Ensure this component exists

const ApiShi = () => {
  const [newsData, setNewsData] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        if (!apiKey) {
          setError("CryptoPanic API key is missing");
          setIsLoading(false);
          return;
        }

        const apiUrl = `/api/v1/posts/?auth_token=${apiKey}&filter=rising`;        
        console.log("Fetching news from:", apiUrl);

        const response = await axios.get(apiUrl);
        if (response.data && response.data.results) {
          setNewsData(response.data.results);
          console.log("News data:", response.data.results);
        } else {
          setError("No news data found");
        }
      } catch (err) {
        setError(`Error fetching news: ${err.message}`);
      }
    };

    const fetchCryptoPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );

        setCryptoData(response.data);
        console.log(response.data);
      } catch (err) {
        setError(`Error fetching crypto data: ${err.message}`);
      }
    };

    // Fetch both da
    // ta sources

    
    Promise.all([fetchNews(), fetchCryptoPrices()])
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>CryptoPanic News & CoinGecko Prices</h1>

      {isLoading && <p>Loading data...</p>}
      {error && <p>{error}</p>}

      {/* News Section */}
      <div>
        <h2>Latest Crypto News:</h2>
        <ul>
          {newsData.map((newsItem, index) => (
            <NewsItem key={index} newsItem={newsItem} />
          ))}
        </ul>
      </div>

      {/* Crypto Prices Section */}
      <div>
        <h2>Top 5 Cryptocurrencies</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price (USD)</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData.map((coin) => (
              <tr key={coin.id}>
                <td>
                  <img src={coin.image} alt={coin.name} width="20" height="20" />
                  {coin.name} ({coin.symbol.toUpperCase()})
                </td>
                <td>${coin.current_price.toLocaleString()}</td>
                <td>${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApiShi;
