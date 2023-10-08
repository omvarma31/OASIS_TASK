const temperatureInput = document.querySelector('#temperature');
const unitSelect = document.querySelector('#unit');
const convertButton = document.querySelector('#convert');
const clearButton = document.querySelector('#clear');
const resultDisplay = document.querySelector('#result');
const historyList = document.querySelector('#history');

const history = [];

convertButton.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  if (!temperature || isNaN(temperature)) {
    alert('Please enter a valid temperature.');
    return;
  }

  let convertedTemperature;

  switch (unit) {
    case 'celsius':
      convertedTemperature = (temperature * 9 / 5) + 32;
      break;
    case 'fahrenheit':
      convertedTemperature = (temperature - 32) * 5 / 9;
      break;
    case 'kelvin':
      convertedTemperature = temperature + 273.15;
      break;
    default:
      convertedTemperature = temperature;
  }

  resultDisplay.textContent = `${convertedTemperature.toFixed(2)} ${unit}`;

  // Add the conversion to the history list.
  history.push({
    temperature,
    unit,
    convertedTemperature,
  });

  // Update the history list in the DOM.
  historyList.innerHTML = '';
  history.forEach((item) => {
    const historyItem = document.createElement('li');
    historyItem.textContent = `${item.temperature} ${item.unit} = ${item.convertedTemperature} ${unitSelect.value}`;
    historyList.appendChild(historyItem);
  });
});

clearButton.addEventListener('click', () => {
  temperatureInput.value = '';
  resultDisplay.textContent = '';
  historyList.innerHTML = '';
  history.length = 0;
});
