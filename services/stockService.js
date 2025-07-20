import axios from 'axios';

export async function fetchLiveStockPrices(symbol) {
  try {
    const response = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: 'TIME_SERIES_DAILY_ADJUSTED',
        symbol: symbol,
        apikey: 'demo' // Replace with your API key
      }
    });

    const prices = response.data['Time Series (Daily)'];
    const dates = Object.keys(prices).slice(0, 7).reverse();
    const data = dates.map(date => parseFloat(prices[date]['4. close']));

    return {
      labels: dates.map(date => date.slice(5)),
      datasets: [{ data }]
    };
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
}