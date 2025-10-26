//Типізація функцій
/*
цей розділ формує розуміння, як типи працюють у динаміці — коли дані «рухаються» через аргументи й повернення.
*/

//1. Типізація аргументів функції
/*
у typescript кожен параметр функції має свій тип.
це дозволяє компілятору перевіряти, чи передаються правильні дані, ще до запуску коду.
*/

function greet(name: string, age: number): void {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet('Alice', 25); // ✅
// greet(42, 'Bob');     // ❌ помилка типів

//2. Тип значення, яке повертає функція
/*
тип після двокрапки : у визначенні функції показує, який тип результату вона повертає.
*/
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(5, 3); // sum: number

//- якщо функція нічого не повертає, використовується тип void:
function logMessage(message: string): void {
  console.log('Message:', message);
}
//- якщо функція завжди кидає помилку або ніколи не повертає значення, вживається тип never:

function throwError(message: string): never {
  throw new Error(message);
}

//3. Опціональні параметри
/*
опціональні параметри позначаються знаком ? після імені аргументу.
це означає, що аргумент можна не передавати.
*/
function greetUser(name: string, greeting?: string): void {
  console.log(`${greeting ?? 'Hello'}, ${name}!`);
}

greetUser('Alice'); // Hello, Alice!
greetUser('Bob', 'Welcome'); // Welcome, Bob!
//у цьому випадку greeting може бути undefined, тому ми додаємо ?? для дефолтного значення.

//4. Параметри за замовчуванням (default parameters)

function multiply(a: number, b: number = 1): number {
  return a * b;
}

console.log(multiply(5)); // 5
console.log(multiply(5, 2)); // 10

//5. Function Type (тип функції)
/*
typescript дозволяє описувати тип самої функції, тобто які аргументи вона приймає і що повертає.
*/
//- спосіб 1 — через синтаксис типу функції

let addNumbers: (a: number, b: number) => number;

addNumbers = (x, y) => x + y;

//- спосіб 2 — через type alias
type MathOperation = (x: number, y: number) => number;

const subtract: MathOperation = (x, y) => x - y;
const multiply2: MathOperation = (x, y) => x * y;

//- спосіб 3 — через interface
interface Logger {
  (message: string, level?: string): void;
}

const consoleLogger: Logger = (msg, level = 'INFO') => {
  console.log(`[${level}] ${msg}`);
};

//6. Анонімні та стрілкові функції з типами
const divide = (a: number, b: number): number => a / b;

const printUser: (name: string, age: number) => void = (n, a) => {
  console.log(`${n} is ${a} years old.`);
};

//7. Функції, що приймають інші функції (callback)
function processUserInput(callback: (name: string) => void) {
  const userName = 'Alice';
  callback(userName);
}

processUserInput(name => console.log('Hello, ' + name));

//8. Функції з невизначеною кількістю аргументів (rest parameters) використовується синтаксис ...args.

function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10

//9. Поєднання типів функцій і generics
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(5);
const str = identity<string>('Hello');

console.log('************************');

/*
Вправа 1.
Створи функцію greet, яка приймає name (string) і виводить у консоль "Hello, <name>!".
Типізуй аргумент.
*/

function greet1(name: string): void {
  console.log(`Hello, ${name}`);
}
greet1('Viktor'); //Hello, Viktor

/*
Вправа 2.
Створи функцію sum, яка приймає два числа і повертає їх суму.
Типізуй і аргументи, і значення, що повертається.
*/

function summ1(a: number, b: number): number {
  return a + b;
}
const summ1Result = summ1(2, 4);
console.log('summ1Result:', summ1Result); //summ1Result: 6

/*
Вправа 3.
Створи функцію isAdult, яка приймає вік (number) і повертає true, якщо >=18.
*/

function isAdult(age: number): boolean {
  return age >= 18;
}

const isAdultUser = isAdult(15);
const isAdultUser1 = isAdult(20);
console.log('isAdultUser:', isAdultUser); //false
console.log('isAdultUser1:', isAdultUser1); //true

/*
Вправа 4.
Створи функцію logMessage, яка приймає рядок і нічого не повертає (тип void).
*/

function logMessage1(message: string): void {
  console.log(message); //lalala
}

const message1 = logMessage1('lalala');

/*
Вправа 5.
Створи функцію multiply, де другий аргумент має значення за замовчуванням = 1.
*/

function multiplyX(a: number, b: number = 1): number {
  return a * b;
}

const multiplyXResult1 = multiplyX(2, 5);
const multiplyXResult2 = multiplyX(2);
console.log('multiplyXResult1:', multiplyXResult1); //10
console.log('multiplyXResult2:', multiplyXResult2); //2

/*
Вправа 6.
Створи функцію getFullName, яка приймає ім’я та прізвище, і повертає рядок у форматі "ім’я прізвище".
*/

function getFullName(name: string, surname: string): string {
  return `${name} ${surname}`;
}

const fullName = getFullName('Viktor', 'Vidiborets');
console.log('fullName:', fullName); //Viktor Vidiborets

/*
Вправа 7.
Створи функцію printUserInfo, яка приймає name (string) і age (number),
але age є опціональним параметром.
*/

function printUserInfo(name: string, age?: number): void {
  console.log(`${name} - age: ${age ?? 'not specified'}.`);
}

const userInfo = printUserInfo('Viktor', 44); //Viktor - age: 44.
const userInfo1 = printUserInfo('Viktor'); //Viktor - age: not specified.

/*
Вправа 8.
Створи функцію throwError(message: string): never, яка кидає помилку.
*/

function throwError1(message: string): never {
  throw new Error(message);
}

/*
Вправа 9.
Створи тип Operation — функція, яка приймає два числа і повертає число.
Оголоси функції add, subtract, multiply, divide цього типу.
*/

type Operation = (a: number, b: number) => number;

const addX: Operation = (a, b) => a + b;
const subtractX: Operation = (a, b) => a - b;
const multiplyQ: Operation = (a, b) => a * b;
const divideX: Operation = (a, b) => a / b;

console.log(addX(2, 4)); //6
console.log(subtractX(2, 4)); //-2
console.log(multiplyQ(2, 4)); //8
console.log(divideX(2, 4)); //0.5

/*
Вправа 10.
Створи функцію execute, яка приймає callback (функцію без параметрів, що повертає void),
і викликає її.
*/

function execute(callback: () => void) {
  callback();
}

execute(() => console.log('tototo'));

/*
Вправа 11.
Створи функцію processInput, яка приймає функцію (value: string) => void,
і викликає її з рядком "Hello".
*/

function processInputX(callback: (value: string) => void) {
  const userValue = 'lalala';
  callback(userValue);
}

processInputX(val => console.log(`Hello, ${val}`)); //Hello, lalala

/*
Вправа 12.
Створи функцію calculateTotal, яка приймає масив чисел і повертає їх суму через reduce.
*/

function calculateTotalX(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = calculateTotalX([1, 2, 3, 4]);
console.log('total:', total); //10

/*
Вправа 13.
Створи функцію average, яка приймає невизначену кількість аргументів (...nums: number[])
і повертає середнє арифметичне.
*/

function average(...nums: number[]): number {
  return nums.reduce((acc, current) => acc + current, 0) / nums.length;
}

const averageResult = average(1, 2, 3, 4);
console.log('averageResult:', averageResult); //2.5

/*
Вправа 14.
Створи тип Printer, який описує функцію (text: string, repeat?: number) => void.
Оголоси функцію printText цього типу.
*/

type Printer = (text: string, repeat?: number) => void;

const printText: Printer = (msg, n = 1) => console.log(msg.repeat(n));

printText('lalala'); //lalala
printText('lalala', 3); //lalalalalalalalala

/*
Вправа 15.
Створи функцію toUpper, яка приймає рядок або null,
і повертає той самий рядок у верхньому регістрі (або 'UNKNOWN', якщо null).
*/

function toUpper(str?: string | null): string {
  return str ? str.toLocaleUpperCase() : 'UNKNOWN';
}

console.log(toUpper('lalala'));
console.log(toUpper());

/*
Вправа 16.
Створи функцію filterEvenNumbers, яка приймає масив чисел і повертає лише парні.
Типізуй параметр і результат.
*/

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); //[2, 4, 6]

/*
Вправа 17.
Створи функцію applyOperation, яка приймає два числа й callback типу (a: number, b: number) => number.
Повертає результат виконання callback.
*/

function applyOperation(
  x: number,
  y: number,
  callback: (a: number, b: number) => number
): number {
  let a = x;
  let b = y;

  const result = callback(a, b);
  return result;
}

const apply = applyOperation(2, 4, (a, b) => a + b);
console.log(apply); //6

/*
Вправа 18.
Створи тип Greeter, який описує функцію (name: string) => string.
Оголоси змінну sayHi цього типу і реалізуй її.
*/

type Greeter = (name: string) => string;
const sayHi: Greeter = name => {
  return `Hello ${name}`;
};

const hi = sayHi('Victor');
console.log(hi); //Hello Victor

/*
Вправа 19.
Створи функцію combine, яка приймає два значення типу string | number.
Якщо обидва числа — повертає суму, якщо рядки — об’єднує.
(Підказка: використовуй union і перевірку typeof)
*/
type StringOrNumber = string | number;

function combine(val1: StringOrNumber, val2: StringOrNumber): StringOrNumber {
  if (typeof val1 === 'string' && typeof val2 === 'string') {
    return val1 + val2;
  } else if (typeof val1 === 'number' && typeof val2 === 'number') {
    return val1 + val2;
  }
  return 'Enter values of the same type';
}

const combineStr = combine('lalala', 'tototo');
const combineNums = combine(2, 4);
const combineMix = combine(2, '4');

console.log(combineStr); //lalalatototo
console.log(combineNums); //6
console.log(combineMix); //Enter values of the same type

/*
Вправа 20.
Створи generic-функцію identity<T>(value: T): T,
яка просто повертає свій аргумент.
*/

function identityX<T>(value: T): T {
  return value;
}
