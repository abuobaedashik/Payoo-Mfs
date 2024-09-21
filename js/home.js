// add money
document.getElementById('add-money-btn').addEventListener('click',
    function (event) {
    event.preventDefault();
    const moneyAmoutInput =document.getElementById('money-amount').value;
    console.log('Money',moneyAmoutInput);
    const phoneNumber =document.getElementById('phone-number').value;
    console.log('phone',phoneNumber);
    const pinNum =document.getElementById('pin-Num').value;
    console.log('pin',pinNum);
})