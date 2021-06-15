import React from 'react';

const Coins = ({ eachCoin }) => {
  return (
    <>
    <div className={'coin'}>
      <h4>{eachCoin.name}</h4>
      <h5>{eachCoin.symbol.toUpperCase()}</h5>
      <h3>${eachCoin.current_price}</h3>
      <span>
        <h5>{eachCoin.price_change_percentage_24h}%</h5>
        <h5>${eachCoin.price_change_24h}</h5>
      </span>
    </div>
    </>
  );
};

export default Coins;