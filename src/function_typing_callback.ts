//Callback (з англ. “зворотний виклик”) — це функція, яка передається іншій функції як аргумент, щоб бути викликаною пізніше, коли буде потрібно.

// Приклад 1. Проста функція з callback

function greetUser(callback: () => void) {
  console.log('Підготовка привітання...');
  callback();
}

function sayHello() {
  console.log('Привіт, світе!');
}

greetUser(sayHello);

//Приклад 2. Callback з аргументом

function greet(name: string, callback: (msg: string) => void) {
  const message = `Привіт, ${name}!`;
  callback(message);
}

greet('Віктор', text => console.log(text));

//Приклад 3. Callback з поверненням значення

function calculate(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

const sum = calculate(3, 5, (x, y) => x + y);
const product = calculate(3, 5, (x, y) => x * y);

console.log(sum); // 8
console.log(product); // 15

//Приклад 4. Callback у методі масиву
//Методи масивів (forEach, map, filter, reduce) — це класичні колбеки.
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num: number): number => num * 2);
console.log(doubled); // [2, 4, 6, 8]

const even = numbers.filter((num: number): boolean => num % 2 === 0);
console.log(even); // [2, 4]

//Приклад 5. Callback з затримкою (асинхронний)
// function delayedAction(callback: () => void) {
//   console.log('Починаємо...');
//   setTimeout(() => {
//     console.log('3 секунди минуло');
//     callback();
//   }, 3000);
// }

// delayedAction(() => console.log('Готово!'));

//Приклад 6. Callback з типом у змінній
type StringCallback = (value: string) => void;

function handleInput(callback: StringCallback) {
  const input = 'TypeScript';
  callback(input);
}

handleInput(str => console.log(str.toUpperCase()));

//Приклад 7. Callback, який повертає типізоване значення
function transform<T, R>(value: T, callback: (input: T) => R): R {
  return callback(value);
}

const length1 = transform('TypeScript', str => str.length);
const doubled1 = transform(5, n => n * 2);

console.log(length); // 10
console.log(doubled1); // 10

console.log('****************');
/*
Вправа 1

Створи функцію runCallback, яка приймає одну функцію callback і просто викликає її.
*/

function runCallback(callback: () => void) {
  callback();
}

/*
Вправа 2

Створи функцію sayHello, яка приймає callback і передає в нього рядок "Hello from callback!".
*/

function sayHelloX(callback: (text: string) => void) {
  const msg: string = 'Hello from callback!';
  callback(msg);
}

const sayHelloResult = sayHelloX(str => console.log(str)); //Hello from callback!

/*
Вправа 3

Створи функцію greetUser, яка приймає ім’я (string) і функцію callback(name: string): void.
Передай ім’я в колбек.
*/

function greetUserX(name: string, callback: (name: string) => void) {
  const message = `Hello, ${name}`;
  callback(message);
}

greetUserX('Viktor', str => console.log(str)); //Hello, Viktor

/*
Вправа 4

Створи функцію calculate, яка приймає два числа та колбек (a: number, b: number) => number.
Поверни результат виклику колбека.
*/

function calculateX(
  a: number,
  b: number,
  callback: (a: number, b: number) => number
): number {
  return callback(a, b);
}

console.log(calculateX(2, 4, (a, b) => a * b)); //8

/*
Вправа 5

Створи тип MathOperation для функції, яка приймає два числа і повертає число.
Використай його у функціях add, subtract, multiply, divide.
*/

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;
const divide: MathOperation = (a, b) => a / b;

/*
Вправа 6

Створи функцію executeTwice, яка приймає callback і викликає його двічі.
*/

function executeTwice(callback: () => void) {
  callback();
  callback();
}

/*
Вправа 7

Створи функцію delayedLog, яка приймає повідомлення (string) і колбек (msg: string) => void,
та викликає колбек через 2 секунди з переданим повідомленням (використай setTimeout).
*/

function delayedLog(text: string, callback: (msg: string) => void): void {
  const message: string = text;
  setTimeout(() => {
    callback(message);
  }, 2000);
}

delayedLog('lalala', text => console.log(text)); //lalala

/*
Вправа 8

Створи функцію handleArray, яка приймає масив чисел і колбек (num: number) => void.
Виклич колбек для кожного елемента масиву.
*/

const numbersX: number[] = [1, 2, 3, 4, 5, 6];

function handleArray(arr: number[], callback: (num: number) => void): void {
  for (const num of arr) {
    callback(num);
  }
}

// function handleArray(arr: number[], callback: (num: number) => void): void {
//   arr.forEach(callback);
// }

handleArray(numbersX, num => console.log(num));

/*
Вправа 9

Створи функцію filterArray, яка приймає масив чисел і колбек (num: number) => boolean.
Поверни новий масив лише з тих чисел, для яких колбек повертає true.
*/

function filterArray(
  arr: number[],
  callback: (num: number) => boolean
): number[] {
  // const result: number[] = [];

  // for (const number of arr) {
  //   if (callback(number)) {
  //     result.push(number);
  //   }
  // }

  // return result;
  return arr.filter(callback);
}

const evenNumbers = filterArray(numbersX, num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

const oddNumbers = filterArray(numbersX, num => num % 2 !== 0);
console.log(oddNumbers); // [1, 3, 5]

/*
Вправа 10

Створи функцію applyToEach, яка приймає масив рядків і функцію (value: string) => string.
Поверни новий масив перетворених рядків.
*/

function applyToEach(
  arr: string[],
  callback: (value: string) => string
): string[] {
  // const result: string[] = [];

  // for (const element of arr) {
  //   result.push(callback(element));
  // }

  // return result;

  return arr.map(callback);
}

const allToUpperCase = applyToEach(['LaLaLa', 'ToToTo', 'BeBeBe'], val =>
  val.toLocaleUpperCase()
);

console.log(allToUpperCase); //['LALALA', 'TOTOTO', 'BEBEBE']

/*
Вправа 11

Створи функцію processInput, яка приймає рядок і колбек (text: string) => void.
Якщо рядок не порожній — виклич колбек, інакше виведи "No input".
*/

function processInput(value: string, callback: (text: string) => void): void {
  if (value) {
    callback(value);
  } else {
    console.log('No input');
  }
}

const inputValue = processInput('', str => console.log(str));
const inputValue1 = processInput('lalala', str => console.log(str));

/*
Вправа 12

Створи функцію withLogging, яка приймає будь-яку функцію callback (без аргументів)
та виводить "Before", потім викликає колбек, потім "After".
*/

function withLogging(callback: () => void): void {
  console.log('Before');
  callback();
  console.log('After');
}

withLogging(() => console.log('Call-back'));

/*
Вправа 13

Створи функцію repeatAction, яка приймає callback і кількість повторів n.
Виклич колбек n разів.
*/

function repeatAction(callback: () => void, n: number): void {
  for (let i = 1; i <= n; i++) {
    callback();
  }
}

repeatAction(() => console.log('Call-back'), 2);

/*
Вправа 14

Створи функцію runSequence, яка приймає три колбеки: start, process, end,
і викликає їх по черзі у цьому порядку.
*/

function runSequence(
  start: () => void,
  process: () => void,
  end: () => void
): void {
  start();
  process();
  end();
}

runSequence(
  () => console.log('start'),
  () => console.log('process'),
  () => console.log('end')
);
