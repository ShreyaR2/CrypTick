import React, { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import axios from "axios";
import { ReactTyped } from "react-typed";

// Register Chart.js components
Chart.register(...registerables);

const CryptoChart = ({ tokenData, coinData }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [pumpDump, setPumpDump] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${tokenData?.id}/market_chart`,
          { params: { vs_currency: "usd", days: 2 } }
        );

        const prices = response.data.prices;
        const labels = prices.map((price) => {
          const date = new Date(price[0]);
          return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}`;
        });
        const data = prices.map((price) => price[1]);

        setChartData({
          labels,
          datasets: [
            {
              label: `${tokenData?.symbol.toUpperCase()} Price (USD)`,
              data,
              borderColor: "#4f46e5",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: true,
              tension: 0.4,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [tokenData]);

  useEffect(() => {
    if (chartRef.current && chartData.labels.length > 0) {
      const ctx = chartRef.current.getContext("2d");

      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      chartRef.current.chart = new Chart(ctx, {
        type: "line",
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                title: (tooltipItems) => tooltipItems[0].label,
                label: (context) =>
                  `${context.dataset.label}: $${context.raw.toFixed(2)}`,
              },
            },
          },
          scales: {
            x: {
              display: true,
              title: { display: true, text: "Date & Time" },
              ticks: {
                callback: function (value, index, values) {
                  const date = chartData.labels[index];
                  return date.split(" ")[0]; // Show only date on x-axis
                },
              },
            },
            y: { display: true, title: { display: true, text: "Price (USD)" } },
          },
        },
      });
    }
  }, [chartData]);

  const handleAnalysis = () => {
    setIsTyping(true);
    setShowAnalysis(false);
    setPumpDump(coinData);

    setTimeout(() => {
      setIsTyping(false);
      setShowAnalysis(true);
    }, 1000); // Adjust this to match ReactTyped duration
  };


  console.log("coinData",coinData);
  
  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg mx-auto w-full">
      {/* Coin Header */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={tokenData?.image}
          alt={tokenData?.name}
          className="w-10 h-10"
        />
        <h2 className="text-2xl font-semibold">
          {tokenData?.name} ({tokenData?.symbol.toUpperCase()})
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { title: "24h High", value: `$${tokenData?.high_24h}` },
          { title: "24h Low", value: `$${tokenData?.low_24h}` },
          { title: "Current Price", value: `$${tokenData?.current_price}` },
          { title: "Market Cap", value: `$${tokenData?.market_cap}` },
        ].map((stat, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-sm text-gray-500">{stat.title}</div>
            <div className="font-semibold text-lg">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Chart + Analysis Section */}
      <h1 className="text-lg text-center font-semibold mb-2">
        Last 48 hrs data
      </h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Chart Section */}
        <div className="flex-1">
          <canvas ref={chartRef} className="w-full h-64" />
        </div>

        {/* Analysis Section */}
        <div className="flex flex-col gap-4 p-4 bg-indigo-50 rounded-lg w-full md:w-1/3">
          <button
            onClick={handleAnalysis}
            disabled={isTyping || showAnalysis}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Show Market Analysis for last 48 hours
          </button>

          {/* ReactTyped Animation */}

          {isTyping && !showAnalysis ? (
            <ReactTyped
              className="text-lg font-semibold text-indigo-800"
              strings={[
                "Analyzing bruh...",
                "Hacking into your MetaMask...",
                "Fetching Sepolia ethers...",
              ]}
              typeSpeed={80}
              backSpeed={40}
              showCursor={false}
              loop={false}
            />
          ) : (
            <div>
              {showAnalysis && (
                <div>
                  {pumpDump == 0 ? (
                    <div>
                      <ReactTyped
                        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                        strings={[`📉 The price has experienced rapid fluctuations over the last 48 hours, peaking at ${tokenData?.high_24h} and dropping to ${tokenData?.low_24h}. The market cap indicates this cryptocurrency is ${tokenData?.market_cap > 1000000000 ? 'a large-cap asset' : 'a mid-cap asset'}, but the sharp price movements and volatility suggest potential signs of a pump-and-dump scenario. Traders should proceed with caution.`
                        ]}
                        typeSpeed={70}
                        startDelay={500}
                        cursorChar=" :)"
                      />
                    </div>
                  ) : (
                    <div>
                      <ReactTyped
                        className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                        strings={[`
                          📈 The price has shown stability in the last 48 hours, reaching a high of ${tokenData?.high_24h} and a low of ${tokenData?.low_24h}. With a market cap indicating this cryptocurrency is ${tokenData?.market_cap > 1000000000 ? 'a large-cap asset' : 'a mid-cap asset'}, the price fluctuations seem to align with natural market trends, suggesting there are no immediate concerns of a pump-and-dump.`
                        ]}
                        typeSpeed={70}
                        startDelay={500}
                        cursorChar=" :)"
                      />
                    </div>
                  )}

                  {/* <div className="p-4 bg-indigo-100 rounded-lg animate-fade-in">
                    <p className="text-gray-700">
                      📈 The price has shown volatility in the last 24 hours,
                      reaching a high of <strong>${tokenData?.high_24h}</strong>{" "}
                      and a low of <strong>${tokenData?.low_24h}</strong>.{" "}
                      Market cap indicates this cryptocurrency is{" "}
                      {tokenData?.market_cap > 1000000000
                        ? "a large-cap asset"
                        : "a mid-cap asset"}
                      .
                    </p>
                  </div> */}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CryptoChart;
