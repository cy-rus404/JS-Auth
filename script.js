const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

myForm.addEventListener("submit",onsubmit)

function onsubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields';

        setTimeout(()=> msg.remove(), 3000)
    } else{
    console.log("success");
    }

}
