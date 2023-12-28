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

function Example(){
    const nameUser = "Евгений";
    const surnameUser = "Трофимец";
    const numUser = "89643885332";
    const emailUser = "genovaoz@yandex.ru";
    const passUser = "qwerty123";
    
    const user = new User(nameUser, surnameUser, numUser, emailUser, passUser);

    const userId = 'User' + createId(users);
    users[userId] = user;
    return user;
}

let users = {}
Example();

console.log(users);

module.exports = Example;