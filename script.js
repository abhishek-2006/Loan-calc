document.getElementById('loan-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const timeValue = parseFloat(document.getElementById('time-value').value);
    const timeUnit = document.getElementById('time-unit').value;

    let months;

    if (timeUnit === 'days') {
        months = timeValue / 30; // Convert days to months
    } else if (timeUnit === 'months') {
        months = timeValue; // Already in months
    } else if (timeUnit === 'years') {
        months = timeValue * 12; // Convert years to months
    }

    const x = Math.pow(1 + rate, months);
    const monthly = (amount * x * rate) / (x - 1);

    if (isFinite(monthly)) {
        document.getElementById('monthly-payment').textContent = monthly.toFixed(2);
        document.getElementById('total-payment').textContent = (monthly * months).toFixed(2);
        document.getElementById('total-interest').textContent = (monthly * months - amount).toFixed(2);
    } else {
        alert('Please enter valid numbers.');
    }
});
