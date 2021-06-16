import axios from 'axios';

export default {
  markets: async (currency, num) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets/`, {
      params: {
        'vs_currency': currency,
        'per_page': num
      }
    });
    return response.data;
  },
  coinData: async (coinId) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/`);
    return response.data;
  },
  coinList: async () => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/list/`);
    return response.data;
  }
}