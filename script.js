// login button event handler
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function() {
  const loginArea = document.getElementById('loginForm');
  loginArea.style.display = 'none';

  const trans = document.getElementById('transaction-area');
  trans.style.display = 'block';
})

// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById('depositAmount').value;
  const depositNumber = parseFloat(depositAmount);

  // const currentDeposit = document.getElementById("currentDeposit").innerText;
  // const currentDepositNumber = parseFloat(currentDeposit);
  // const totalDeposit = currentDepositNumber + depositNumber;
  // document.getElementById("currentDeposit").innerText = totalDeposit;

  updateSpanText("currentDeposit", depositNumber);
  updateSpanText("currentBalance", depositNumber);

  document.getElementById('depositAmount').value = '';

})

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalBalance = depositNumber + currentNumber;
  document.getElementById(id).innerText = totalBalance;
}


// withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
  const withdrawAmount = document.getElementById('withdrawAmount').value;
  const withdrawAmountNumber = parseFloat(withdrawAmount);

  updateSpanText('currentWithdraw', withdrawAmountNumber);
  // const currentWithdraw = document.getElementById('currentWithdraw').innerText;
  // const currentWithdrawNumber = parseFloat(currentWithdraw);
  // const totalWithdraw = currentWithdrawNumber + withdrawAmountNumber;
  // document.getElementById('currentWithdraw').innerText = totalWithdraw;
  updateSpanText('currentBalance', -1 * withdrawAmountNumber);
  // const currentBalance = document.getElementById('currentBalance').innerText;
  // const currentBalanceNumber = parseFloat(currentBalance);
  // const totalBalance = currentBalanceNumber - withdrawAmountNumber;
  // document.getElementById('currentBalance').innerText = totalBalance;

  document.getElementById('withdrawAmount').value = '';

})
