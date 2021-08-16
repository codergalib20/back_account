function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText)

    depositInput.value = '';

    return newDepositAmount;
}


document.getElementById('deposit-button').addEventListener('click', function ()
{
    const newDepositAmount = getInputValue()


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