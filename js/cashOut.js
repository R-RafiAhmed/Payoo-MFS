document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputValueById('cash-out');
    const pinNumber = getInputValueById('pin-number-cashout');

    if(isNaN(cashOut)){
        alert('Failed to cash out.')
        return;
    }

    if(pinNumber === 1234){
        const accountBalance = getTextValueById('account-balance');
        
        if(cashOut > accountBalance){
            alert('You do not have sufficent balance to cash out.');
            return;
        }
        const newBalance = accountBalance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const log = document.createElement('p');
        log.innerText = `Withdraw: ${cashOut}TK. New Balance: ${newBalance}TK.`
        document.getElementById('trans-container').appendChild(log);
    }
    else{
        alert('Failed to Cash Out.')
    }
})