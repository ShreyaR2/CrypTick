import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const CryptoCard = ({ data }) => {
  const chartRef = useRef(null);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy existing chart instance if it exists
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      // Create new chart instance
      chartRef.current.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
          datasets: [
            {
              label: 'Price (24h)',
              data: [data.low24, 25000, 26500, 24500, data.high24, data.currentPrice],
              borderColor: '#4f46e5',
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: { grid: { color: '#e5e7eb' } },
            x: { grid: { color: '#e5e7eb' } },
          },
        },
      });
    }
  }, [data]);

  const handleAnalysis = () => {
    setIsLoading(true);
    setShowAnalysis(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowAnalysis(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-lg mx-auto w-full max-w-2xl">
      {/* Chart */}
      <div className="h-64 items-center justify-center">
        <canvas ref={chartRef} />
      </div>

      {/* Coin Header */}
      <div className="flex items-center gap-4">
        <img src={data.image} alt={data.name} className="w-10 h-10" />
        <h2 className="text-xl font-semibold">
          {data.name} ({data.symbol.toUpperCase()})
        </h2>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { title: '24h High', value: `$${data.high24}` },
          { title: '24h Low', value: `$${data.low24}` },
          { title: 'Current Price', value: `$${data.currentPrice}` },
          { title: 'Market Cap', value: `$${data.marketCap.toLocaleString()}` },
        ].map((stat, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="text-sm text-gray-500">{stat.title}</div>
            <div className="font-semibold text-lg">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Analysis Section */}
      <button
        onClick={handleAnalysis}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Show Market Analysis
      </button>

      {isLoading && <div className="text-gray-600">Loading analysis...</div>}

      {showAnalysis && (
        <div className="p-4 bg-indigo-100 rounded-lg animate-fade-in">
          <p className="text-gray-700">
            📈 The price has shown volatility in the last 24 hours, reaching a high of ${data.high24} 
            and a low of ${data.low24}. Market cap indicates this cryptocurrency is 
            {data.marketCap > 1000000000 ? ' a large-cap asset' : ' a mid-cap asset'}.
          </p>
        </div>
      )}
    </div>
  );
};

export default CryptoCard;
