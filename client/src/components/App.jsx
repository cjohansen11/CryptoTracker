import React, { useState, useEffect } from 'react';
import GET from '../../../lib/index.js';

import Coins from './Coins.jsx';
import './styles/app.css';

const App = () => {
  const [activeMarketData, setActiveMarketData] = useState([]);
  const [activeCoin, setActiveCoin] = useState([]);
  const [count, setCount] = useState(0);

  const getMarketData = async (currency) => {
    const marketData = await GET.markets('usd', 25);
    console.log('fetched', count)
    setActiveMarketData([...marketData]);
  };

  const getCoinData = async (coinId) => {
    const coinData = await GET.coinData('cardano');
    setActiveCoin([coinData]);
  }

  useEffect( async () => {
    await getMarketData();
  }, []);

  useEffect( async () => {
    let fetch = setInterval(() => {
      getMarketData();
      setCount(count + 1);
    }, 10000);
    return () => clearInterval(fetch);
  }, []);

  return (
    <>
    <div className={'crypto-tracker'}>Hello World I'm a CryptoTracking Web App</div>
    <div className={'all-coins'}>
      {activeMarketData.map(eachCoin => (
        <Coins key={eachCoin.id} eachCoin={eachCoin} />
      ))}
    </div>
    </>
  );
};

export default App;