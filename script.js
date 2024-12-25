document.getElementById('calculateBtn').addEventListener('click', function () {
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const interestRate = parseFloat(document.getElementById('interestRate').value);
  const loanTenure = parseFloat(document.getElementById('loanTenure').value);

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
    alert('Please enter valid numbers in all fields');
    return;
  }

  const monthlyInterestRate = interestRate / 12 / 100;
  const numberOfMonths = loanTenure * 12;
  const emi = 
    (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) / 
    (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
  const totalPayment = emi * numberOfMonths;
  const totalInterest = totalPayment - loanAmount;

  document.getElementById('emiResult').innerText = emi.toFixed(2);
  document.getElementById('interestResult').innerText = totalInterest.toFixed(2);
  document.getElementById('totalResult').innerText = totalPayment.toFixed(2);
});

document.getElementById('clearBtn').addEventListener('click', function () {
  document.getElementById('loanAmount').value = '';
  document.getElementById('interestRate').value = '';
  document.getElementById('loanTenure').value = '';
  document.getElementById('emiResult').innerText = '';
  document.getElementById('interestResult').innerText = '';
  document.getElementById('totalResult').innerText = '';
});
