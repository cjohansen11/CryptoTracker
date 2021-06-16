import React from 'react';
import styled from 'styled-components';

const Coin = styled.div`
  height: 250px;
  width: 250px;
  background-color: skyblue;
  margin: 10px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`

const Title = styled.h4`
  width: 100%;
  margin: 0;
`

const AllH5 = styled.h5`
  width: 100%;
  margin: 0px 10px;
`

const Price = styled.h3`
  width: 100%;
  font-size: 40px;
  text-align: center;
`

const Span = styled.span`
  display: inherit;
`

const Coins = ({ eachCoin }) => {
  return (
    <>
    <Coin>
      <Title>{eachCoin.name}</Title>
      <AllH5>{eachCoin.symbol.toUpperCase()}</AllH5>
      <Price>${eachCoin.current_price}</Price>
      <Span>
        <AllH5>{eachCoin.price_change_percentage_24h}%</AllH5>
        <AllH5>${eachCoin.price_change_24h}</AllH5>
      </Span>
    </Coin>
    </>
  );
};

export default Coins;