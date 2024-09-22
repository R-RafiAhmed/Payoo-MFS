document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputValueById('cash-out');
    const pinNumber = getInputValueById('pin-number-cashout');

    if(pinNumber === 1234){
        const accountBalance = getTextValueById('account-balance');
        const newBalance = accountBalance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to Cash Out.')
    }
})