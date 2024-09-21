document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const mobileNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(mobileNumber === '01825' && pinNumber === '1234'){
        window.location.href = './home.html';
    }
    else{
        alert('ERROR! Mobile and Pin number does not match.');
    }
})