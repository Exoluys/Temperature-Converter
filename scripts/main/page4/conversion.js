export function conversion() {
    document.getElementById('converterForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let temperature = parseFloat(document.getElementById('temperature').value);
        let convertFrom = document.getElementById('convertFrom').value;
        let convertTo = document.getElementById('convertTo').value;

        let result;

        if (convertFrom === convertTo) {
            result = temperature;
        }
        else {
            if (convertFrom === 'celsius') {
                if (convertTo === 'fahrenheit') {
                    result = (temperature * 9 / 5) + 32;
                }
                else if (convertTo === 'kelvin') {
                    result = temperature + 273.15;
                }
            }
            else if (convertFrom === 'fahrenheit') {
                if (convertTo === 'celsius') {
                    result = (temperature - 32) * 5 / 9;
                }
                else if (convertTo === 'kelvin') {
                    result = ((temperature - 32) * 5 / 9) + 273.15;
                }
            }
            else if (convertFrom === 'kelvin') {
                if (convertTo === 'celsius') {
                    result = temperature - 273.15;
                }
                else if (convertTo === 'fahrenheit') {
                    result = (temperature - 273.15) * 9 / 5 + 32;
                }
            }
        }

        document.getElementById('resultText').innerText = `${temperature} ${convertFrom.charAt(0).toUpperCase() + convertFrom.slice(1)} = ${result.toFixed(2)} ${convertTo.charAt(0).toUpperCase() + convertTo.slice(1)}`;
    });
}