import React, { useState, useEffect } from 'react';
import GET from '../../../lib/index.js';

import Coins from './Coins.jsx';

const App = () => {
  const [activeMarketData, setActiveMarketData] = useState([]);

  useEffect( async () => {
    const marketData = await GET.markets('usd', 25);
    setActiveMarketData([...marketData]);
  }, []);

  return (
    <>
    <div className={'crypto-tracker'}>Hello World I'm a CryptoTracking Web App</div>
    <Coins activeMarketData={activeMarketData} />
    </>
  );
};

export default App;