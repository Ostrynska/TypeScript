// 01 Задайте правильні ts типи для класичних js: 

// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };

let age: number;
age = 50;

let name: string;
name = 'Max';

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback = (a: number) => number;
callback = (a) => { return 100 + a }

// 02 Задайте тип для змінної, в яку можна зберегти будь-яке значення.

// let anything = -20;
// anything = 'Text';
// anything = {};

let anything: any;

anything = -20;
anything = 'Text';
anything = {};

// 03 Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.

// let some:unknown;
// some = 'Text';

// let str: string;

// str = some;

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
    str = some;
}

// 04 робіть незмінний масив із суворо описаними типами. Масив для прикладу.

// let person = ['Max', 21];

let person: [string, number];
person = ['Max', 21];

// 05 Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum Load { LOADING, READY };

const page = {
    load: Load.LOADING,
}
  
if (page.load === Load.LOADING) {
    console.log('Loading...please, wait', Load.LOADING);
} else {
    console.log('Thank you for waiting', Load.READY);
}

// 06 Зробіть змінну, яка може приймати або рядок, або число.

let variable: string | number;
variable = 'name';
variable = 10;

// 07 Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

let visibility: 'enable' | 'disable';
visibility = 'enable';

// 08 Вкажіть типи для наступних функцій:

// function showMessage(message) {
//   console.log(message);
// }

function showMessage(message: string): void  {
    console.log(message);
}

// function calc(num1, num2) {
//   return num1 + num2;
// }

function calc(num1: number, num2: number):number {
    return num1 + num2;
}

// function customError() {
//   throw new Error('Error');
// }

function customError():never {
    throw new Error('Error');
}

// 09 Створіть свій тип даних на основі наявних даних.

// const page1 = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   load: 'open',
//   details: {
//     createAt: '2021-01-01',
//     pageAt: '2021-05-01',
//   }
// }

// const page2 = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   load: 'close',
// }

type Page = {
    title: string;
    likes: number;
    accounts: string[];
    load: 'open' | 'close';
    details?: {
        createAt: Date;
        pageAt: Date;
    }
}


