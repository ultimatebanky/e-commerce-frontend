import React, { useState, useEffect } from 'react';
import './RateCalculator.css'

const RateCalculator = () => {
    const [weight, setWeight] = useState(0);
    const [conversionRates, setConversionRates] = useState({});
    const [targetCurrency, setTargetCurrency] = useState('USD');
    const [convertedAmount, setConvertedAmount] = useState(0);
    
    useEffect(() => {
      const apiKey = '14b716abbf794520a95117eb4d4fd6f8';
    fetch(`https://openexchangerates.org/api/latest.json?app_id=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.rates) {
          setConversionRates(data.rates);
        }
      });
  }, []);

  const handleWeightChange = event => {
    const newWeight = parseFloat(event.target.value);
    setWeight(newWeight);
    setConvertedAmount(newWeight * conversionRates[targetCurrency]);
  };

  const handleCurrencyChange = event => {
    const newCurrency = event.target.value;
    setTargetCurrency(newCurrency);
    setConvertedAmount(weight * conversionRates[newCurrency]);
  };

  return (
    <div className='rate --mt --mb'>
      <form className='rate-form'>
        <div>
            <label>Enter weight in lbs:</label>
            <input type="number" value={weight} onChange={handleWeightChange} />
        </div>
        <div>

          <label>Select target currency:</label>
          <select value={targetCurrency} onChange={handleCurrencyChange}>
              {Object.keys(conversionRates).map(currency => (
              <option key={currency} value={currency}>
                  {currency}
              </option>
              ))}
          </select>
        </div>
        <div>
          <label>Converted amount: {convertedAmount.toFixed(2)} <em>{targetCurrency}</em></label>
        </div>
      </form>
    </div>
  );
};

export default RateCalculator;