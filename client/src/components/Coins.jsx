import React from 'react';

const Coins = ({ activeMarketData }) => {
  return (
    <>
    {console.log(activeMarketData)}
    <div className={'coin'}>I'm a coin div</div>
    </>
  );
};

export default Coins;