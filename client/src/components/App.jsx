import React, { useState, useEffect } from 'react';
import GET from '../../../lib/index.js';
import styled from 'styled-components';
import Coins from './Coins.jsx';

const AllCoins = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 1400px;
  margin: auto;
`

const App = () => {
  const [activeMarketData, setActiveMarketData] = useState([]);
  const [activeCoin, setActiveCoin] = useState([]);
  const [searchBar, setSearchBar] = useState('');
  const [coinList, setCoinList] = useState([]);
  const [count, setCount] = useState(0);

  const handleSearch = (query) => {
    for (let key of coinList) {
      console.log(coinList[key])
    }
  }

  const getMarketData = async (currency) => {
    const marketData = await GET.markets('usd', 25);
    console.log('fetched', count)
    setActiveMarketData([...marketData]);
  };

  const getCoinData = async (coinId) => {
    const coinData = await GET.coinData('cardano');
    setActiveCoin([coinData]);
  };

  const getCoinList = async () => {
    const capturedCoinList = await GET.coinList();
    setCoinList([...capturedCoinList]);
  };

  useEffect( async () => {
    await getMarketData();
    await getCoinList();
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
    <nav>
      <h2>This is the nav bar</h2>
      <input type="text" onChange={e => {
          setSearchBar(e.target.value);
          handleSearch(e.target.value);
        }}></input>
    </nav>
    <div className={'crypto-tracker'}>Hello World I'm a CryptoTracking Web App</div>
    <AllCoins>
      {activeMarketData.map(eachCoin => (
        <Coins key={eachCoin.id} eachCoin={eachCoin} />
      ))}
    </AllCoins>
    </>
  );
};

export default App;