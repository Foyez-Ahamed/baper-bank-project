// deposit section interactive // 
document.getElementById('deposit-btn').addEventListener('click', function(){

    const getDepositInput = document.getElementById('deposit-input');
    const setDepositInput = getDepositInput.value;
    const setDepositInputNumber = parseFloat(setDepositInput);

    getDepositInput.value = "";

    if(isNaN(setDepositInputNumber)){
        alert('Please provide balance');
        return;
    }
    
    const getDepositBalance = document.getElementById('deposit');
    const setDepositBalance = getDepositBalance.innerText;
    const setDepositBalanceNumber = parseFloat(setDepositBalance);

    const totalDeposit = setDepositInputNumber + setDepositBalanceNumber;

    getDepositBalance.innerText = totalDeposit;

    

    const getBalance = document.getElementById('balance');

    const getTotalBalance = getBalance.innerText;

    const getTotalBalanceNumber = parseFloat(getTotalBalance);

    const totalDepositBalance = getTotalBalanceNumber + setDepositInputNumber;

    getBalance.innerText = totalDepositBalance;
});
// deposit section interactive // 