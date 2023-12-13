function myFunction() {
    var myVar = "Коля";
    console.log(myVar); // -> "Коля" — myVar доступна внутри функции.
  }
  console.log(myVar); // ReferenceError, myVar недоступна снаружи функции.