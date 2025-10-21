//Типізація Масивів

/*
Масиви в TypeScript, як і в JavaScript, є колекціями елементів. Головна відмінність полягає в тому, що TypeScript вимагає, щоб всі елементи масиву мали однаковий тип.
*/

//Типізація Масивів Примітивів

// - Синтаксис з квадратними дужками (Найпоширеніший)

let ages: number[] = [25, 30, 42];
let names: string[] = ['Анна', 'Петро', 'Ольга'];
let statuses: boolean[] = [true, false, true];

// - Синтаксис з Generics (Загальними типами)

let scores: Array<number> = [85, 90, 78];
let countries: Array<string> = ['Україна', 'Польща'];

// Типізація Масивів Об'єктів

/*
Коли масив містить об'єкти, потрібно типізувати структуру об'єкта перед тим, як оголосити масив цього типу. Найкраще для цього використовувати Інтерфейси (interface).
*/

interface User {
  id: number;
  username: string;
  isActive: boolean;
}

let userList: User[] = [
  { id: 1, username: 'admin', isActive: true },
  { id: 2, username: 'guest', isActive: false },
  // ... інші об'єкти типу User
];

//Типізація Багатовимірних Масивів

let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//Типізація Примітивних Масивів

/*
1. Оголосіть змінну grades як масив чисел (number[]) і присвойте їй 3 довільні оцінки.
*/

const grades: number[] = [1, 2, 3];

/*
2. Оголосіть змінну colors як масив рядків (string[]) і додайте три назви кольорів.
*/
const colors: string[] = ['red', 'green', 'black'];

/*
3. Оголосіть змінну isAvailable як масив логічних значень, використовуючи синтаксис Generics (Array<boolean>).
*/

const isAvailable: Array<boolean> = [true, true, false];

/*
4. Створіть функцію getLastElement, яка приймає масив рядків (string[]) і повертає один рядок (або undefined).
*/

function getLastElement(arr: string[]): string | undefined {
  return arr[arr.length - 1];
}

const lastElement = getLastElement(['red', 'green', 'black']);
console.log('lastElement:', lastElement); //black

/*
5. Яку помилку видасть TS: let data: number[] = [1, "два", 3];
*/
//помилка тип string не відноситься до параметрів типу number

/*
6. Створіть порожній масив namesList, типізуйте його як string[], а потім додайте до нього рядок "Олег".
*/

const namesList: string[] = [];
console.log('namesList:', namesList); //[]
namesList.push('Олег');
console.log('namesList:', namesList); //['Олег']

/*
7. Оголосіть змінну emptyArray типу any[].
*/

const emptyArray: any[] = [];

/*
8. Створіть багатовимірний масив chessboard (string[][]) та додайте в нього дві підмасиви-рядки, наприклад, ["R", "N"].
*/

const chessboard: string[][] = [['R'], ['N']];
console.log('chessboard:', chessboard); //(2) [Array(1), Array(1)]

/*
9. Оголосіть константу ID_NUMBERS типу readonly number[] та спробуйте додати до неї новий елемент.
*/

const ID_NUMBERS: readonly number[] = [];
// ID_NUMBERS.push(1) ->помилка: властивість push не існує у властивості readonly number[]

/*
10. Створіть функцію logArrayLength, яка приймає будь-який масив (наприклад, number[]) і повертає його довжину (number).
*/

function logArrayLength(arr: any[]): number {
  return arr.length;
}

//Типізація Масивів Об'єктів та Інтерфейси

/*
11. Створіть інтерфейс Book з властивостями title (string) та pages (number).
*/

interface Book {
  title: string;
  pages: number;
}

/*
12. Оголосіть змінну library як масив об'єктів типу Book[]. Присвойте їй два об'єкти.
*/

const library: Book[] = [
  { title: 'lalala', pages: 33 },
  { title: 'tototo', pages: 44 },
];

/*
13. Створіть функцію findBookByTitle, яка приймає library (Book[]) та searchTitle (string) і повертає один об'єкт типу Book (або undefined).
*/

function findBookByTitle(arr: Book[], str: string): Book | undefined {
  return arr.find(element => element.title === str);
}

const bookByTitle = findBookByTitle(library, 'lalala');
console.log('bookByTitle:', bookByTitle); //{title: 'lalala', pages: 33}

/*
14. Створіть інтерфейс Location з властивостями city (string) та isCapital (boolean).
*/

interface Location {
  city: string;
  isCapital: boolean;
}

/*
15. Оголосіть константу europeanCities типу Location[] та заповніть її даними для Києва та Парижа.
*/

const europeanCities: Location[] = [
  { city: 'Київ', isCapital: true },
  { city: 'Париж', isCapital: true },
];

//Комбінації

/*
16. Створіть функцію filterActiveUsers, яка приймає масив, типізований інтерфейсом User[], і повертає новий масив активних користувачів (User[]).
*/

// interface User {
//   id: number;
//   username: string;
//   isActive: boolean;
// }

// let userList: User[] = [
//   { id: 1, username: 'admin', isActive: true },
//   { id: 2, username: 'guest', isActive: false },
//   // ... інші об'єкти типу User
// ];

function filterActiveUsers(arr: User[]): User[] {
  return arr.filter(user => user.isActive);
}

const activeUser = filterActiveUsers(userList);
console.log('activeUser:', activeUser);

/*
17. Яку помилку видасть TS, якщо ви спробуєте викликати calculateTotalPrice (з Задачі 2) і передати їй [100, 200, 300] замість масиву об'єктів?
*/

interface Product {
  name: string;
  price: number;
}

function calculateTotalPrice(items: Product[]): number {
  let total = 0;
  items.forEach(item => {
    total += item.price;
  });
  return total;
}

const shoppingCart: Product[] = [
  { name: 'Клавіатура', price: 1500 },
  { name: 'Миша', price: 500 },
];

const total: number = calculateTotalPrice(shoppingCart);
console.log(`Загальна сума: ${total}`); // 2000

// const total1: number = calculateTotalPrice([100, 200, 300]); помилка-> тип number не належить до типу Product

/*
18. Створіть інтерфейс Event з необов'язковою властивістю location (string?). Оголосіть масив events типу Event[].
*/

interface Event {
  location?: string;
}

const events: Event[] = [];

/*
19. Створіть функцію getTitles, яка приймає масив об'єктів типу Book[] (використовуйте інтерфейс з Завдання 11) і повертає масив, що містить тільки назви книг (string[]).
*/

// interface Book {
//   title: string;
//   pages: number;
// }

function getTitles(arr: Book[]): string[] {
  return arr.map(books => books.title);
}

console.log(getTitles(library)); //['lalala', 'tototo']

/*
20. Оголосіть масив mixedData типу, який може містити або рядки, або числа (використовуйте Union Type: (string | number)[]).
*/

const mixedData: (string | number)[] = ['A', 1, 'B', 2];
