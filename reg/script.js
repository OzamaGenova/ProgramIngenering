const singInBtn = document.querySelector('.signin-btn');
const singUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');

singUpBtn.addEventListener('click', function(){
    formBox.classList.add('active');
})
singInBtn.addEventListener('click', function(){
    formBox.classList.remove('active');
})