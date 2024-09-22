// add money get
document.getElementById( 'add-money-fature-btn1').addEventListener('click',function () {

document.getElementById('cash-out-form').classList.add('hidden')
document.getElementById('add-money-form').classList.remove('hidden')
    
})

// cash out from get
document.getElementById('cash-out-feature-btn2').addEventListener('click',function () {

document.getElementById('cash-out-form').classList.remove('hidden')
document.getElementById('add-money-form').classList.add('hidden')
    
})