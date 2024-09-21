document.getElementById('btn-login').addEventListener('click',function (event) {
    event.preventDefault();
    // console.log('Login btn clicked')
    // get the number 
   const phoneNum = document.getElementById('phone-number').value;
   const pinNum = document.getElementById('pin-number').value;
   
   if (phoneNum === '0177' && pinNum=== '1234') {
     console.log('You Are Logged in ');
     window.location.href='./home.html';
   }
   else{
    alert("wrong Pin or Phone Number")
   }
})