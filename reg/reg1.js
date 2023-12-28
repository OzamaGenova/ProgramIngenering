let name = document.querySelector('#name');
let surname = document.querySelector('#surname');
let num = document.querySelector('#num');
let email = document.querySelector('#email');
let pass = document.querySelector('#pass');
let submit = document.querySelector('#submit');

let users = {}

function User(name, surname, num, email, pass){
    this.name = name;
    this.surname = surname;
    this.num = num;
    this.email = email;
    this.pass = pass;
}

function createId(users){
    return Object.keys(users).length;
}

submit.addEventListener('click', () =>{
    const nameUser = name.value;
    const surnameUser = surname.value;
    const numUser = num.value;
    const emailUser = email.value;
    const passUser = pass.value;
    
    const user = new User(nameUser, surnameUser, numUser, emailUser, passUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);
    localStorage.setItem('user', JSON.stringify(user) )
})
