document.getElementById('addmoney-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = document.getElementById('add-money').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(pinNumber === '1234'){
        const accountBalance = document.getElementById('account-balance').innerText;

        const balanceNumber = parseFloat(accountBalance);
        const addMoneyNumber = parseFloat(addMoney);

        const newBalance = balanceNumber + addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance;

        
    }
    else{
        alert('Failed to add money.')
    }
    // console.log(addMoney, pinNumber);
})