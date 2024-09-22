document.getElementById('addmoney-btn').addEventListener('click', function(event){
    event.preventDefault();

    // const addMoney = document.getElementById('add-money').value;
    // const pinNumber = document.getElementById('pin-number').value;

    const addMoneyNumber = getInputValueById('add-money');
    const pinNumber = getInputValueById('pin-number');

    if(isNaN(addMoneyNumber)){
        alert('Faild to add money.')
        return;
    }

    if(pinNumber === 1234){
        const accountBalance = getTextValueById('account-balance');
        // const addMoneyNumber = parseFloat(addMoney);

        const newBalance = accountBalance + addMoneyNumber;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const log = document.createElement('p');
        log.innerText = `Added: ${addMoneyNumber}TK. New Balance: ${newBalance}Tk.`;

        document.getElementById('trans-container').appendChild(log);
        
    }
    else{
        alert('Failed to add money.')
    }
    // console.log(addMoney, pinNumber);
})