// add money
document.getElementById('add-money-btn').addEventListener('click',
    function (event) {
    event.preventDefault();
    let moneyAmoutInput =document.getElementById('money-amount').value;
    const phoneNumber =document.getElementById('phone-number').value;
    const pinNum =document.getElementById('pin-Num').value;
    
    if (phoneNumber==='01765262296' && pinNum ==='1234') {
        console.log('Your Money Adding to Your Account')
    }

    else{
        alert('Faild to Add Money! Please Try Again')
    }

    // main balance 
    const currentBalance =document.getElementById('current-money').innerText;

    // new balance 
    const newBalance=parseFloat(currentBalance)+parseFloat(moneyAmoutInput);
    document.getElementById('current-money').innerText =newBalance.toFixed(2);
})
// cash out
// document.getElementById('cash-out-btn').addEventListener('click',
//     function (event) {
//     event.preventDefault();
//     let moneyAmoutOut =document.getElementById('cash-out-anount').value;
//     const phoneNumber =document.getElementById('phone-number').value;
//     const pinNum =document.getElementById('pin-Num').value;
    
//     if (phoneNumber==='0177' && pinNum ==='1234') {
//         console.log('Your Money Adding to Your Account')
//     }

//     else{
//         console.log('faild')
//     }

//     // main balance 
//     const currentBalance =document.getElementById('current-money').innerText;

//     // new balance 
//     const newBalance=parseFloat(currentBalance)- parseFloat(moneyAmoutOut);
//     document.getElementById('current-money').innerText =newBalance.toFixed(2);
// })
// cashOut 
document.getElementById('cash-out-btn').addEventListener('click',function (event) {
    event.preventDefault();
    const cashOutAmount =document.getElementById('cash-out-anount').value;
    const PhoneCashout =document.getElementById('cashout-number').value;
    const PinCashout =document.getElementById('cashout-pin-Num').value;
    
    if (PhoneCashout==='01765262296' && PinCashout ==='1234') {
        const NowBalance =document.getElementById('current-money').innerText;
        const UpdateBalance=parseFloat(NowBalance) - parseFloat(cashOutAmount);
        document.getElementById('current-money').innerText =UpdateBalance.toFixed(2);
        
    }
    else{
        alert('CashOut Failed!Please Try Again Later');
    }
});

