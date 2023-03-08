// 01 Задайте правильні ts типи для класичних js: 
// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };
var age;
age = 50;
var name;
name = 'Max';
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback = function (a) { return number; };
callback = function (a) { return 100 + a; };
// 02 Задайте тип для змінної, в яку можна зберегти будь-яке значення.
// let anything = -20;
// anything = 'Text';
// anything = {};
var anything;
anything = -20;
anything = 'Text';
anything = {};
// 03 Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// 04 робіть незмінний масив із суворо описаними типами. Масив для прикладу.
// let person = ['Max', 21];
var person;
person = ['Max', 21];
// 05 Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
;
var page = {
    load: Load.LOADING
};
if (page.load === Load.LOADING) {
    console.log('Loading...please, wait', Load.LOADING);
}
else {
    console.log('Thank you for waiting', Load.READY);
}
// 06 Зробіть змінну, яка може приймати або рядок, або число.
var variable;
variable = 'name';
variable = 10;
// 07 Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
var visibility;
visibility = 'enable';
// 08 Вкажіть типи для наступних функцій:
// function showMessage(message) {
//   console.log(message);
// }
function showMessage(message) {
    console.log(message);
}
// function calc(num1, num2) {
//   return num1 + num2;
// }
function calc(num1, num2) {
    return num1 + num2;
}
// function customError() {
//   throw new Error('Error');
// }
function customError() {
    throw new Error('Error');
}
