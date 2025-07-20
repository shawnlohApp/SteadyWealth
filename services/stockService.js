import axios from 'axios';

const API_KEY = 'YOUR_ALPHA_VANTAGE_API_KEY';
const BASE_URL = 'https://www.alphavantage.co/query';

export const getStockQuote = async (symbol) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'GLOBAL_QUOTE',
        symbol,
        apikey: API_KEY,
      },
    });
    return response.data['Global Quote'];
  } catch (error) {
    console.error('Error fetching stock quote:', error);
    return null;
  }
};