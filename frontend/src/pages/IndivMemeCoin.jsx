import React from 'react';
import CryptoCard from '../components/CryptoCard';

const IndivMemeCoin = () => {
    return (
        <div>
<CryptoCard data={{
  name: 'Bitcoin',
  symbol: 'btc',
  image: 'https://example.com/bitcoin.png',
  high24: 29432,
  low24: 28345,
  currentPrice: 28976,
  marketCap: 562000000000
}} />        </div>
    );
};

export default IndivMemeCoin;