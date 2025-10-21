//Типізація Функцій

/*
Типізація функцій складається з двох основних частин: типізація параметрів (аргументів) та типізація поверненого значення.
*/

//Основна Типізація Функцій

/*
function functionName(param1: Type1, param2: Type2): ReturnType {
  // Тіло функції
  return someValue;
}
*/

function add(a: number, b: number): number {
  return a + b;
}

function logMessage(message: string): void {
  console.log(message);
  // Немає return
}

//Опціональні Параметри (?)

/*
Параметри можна зробити необов'язковими, додавши знак питання (?) після назви параметра. Опціональні параметри завжди повинні бути в кінці списку параметрів.
*/

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Привіт, ${name}!`;
}

greet('Анна'); // Привіт, Анна!
greet('Петро', 'Вітаю'); // Вітаю, Петро!

//Параметри зі Значенням за Замовчуванням

// type: (name: string, count?: number) => string
function repeat(name: string, count: number = 2): string {
  return name.repeat(count);
}

repeat('Олег'); // "ОлегОлег"
repeat('Олег', 3); // "ОлегОлегОлег"

//Тип Функції (Function Type Alias)

// Псевдонім типу для функції
type MathOperation = (x: number, y: number) => number;

// Використання псевдоніма
const multiply: MathOperation = (a, b) => a * b;

// TypeScript перевірить, що (a, b) є number, і повернення є number

//Приклади Типових Задач та Рішення

/*
Задача 1: Типізація колбек-функції
Мета: Гарантувати, що функція, яка приймає іншу функцію як аргумент (колбек), коректно типізує цей колбек.

Хід рішення:
Визначити тип колбеку.

Використати цей тип для аргументу головної функції.
*/

// Тип для функції, яка приймає число і повертає число
type Transformer = (value: number) => number;

function processValue(value: number, transformer: Transformer): number {
  // TS гарантує, що transformer є функцією і приймає number
  return transformer(value);
}

// Функція, що відповідає Transformer
const double: Transformer = n => n * 2;

const result = processValue(10, double); // 20

/*
Задача 2: Обробка опціональних параметрів
Мета: Написати функцію, яка обробляє масив, але приймає опціональний аргумент ліміту.

Хід рішення:
Використати ? для опціонального параметра.

Використати умовну логіку або значення за замовчуванням у тілі функції.
*/

function getFirstElements(arr: string[], limit?: number): string[] {
  // Використовуємо значення за замовчуванням у тілі функції
  const finalLimit = limit || arr.length;

  // TS гарантує, що arr є string[]
  return arr.slice(0, finalLimit);
}

const list = ['A', 'B', 'C', 'D'];

console.log(getFirstElements(list, 2)); // ["A", "B"]
console.log(getFirstElements(list)); // ["A", "B", "C", "D"]

//Базова Типізація

/*
1. Створіть функцію sum, яка приймає два числа (x, y) і повертає їх суму (number).
*/

function sum(x: number, y: number): number {
  return x + y;
}

/*
2. Створіть функцію greetUser, яка приймає name (string) і повертає void.
*/

function greetUser(name: string): void {
  console.log(`привіт, ${name}`);
}

/*
3. Створіть функцію isPositive, яка приймає num (number) і повертає boolean.
*/

function isPositive(num: number): boolean {
  return num > 0;
}

/*
4. Створіть функцію getArrayLength, яка приймає масив рядків (string[]) і повертає його довжину (number).
*/

function getArrayLength(arr: string[]): number {
  return arr.length;
}

/*
5. Яку помилку видасть TS: function calc(x: number): string { return x + 5; }?
*/
//тип number не відноситься до типу string

//Опціональні та Дефолтні Параметри

/*
6. Створіть функцію sendEmail, яка приймає to (string) і опціональний subject (string?).
*/

function sendEmail(to: string, subject?: string): void {}

/*
7. Створіть функцію power, яка приймає base (number) і exponent (number зі значенням за замовчуванням 2).
*/

function power(base: number, exponent: number = 2) {}

/*
8. Оголосіть функцію createId, яка приймає опціональний prefix (string) і повертає string. Використовуйте prefix тільки, якщо він існує.
*/

function createId(prefix?: string): string {
  return prefix ? prefix : 'default-id';
}

/*
9. Створіть функцію logTime, яка приймає message (string) і опціональну timestamp (number?).
*/

function logTime(message: string, timestamp?: number) {}

/*
10. Яку помилку видасть TS: function test(optional?: number, required: string) {}?
*/

// function test(optional?: number, required: string) {} //обов'язковий параметр не може бути після опціонального

//Function Type (Псевдоніми)

/*
11. Створіть псевдонім типу StringProcessor для функції, яка приймає string і повертає string.
*/

type StringProcessor = (str: string) => string;

/*
12. Оголосіть константу toLower, типізуйте її як StringProcessor і реалізуйте функцію, яка перетворює рядок на нижній регістр.
*/

const toLower: StringProcessor = str => str.toLowerCase();

console.log(toLower('LaLaLa')); //lalala

/*
13. Створіть псевдонім типу VoidCallback для функції, яка не приймає аргументів і повертає void.
*/

type VoidCallback = () => void;

/*
14. Створіть інтерфейс Calculator з єдиним методом calculate, який відповідає сигнатурі: (a: number, b: number) => number.
*/

interface Calculator {
  calculate(a: number, b: number): number;
}

/*
15. Оголосіть константу subtract, типізуйте її як Calculator і реалізуйте логіку віднімання.
*/

const subtract: Calculator = {
  calculate(a: number, b: number): number {
    return a - b;
  },
};

/*
16. Створіть інтерфейс Config з необов'язковою функцією onSuccess: () => void.
*/

interface Config {
  onSuccess?: () => void;
}

/*
17. Створіть функцію execute, яка приймає об'єкт типу Config і викликає onSuccess, якщо він існує.
*/

function execute(obj: Config) {
  obj.onSuccess?.();
}

/*
18. Створіть функцію mapToStrings, яка приймає масив чисел (number[]) і повертає масив рядків (string[]).
*/

type ToString = (arr: number[]) => string[];
const mapToStrings: ToString = arr => arr.map(num => num.toString());

function mapToStrings1(arr: number[]): string[] {
  return arr.map(num => num.toString());
}

/*
19. Створіть Union Type Result для значень, які функція може повернути: string | number | boolean.
*/

type Result = string | number | boolean;

/*
20. Оголосіть функцію parseData, яка повертає тип Result.
*/
// function parseData(): Result {
//   // додати логіку повернення одного з дозволених типів
// }
