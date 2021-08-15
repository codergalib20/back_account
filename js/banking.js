// let depositFiled = document.getElementById('deposit-input');
// let withdrawFiled = document.getElementById('withdraw-input');
// const withdrawFiledText = withdrawFiled.value;

// // Deposit Button
// document.getElementById('deposit-button').addEventListener('click', function () {
//     const depositFiledText = depositFiled.value;
//     const depositFiledNumber = parseFloat(depositFiledText);
//     console.log(depositFiledNumber);

//     const totalDeposit = document.getElementById('total-deposit');
//     const totalDepositText = totalDeposit.innerText;
//     const totalDepositNumber = parseFloat(totalDepositText)
//     const totalDepositAccounts = totalDepositNumber + depositFiledNumber;
//     totalDeposit.innerText = totalDepositAccounts


//     const totalBalanceStor = document.getElementById('total-balance')
//     const totalBalanceText = totalBalanceStor.innerText;
//     const totalBalanceNumber = parseFloat(totalBalanceText);
//     const totalBalanceAccount = totalBalanceNumber + totalDepositNumber;
//     totalBalanceStor.innerText = totalBalanceAccount



//     depositFiled.value = ''
// })

document.getElementById('deposit-button').addEventListener('click', function ()
{
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText)


    const depostiTotal = document.getElementById('total-deposit');
    const previusDepositText = depostiTotal.innerText;
    const previusDepositAmount = parseFloat(previusDepositText)
    const newDepositTotal = parseFloat(previusDepositAmount) + parseFloat(newDepositAmount);
    depostiTotal.innerText = newDepositTotal;


    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previusBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previusBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    depositInput.value = ''
})



// Withdraw Mony 
document.getElementById('withdraw-button').addEventListener('click', function ()
{
    const withDrawInput = document.getElementById('withdraw-input');
    const withDrawAmountText = withDrawInput.value;
    const newWithdrawAmout = parseFloat(withDrawAmountText);

    // Set Withdraw Total
    const withdrawTotal = document.getElementById('total-withdraw');
    const previusWithdrawText = withdrawTotal.innerText;
    const previusWithdraw = parseFloat(previusWithdrawText);
    const newWithdrawTotal = previusWithdraw + newWithdrawAmout;
    withdrawTotal.innerText = newWithdrawTotal

    withDrawInput.value = '';

    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmout;

    balanceTotal.innerText = newBalanceTotal;

})