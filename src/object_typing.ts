//Типізація Об'єктів (Object Typing)

//Анонімні Об'єктні Типи (Inline Typing)

/*
Найпростіший спосіб типізувати об'єкт — це вказати його структуру безпосередньо при оголошенні. Це називається анонімним типом, оскільки він не має імені, яке можна було б повторно використати.
*/

// Оголошення змінної 'person' та її типу
let person: {
  name: string;
  age: number;
  isStudent: boolean;
} = {
  name: 'Оксана',
  age: 28,
  isStudent: false,
};

//Використання Інтерфейсів (Interfaces)

/*
Інтерфейси (interface) — це найкращий спосіб описувати структуру об'єктів. Вони створюють іменований "контракт" або "шаблон", який може бути повторно використаний у багатьох місцях коду.
*/

// Створення інтерфейсу
interface Product {
  id: number;
  name: string;
  price: number;
}

// Застосування інтерфейсу
let book: Product = {
  id: 101,
  name: 'Книга TypeScript',
  price: 550.5,
};

//Необов'язкові Властивості (Optional Properties)

/*
Щоб вказати, що певна властивість об'єкта може бути відсутня, використовуйте знак питання (?) після назви властивості.
*/

interface UserProfile {
  username: string;
  email: string;
  phone?: string; // <-- Це поле необов'язкове
}

const user1: UserProfile = { username: 'max', email: 'm@ex.com' }; // Коректно
const user2: UserProfile = {
  username: 'anna',
  email: 'a@ex.com',
  phone: '123-456',
}; // Коректно

//Властивості Тільки для Читання (Readonly Properties)

/*
Використовуйте ключове слово readonly, щоб запобігти зміні властивості об'єкта після його ініціалізації.
*/

interface Point {
  readonly x: number;
  readonly y: number;
}

const p1: Point = { x: 10, y: 20 };
// p1.x = 5; // ❌ Помилка: Cannot assign to 'x' because it is a read-only property.

// *********************************
console.log('******************');

//Анонімні Типи та Основи

/*
1. Створіть об'єкт car з анонімним типом, що має властивості brand (string) та year (number).
*/

let car: { brand: string; year: number } = {
  brand: 'BMW',
  year: 1990,
};

/*
2. Оголосіть змінну coords з анонімним типом, що містить x (number) та y (number), і присвойте їй значення.
*/

let coords: { x: number; y: number } = {
  x: 10,
  y: 20,
};

/*
3. Створіть об'єкт settings з властивостями theme (string) та notificationsEnabled (boolean).
*/

let settings: { theme: string; notificationsEnabled: boolean } = {
  theme: 'dark',
  notificationsEnabled: false,
};

/*
4. Яку помилку видасть TypeScript, якщо в car (з завдання 1) спробувати додати властивість color: "red"?
*/

//помилка -> така властивість не існує

/*
5. Створіть функцію getPersonName, яка приймає об'єкт з властивістю firstName (string) і повертає string.
*/

function getPersonName(obj: { firstName: string }): string {
  return obj.firstName;
}

const personName: { firstName: string } = {
  firstName: 'X',
};

console.log(getPersonName(personName)); //X

console.log('******************');
//Інтерфейси (Interfaces)

/*
6. Створіть інтерфейс Shape з властивістю name типу string.
*/

interface Shape {
  name: string;
}

/*
7. Створіть інтерфейс Circle, який розширює Shape і додає властивість radius типу number.
*/

interface Circle extends Shape {
  radius: number;
}

/*
8. Оголосіть константу myCircle і типізуйте її за допомогою інтерфейсу Circle
*/

const myCircle: Circle = {
  name: 'my circle',
  radius: 2,
};

/*
9. Створіть інтерфейс Rectangle з двома властивостями: width (number) та height (number).
*/

interface Rectangle {
  width: number;
  height: number;
}

/*
10. Створіть функцію getArea, яка приймає об'єкт типу Rectangle і повертає number.
*/

function getArea(obj: Rectangle): number {
  return obj.width * obj.height;
}

const rect: Rectangle = {
  width: 2,
  height: 4,
};

console.log(getArea(rect)); //8

//Необов'язкові та Readonly Властивості

/*
11. Створіть інтерфейс Config з необов'язковою властивістю apiKey (string?).
*/

interface Config {
  apiKey?: string;
}

/*
12. Оголосіть об'єкт appConfig типу Config, не вказуючи apiKey.
*/

const appConfig: Config = {};

/*
13. Оголосіть функцію displayKey, яка приймає config типу Config і безпечно (з перевіркою) виводить apiKey у консоль.
*/

function displayKey(config: Config): void {
  if (config.apiKey) {
    console.log(config.apiKey);
  }
}

const appConfig1: Config = {
  apiKey: '123',
};

console.log(displayKey(appConfig)); //undefined
console.log(displayKey(appConfig1)); //123

/*
14. Створіть інтерфейс ImmutableItem з властивістю id типу number, яка є тільки для читання (readonly).
*/

interface ImmutableItem {
  readonly id: number;
}

/*
15. Оголосіть об'єкт immutableObj типу ImmutableItem та спробуйте змінити його id
*/

const immutableObj: ImmutableItem = {
  id: 13,
};

// immutableObj.id = 14 -> помилка: неможливо змінити id, бо дана властивість тільки для читання
