//Типізація масивів у TypeScript

//Синтаксис типізації масиву

//- Варіант 1: "Type[]" (найпоширеніший)
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ['Anna', 'Oleh', 'Marta'];

//-Варіант 2: "Array<Type>"

const numbers1: Array<number> = [1, 2, 3, 4, 5];
const names1: Array<string> = ['Anna', 'Oleh', 'Marta'];

//Масив об’єктів
/*
Якщо потрібно зберігати об’єкти певного типу, описуємо спочатку тип або інтерфейс:
*/

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: 'Anna', age: 25 },
  { name: 'Oleh', age: 30 },
];

//Масиви з кількома типами (union)
/*
Іноді масив може містити значення різних типів.
Тоді використовують union type:
*/
const mix: (number | string)[] = [1, 'two', 3, 'four'];

//Опрацювання масивів методами
/*
TypeScript "розуміє" стандартні методи масивів (map, filter, forEach, find, тощо)
і автоматично виводить типи елементів:
*/
const numbers2 = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2); // number[]
const even = numbers.filter(n => n % 2 === 0); // number[]

//Readonly масиви
/*
Іноді потрібно заборонити змінювати масив (наприклад, передавати дані у функцію, щоб не зіпсували).
*/

const ids: readonly number[] = [1, 2, 3];
// ids.push(4); // ❌ Помилка — масив лише для читання

type ReadonlyNames = ReadonlyArray<string>;
const names2: ReadonlyNames = ['Anna', 'Oleh'];

//Масиви масивів (багатовимірні)
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//Масиви з невідомим типом (any[])
const data: any[] = [1, 'text', true, null];
/*
❗ Краще уникати any[], бо тоді TypeScript втрачає контроль над типами.
Використовуй тільки тоді, коли дані дійсно невідомі заздалегідь.
*/

//Узагальнення (Generics) у масивах
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirst<number>([1, 2, 3]); // number
const name = getFirst<string>(['Anna', 'Oleh']); // string

//Типізація через інтерфейс із масивом
interface Library {
  name: string;
  books: string[];
}

const cityLibrary: Library = {
  name: 'Kyiv Central Library',
  books: ['Мандрівка у часі', 'Під сонцем'],
};

console.log('*****************');

/*
Вправа 1.
Оголоси масив чисел numbers, який містить 3 будь-яких числа.
*/

const numbersX: number[] = [1, 2, 3];

/*
Вправа 2.
Оголоси масив рядків fruits, що містить 3 фрукти.
*/

const fruits: string[] = ['apple', 'banana', 'mango'];

/*
Вправа 3.
Оголоси масив логічних значень flags.
*/

const flags: boolean[] = [true, false, true];

/*
Вправа 4.
Опиши масив чисел у вигляді Array<number>.
*/

const numbersA: Array<number> = [1, 2, 3];

/*
Вправа 5.
Створи масив mix, який може містити числа або рядки.
*/

const mixX: (number | string)[] = [1, '1', 2, '3'];

/*
Вправа 6.
Оголоси тип User із полями name: string і age: number.
Створи масив users цього типу з двома елементами.
*/

type UserX = {
  name: string;
  age: number;
};

const usersU: UserX[] = [
  { name: 'Name-1', age: 22 },
  { name: 'Name-2', age: 33 },
];

/*
Вправа 7.
Створи масив books, де кожен елемент має title (string) і year (number).
*/

const booksX: { title: string; year: number }[] = [
  { title: 'Title-1', year: 2000 },
  { title: 'Title-2', year: 2025 },
];

type Book = {
  title: string;
  year: number;
};

const books: Book[] = [
  { title: 'Title-1', year: 2000 },
  { title: 'Title-2', year: 2025 },
];

/*
Вправа 8.
Оголоси масив products, у якого елементи мають name, price, available.
*/

const productsX: { name: string; price: number; available: boolean }[] = [
  { name: 'Name-1', price: 50, available: true },
  { name: 'Name-2', price: 150, available: false },
  { name: 'Name-3', price: 250, available: true },
];

type Product = {
  name: string;
  price: number;
  available: boolean;
};

const productsP: Product[] = [
  { name: 'Name-1', price: 50, available: true },
  { name: 'Name-2', price: 150, available: false },
  { name: 'Name-3', price: 250, available: true },
];

/*
Вправа 9.
Створи тип Point з координатами x та y.
Створи масив points: Point[].
*/

type Point = {
  x: number;
  y: number;
};

const points: Point[] = [
  { x: 10, y: 20 },
  { x: 15, y: 25 },
];

/*
Вправа 10.
Оголоси масив користувачів, де кожен має name і опціональне поле email.
*/

const usersQ: { name: string; email?: string }[] = [
  { name: 'Name-1', email: 'gfd@hgf' },
  { name: 'Name-2' },
];

/*
Вправа 11.
Створи масив чисел і подвої всі елементи через map.
*/

const nums: number[] = [1, 2, 3];
const doubled1 = nums.map(num => num * 2);

/*
Вправа 12.
Відфільтруй лише парні числа з масиву.
*/

const even1 = nums.filter(num => num % 2 === 0);

/*
Вправа 13.
Знайди перше ім’я, яке починається з літери “A”.
*/

const namesQ: string[] = ['bbbbb', 'ccccc', 'aaaaaaa'];

const firsNameStartA = namesQ.find(name => name[0].toLowerCase() === 'a');
console.log(firsNameStartA); //aaaaaaa

/*
Вправа 14.
Порахуй суму чисел у масиві через reduce.
*/

const totalSumm = nums.reduce((acc, current) => acc + current, 0);

/*
Вправа 15.
Створи масив ids типу readonly number[].
*/
const ids1: readonly number[] = [1, 2, 3];

/*
Вправа 16.
Створи масив масивів чисел (матрицю).
*/

const mixed: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

/*
Вправа 17.
Оголоси тип Todo із полями title (string) і done (boolean).
Створи масив todos і виведи лише ті, де done = false.
*/

type Todo = {
  title: string;
  done: boolean;
};

const todos: Todo[] = [
  { title: 'todo-1', done: true },
  { title: 'todo-2', done: false },
  { title: 'todo-3', done: false },
  { title: 'todo-4', done: true },
  { title: 'todo-5', done: false },
];

const todosFalse: Todo[] = todos.filter(element => !element.done);
// console.log(todosFalse);

/*
Вправа 18.
Створи функцію getFirstElement, яка приймає масив string[] і повертає перший елемент.
*/

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<string>(namesQ);

/*
Вправа 19.
Опиши масив values, який може містити або числа, або null.
*/

const values: (number | null)[] = [1, 2, null];

/*
Вправа 20.
Створи тип Company із полем departments, що є масивом об’єктів { name: string; employees: number }.
*/

type Company = {
  departments: { name: string; employees: number }[];
};
