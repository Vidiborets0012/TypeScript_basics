// Анотування Типів (Type Annotation)

/*
У TypeScript ми явно вказуємо тип змінної за допомогою двокрапки (:) після назви змінної.
*/

let age: number = 25;
let firstName: string = 'Олена';
let isValid: boolean = true;

//Виведення Типів (Type Inference)

/*
TypeScript може автоматично визначити тип змінної, якщо їй присвоюється значення при оголошенні. Хоча це зручно, явне анотування (особливо для функцій) часто робить код зрозумілішим.
*/

// TS автоматично виводить 'number'
let price = 50.5;

// TS автоматично виводить 'string'
let message = 'Дякую!';

console.log('*******************************');

//Основи Типізації (string, number, boolean)

/*
1. Оголосіть змінну userName типу string та присвойте їй ваше ім'я.
*/

const userName: string = 'Viktor';

/*
2. Оголосіть змінну piValue типу number та присвойте їй значення $\pi$ (наприклад, 3.14159).
*/

const piValue: number = 3.14159;

/*
3. Оголосіть константу isLoggedIn типу boolean зі значенням false.
*/

const isLoggedIn: boolean = false;

/*
4. Створіть функцію calculateArea, яка приймає один аргумент radius типу number і повертає number.
*/

function calculateArea(radius: number): number {
  return Math.PI * radius * radius;
}

console.log(calculateArea(4)); //50.26548245743669
// console.log(calculateArea('4'));//помилка

/*
5. Створіть змінну greeting за допомогою виведення типів і присвойте їй рядок "Привіт, світ!"
*/

let greeting = 'Привіт, світ!';

/*
6. Створіть змінну hourlyRate типу number. Змініть її значення на 25.
*/

let hourlyRate: number = 20;
hourlyRate = 25;

/*
7. Створіть шаблонний рядок welcomeMessage, який комбінує userName (з завдання 1) та piValue (з завдання 2).
*/

const welcomeMessage: string = `lalala ${userName} - tototo ${piValue}`;
console.log('welcomeMessage:', welcomeMessage); //lalala Viktor - tototo 3.14159

/*
8. Яку помилку видасть TypeScript: let flag: boolean = "так";?
*/

// помилка: рядок не логічний тип

/*
9. Оголосіть константу maxSpeed типу number зі значенням 300. Спробуйте змінити її значення. 
*/

const maxSpeed: number = 300;
// maxSpeed - це константа і її змінювати не можна

//Спеціальні та Розширені Примітиви

/*
10. Оголосіть змінну data та присвойте їй значення null. Який тип виведе TypeScript, якщо не вказувати його явно?
*/

const data = null; //null

/*
11. Оголосіть змінну emptyValue типу undefined.
*/

let emptyValue: undefined = undefined;

/*
12. Створіть змінну largeNumber типу bigint зі значенням 9007199254740991.
*/

const largeNumber: bigint = 9007199254740991n;

/*
13. Оголосіть функцію logMessage, яка приймає аргумент message типу string і нічого не повертає. Який тип повернення слід вказати?
*/

function logMessage(message: string): void {}

/*
14. Створіть два унікальних символи: const KEY_A = Symbol('A'); та const KEY_B = Symbol('A');. Який тип вони мають?
*/
const KEY_A = Symbol('A');
const KEY_B = Symbol('A');

//тип symbol

/*
15. Який тип має змінна result, якщо її не ініціалізувати: let result;
*/
let result; //any

/*
16. Створіть функцію isEven, яка приймає value типу number і повертає boolean.
*/

function isEven(value: number): boolean {
  return value % 2 === 0;
}

/*
17. Виправте помилку в наступному коді: let isLoggedIn: boolean = 1;
*/

let isLoggedIn1: boolean = true;
