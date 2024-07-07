document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convertBtn');
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const resultDiv = document.getElementById('result');

    convertBtn.addEventListener('click', function() {
        const amount = amountInput.value;
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (amount === '' || isNaN(amount)) {
            alert('Please enter a valid amount');
            return;
        }

        fetch(`https://api.exchangeratesapi.io/latest?base=${fromCurrency}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[toCurrency];
                if (rate) {
                    const convertedAmount = amount * rate;
                    resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
                } else {
                    resultDiv.textContent = 'Conversion rate not available.';
                }
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
                resultDiv.textContent = 'Failed to fetch exchange rates. Please try again later.';
            });
    });
});
