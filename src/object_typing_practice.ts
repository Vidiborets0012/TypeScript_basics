//Типізація об’єктів (Object Typing) у TypeScript

//1. Типізація об’єктів
/*
В TypeScript можна описати, яку структуру має об’єкт, вказавши типи для кожного поля:
*/

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
} = {
  name: 'Олена',
  age: 28,
  isAdmin: true,
};
/*
Тут ми чітко визначили, що user повинен мати три властивості певних типів.
Якщо пропустити або додати зайву властивість — TypeScript видасть помилку.
*/

//2. Опціональні властивості (?)
/*
Не всі властивості об’єкта завжди обов’язкові.
Якщо якась з них може бути відсутня — додаємо знак питання ?.
*/

let user1: {
  name: string;
  age?: number; // опціональна
} = {
  name: 'Іван',
};
/*
Тут age може бути, а може й не бути.
TypeScript не вимагатиме її наявності.
*/

//3. Властивості лише для читання (readonly)
/*
readonly робить поле незмінним після створення об’єкта.
*/
let product: {
  readonly id: number;
  name: string;
} = {
  id: 101,
  name: 'Ноутбук',
};

product.name = 'MacBook'; // ✅ можна
// product.id = 102; ❌ Помилка — властивість лише для читання
/*
readonly часто використовують для ідентифікаторів, ключів або даних, які не можна змінювати після ініціалізації.
*/

//4. Вкладені об’єкти
/*
Об’єкти можуть містити інші об’єкти, і для кожного можна задати тип:
*/
let user2: {
  name: string;
  address: {
    city: string;
    zip: number;
  };
} = {
  name: 'Марія',
  address: {
    city: 'Львів',
    zip: 79000,
  },
};

//5. Тип об’єкта як змінна (type alias)
/*
Щоб не повторювати структуру кілька разів, можна створити власний тип:
*/
type User = {
  name: string;
  age: number;
  isAdmin?: boolean;
};

let u1: User = { name: 'Ірина', age: 30 };
let u2: User = { name: 'Максим', age: 25, isAdmin: true };

/*
Тип User тепер можна використовувати будь-де, де потрібен користувач.
Це значно покращує читабельність коду.
*/

// 6. Object typing і функції
/*
Можна вказати, що функція приймає аргумент певної структури.
*/
type Car = {
  brand: string;
  year: number;
};

function printCar(car: Car): void {
  console.log(`${car.brand}, ${car.year} рік`);
}

printCar({ brand: 'Toyota', year: 2020 });

/*
TS гарантує, що у функцію потрапить саме об’єкт із властивостями brand і year правильних типів.
*/

//7. Типи об’єктів із динамічними ключами (index signatures)
/*
Коли ми не знаємо наперед, скільки і які саме ключі буде мати об’єкт:
*/
let salaries: { [name: string]: number } = {
  Олена: 1200,
  Іван: 950,
  Андрій: 1400,
};
/*
Цей запис означає: ключ (name) — рядок, значення — число.
TS дозволить створювати будь-які нові пари ключ → значення, але типи залишаться сталими.
*/

//Типізація методів об’єкта в TypeScript

//1. Базовий приклад
/*
У TypeScript метод у об’єкті типізується як функція.
*/
let user3: {
  name: string;
  age: number;
  sayHello: () => void;
} = {
  name: 'Олег',
  age: 25,
  sayHello: () => {
    console.log('Привіт, я Олег!');
  },
};
/*
sayHello: () => void — це тип функції без аргументів, що нічого не повертає (void).

=> означає “приймає → повертає”.
*/

//2. Метод із аргументом
let user4: {
  name: string;
  greet4: (message: string) => void;
} = {
  name: 'Ірина',
  greet4: (message: string) => {
    console.log(`${message}, мене звати Ірина`);
  },
};

user4.greet4('Доброго дня!');

//3. Метод, що повертає значення
/*
Тип повернення задається після стрілки =>.
*/
let calculator: {
  add: (a: number, b: number) => number;
} = {
  add: (a, b) => a + b,
};

let result = calculator.add(5, 7);
console.log(result); // 12
/*
Метод add приймає два числа і повертає число.
TypeScript гарантує, що інші типи не можна буде передати.
*/

//4. Використання this усередині методу
/*
Якщо метод працює з властивостями об’єкта, TypeScript також враховує контекст this.
*/
let user5 = {
  name: 'Марія',
  age: 30,
  getInfo5(): string {
    return `${this.name}, ${this.age} років`;
  },
};

console.log(user5.getInfo5());
/*
При оголошенні методу через скорочену форму (getInfo(): string { ... })
TypeScript автоматично знає, що this посилається на сам об’єкт user.
*/

//5. Типізація методів через type або interface
/*
Для повторного використання краще описувати методи у власних типах.
*/
type User2 = {
  name: string;
  age: number;
  sayHello: () => void;
  getAge: () => number;
};

let u: User2 = {
  name: 'Олена',
  age: 22,
  sayHello() {
    console.log(`Привіт, я ${this.name}`);
  },
  getAge() {
    return this.age;
  },
};
/*
Тип User описує і дані (name, age), і методи (sayHello, getAge).

TypeScript перевіряє, щоб об’єкт дотримувався цього контракту.
*/

//6. Типізація методів через interface
/*
Інтерфейси особливо зручні, коли треба розширювати типи.
*/
interface Car2 {
  brand: string;
  year: number;
  start(): void;
  getAge(currentYear: number): number;
}

const car: Car2 = {
  brand: 'Toyota',
  year: 2020,
  start() {
    console.log(`${this.brand} запускається...`);
  },
  getAge(currentYear) {
    return currentYear - this.year;
  },
};

car.start();
console.log(car.getAge(2025)); // 5
/*
У інтерфейсі методи описуються без =>.

TypeScript сам знає, що start і getAge — це функції.

Використовувати interface особливо зручно в об’єктно-орієнтованих структурах.
*/

console.log('***********************');

/*
Вправа 1. Простий об’єкт
Оголоси змінну user, у якої:
name — рядок, age — число.
*/

// const userI: { name: string; age: number } = {
//   name: 'Name',
//   age: 44,
// };

/*
Вправа 2. Опціональна властивість
Додай властивість email? (опціональну) до об’єкта user.
*/

const userI: { name: string; age: number; email?: string } = {
  name: 'Name',
  age: 44,
};

/*
Вправа 3. Властивість лише для читання

Створи об’єкт book, де:
readonly id: number
title: string

Спробуй змінити id після ініціалізації — TypeScript має видати помилку.
*/

const book: { readonly id: number; title: string } = {
  id: 1,
  title: 'Book title',
};

/*
Вправа 4. Вкладений об’єкт

Опиши об’єкт person:
name: string
address: { city: string; zip: number }
*/

const person: { name: string; address: { city: string; zip: number } } = {
  name: 'Name',
  address: {
    city: 'City',
    zip: 11111, //як бути якщо код починається з нуля: 02100?
  },
};

/*
Вправа 5. Тип як змінна

Створи тип User із полями name, age, isAdmin?, а потім створіть змінну admin цього типу.
*/

type UserQ = {
  name: string;
  age: number;
  isAdmin?: boolean;
};

const admin: UserQ = {
  name: 'Admin',
  age: 33,
  isAdmin: true,
};

/*
Вправа 6. Тип і функція

Створи тип Car з полями brand, year, і функцією getInfo(): string,
яка повертає рядок "Brand (year)".
*/

type CarQ = {
  brand: string;
  year: number;
  getInfo(): string;
};

const carQ: CarQ = {
  brand: 'Toyota',
  year: 2021,
  getInfo() {
    return `${this.brand} (${this.year})`;
  },
};

/*
Вправа 7. Об’єкт як аргумент функції

Оголоси тип Product з name і price.
Напиши функцію printProduct(product: Product): void, яка виводить інформацію у консоль.
*/

type Product = {
  name: string;
  price: number;
};

function printProduct(product: Product): void {
  console.log(`${product.name} - ${product.price}`);
}

/*
Вправа 8. Масив об’єктів

Створи масив users, який містить об’єкти типу User (з попередніх завдань).
*/

const usersQ: UserQ[] = [
  { name: 'Name-1', age: 33, isAdmin: true },
  { name: 'Name-2', age: 44 },
  { name: 'Name-3', age: 32, isAdmin: false },
];

/*
Вправа 9. Динамічні ключі

Створи об’єкт scores, у якого ключ — це ім’я студента (string), а значення — оцінка (number).
*/

const scores: { [name: string]: number } = {
  name1: 12,
  name2: 10,
};

/*
Вправа 10. Об’єкт із методом

Створи об’єкт counter з полем count: number і методом increment(): void,
який збільшує count на 1.
*/

// const counter: {
//   count: number;
//   increment(): void;
// } = {
//   count: 0,
//   increment() {
//     this.count += 1;
//   },
// };

// counter.increment();
// console.log(counter.count); // 1

/*
Вправа 11. Метод із аргументом

Додай до counter метод add(n: number): void, який додає n до count.
*/
const counter: {
  count: number;
  increment(): void;
  add(n: number): void;
} = {
  count: 0,
  increment() {
    this.count += 1;
  },
  add(n) {
    this.count += n;
  },
};

counter.increment();
console.log(counter.count); // 1
counter.increment();
console.log(counter.count); // 2

counter.add(4);
console.log(counter.count); //6

/*
Вправа 12. Метод із поверненням

Створи об’єкт calculator, у якого є метод multiply(a: number, b: number): number.
*/

const calculatorX: {
  multiply(a: number, b: number): number;
} = {
  multiply(a, b) {
    return a * b;
  },
};

console.log(calculatorX.multiply(3, 4)); //12

/*
Опиши тип Company, у якого:

name: string
employees: User[]
*/
// type UserQ = {
//   name: string;
//   age: number;
//   isAdmin?: boolean;
// };

// type Company = {
//   name: string;
//   employees: UserQ[];
// };

// const company: Company = {
//   name: 'TechCorp',
//   employees: [
//     { name: 'Oleh', age: 28 },
//     { name: 'Iryna', age: 35, isAdmin: true },
//   ],
// };

/*
Вправа 14. Опціональне вкладене поле

Розшир Company, додавши опціональне поле address?: { city: string; street: string }.
*/

type Company = {
  name: string;
  employees: UserQ[];
  address?: { city: string; street: string };
};

const company1: Company = {
  name: 'TechCorp',
  employees: [
    { name: 'Anna', age: 28 },
    { name: 'Ivan', age: 35, isAdmin: true },
  ],
};

const company2: Company = {
  name: 'SoftServe',
  employees: [{ name: 'Oleh', age: 30 }],
  address: { city: 'Lviv', street: 'Shevchenka 10' },
};

/*
Вправа 15. Типізація через interface

Створи interface Animal з полями name: string, sound(): void.
Потім створи змінну dog, що реалізує цей інтерфейс.
*/

interface Animal {
  name: string;
  sound(): void;
}

const dog: Animal = {
  name: 'Bobik',
  sound() {
    console.log('Woof'); //Woof
  },
};
dog.sound();

/*
Вправа 16. Розширення інтерфейсу

Створи інтерфейс Pet, який розширює Animal і додає owner: string.
*/

interface Pet {
  owner: string;
}

const dog1: Pet & Animal = {
  owner: 'Petya',
  name: 'Bobik',
  sound() {
    console.log('Woof'); //Woof
  },
};

/*
Вправа 17. Метод із this

Створи об’єкт user, який має поля name, age і метод getInfo(): string,
що повертає "Ім'я (вік років)", використовуючи this.
*/

const userX: { name: string; age: number; getInfo(): string } = {
  name: 'NameX',
  age: 22,
  getInfo() {
    return `${this.name} ${this.age}`;
  },
};
console.log(userX.getInfo()); //NameX 22

/*
Вправа 18. Тип для функції всередині об’єкта

Оголоси тип Logger з методом log(message: string): void.
Створи об’єкт consoleLogger, який його реалізує.
*/

type Logger = {
  log(message: string): void;
};

const consoleLogger: Logger = {
  log(message) {
    console.log(message);
  },
};

/*
Вправа 19. Використання readonly у масиві

Створи об’єкт point з readonly x: number, readonly y: number.
Спробуй змінити одне зі значень — TypeScript має попередити.
*/

const point: { readonly x: number; readonly y: number } = {
  x: 10,
  y: 20,
};
// point.x = 11//видасть помилку => не можна змінити х бо це властивість тілки для читання
//не зовсів зрозумів до чого тут масиви?

/*
Вправа 20. Об’єкт із union типами

Створи тип Response:
status: "success" | "error"
message: string
Створи дві змінні — successResponse і errorResponse відповідно.
*/
type Response = {
  status: 'success' | 'error';
  message: string;
};

const successResponse: Response = {
  status: 'success',
  message: 'successResponse',
};

const errorResponse: Response = {
  status: 'error',
  message: 'errorResponse',
};
