export const getAIRecommendation = (stockData) => {
  const price = parseFloat(stockData['05. price']);
  const change = parseFloat(stockData['10. change percent']);
  const threshold = 0.5;

  if (change <= -threshold) return 'BUY';
  if (change >= threshold) return 'SELL';
  return 'HOLD';
};