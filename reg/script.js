const singInBtn = document.querySelector('.signin-btn');
const singUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');

singUpBtn.addEventListener('click', function(){
    formBox.classList.add('active');
})
singInBtn.addEventListener('click', function(){
    formBox.classList.remove('active');
})
function checkEmpty(id){
    let inputfield = document.getElementById(id);
    if (inputfield.value === ""){
        alert("Заполните все поля");
    }
}
function checkEmail(id){
    var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = document.getElementById(id);
    if(reg.test(email.value) == false){
        alert("Неправильно указан email");
    }
}
function checkDoublePassword(id1,id2){
    let pas1 = document.getElementById(id1).value;
    let pas2= document.getElementById(id2).value;
    if(pas1!=pas2){
        alert("Пароли не совпадают");
    }

}