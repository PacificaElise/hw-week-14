"use strict";
//Приветствие

let showMessage = () => {
    let userName = document.getElementById("hello").value;
    alert (`Привет, ${userName}!`);
}

let reset = function() {
    document.getElementsByTagName('input')[0].value = null;
}

//Калькулятор

let ev;

function getResult() {
  let result;
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  switch (ev) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }
  document.getElementById("result").innerHTML = result;
}

//Смена цвета

let changeColor = function() {
    let calc = document.getElementsByClassName('calc');
    calc[0].style.background = "#4556";
    setTimeout(() => calc[0].style.background = "", 500);
}

//Галлерея

function forward() {
    document.getElementById('img1').src = 'https://pbs.twimg.com/media/E3C61NQX0AM40xi.jpg';
}

function back() {
    document.getElementById('img1').src = "https://placepic.ru/wp-content/uploads/2018/10/koshka-kotenok-mysh-myshka-igrushka-igra-fon-lezhit-pushisty.jpg";
}