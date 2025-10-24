//Узагальнені Типи (Generics)

/*
Generics (Узагальнені типи) дозволяють компонентам працювати з будь-яким типом даних, зберігаючи при цьому строгу типізацію. Вони дають можливість "параметризувати" типи так, щоб функція, клас чи інтерфейс могли працювати не лише з одним конкретним типом (number, string), а й з типом-замінником (T), який визначається лише під час виклику.
*/

//Generics у Функціях

/*
Узагальнений тип оголошується у кутових дужках (<T>) перед параметрами функції. T (від Type) — це загальноприйнята, але не обов'язкова назва.
*/

// <T> оголошує Generic Type T
function identity<T>(arg: T): T {
  // Функція повертає той самий тип, який отримала
  return arg;
}

// Виклик 1: T стає number
let numResult = identity<number>(100); // Тип numResult: number

// Виклик 2: T виводиться як string
let strResult = identity('hello'); // Тип strResult: string (виводиться автоматично)

//Generics з Масивами

/*
Generics часто використовуються для типізації масивів, коли тип елементів невідомий заздалегідь.
*/

// T[] (Масив елементів типу T)
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

// let firstUser = getFirst<User>([user1, user2]); // T = User
let firstNumber = getFirst([1, 2, 3]); // T = number (виведено)

//Generics у Структурах Даних (Об'єкти та Інтерфейси)

/*
Generics можна використовувати для створення типобезпечних контейнерів (стеків, черг, сховищ), які працюють з будь-яким типом даних.
*/

// Узагальнений Інтерфейс
/*
Узагальнений інтерфейс дозволяє визначити форму об'єкта, де тип однієї або кількох властивостей залежить від параметра, вказаного при використанні.
*/

// Інтерфейс, що описує об'єкт-контейнер
interface Container<T> {
  id: number;
  value: T; // Тип T
  logValue(): void;
}

// 1. Використання для зберігання числа
let numberContainer: Container<number> = {
  id: 1,
  value: 42,
  logValue() {
    console.log(this.value);
  },
};
// numberContainer.value має тип number

// 2. Використання для зберігання масиву рядків
let listContainer: Container<string[]> = {
  id: 2,
  value: ['A', 'B'],
  logValue() {
    console.log(this.value.join(', '));
  },
};
// listContainer.value має тип string[]

//Узагальнені Фабрики Об'єктів (Функції, що повертають об'єкти)
/*
Ви можете створити функцію-фабрику, яка приймає Generic-параметр, щоб створити і типізувати об'єкт під час виконання. Це замінює конструктор класу.
*/

// Створення узагальненої функції-фабрики
function createDataStore<T>() {
  const data: T[] = []; // Приватний масив, тип якого відомий як T

  return {
    // Метод, що приймає елемент типу T
    addItem: (item: T) => {
      data.push(item);
      console.log(`Added: ${item}`);
    },
    // Метод, що повертає масив типу T[]
    getSnapshot: (): T[] => {
      return [...data]; // Повертає копію
    },
  };
}

// 1. Створення сховища для об'єктів User
interface User {
  id: number;
  name: string;
}
const userStore = createDataStore<User>();
// Тут T = User

userStore.addItem({ id: 1, name: 'Alice' });
// userStore.addItem(10); // ❌ Помилка: 10 не є типом User

const users = userStore.getSnapshot(); // Тип users: User[]

// 2. Створення сховища для чисел (T = number)
const numberStore = createDataStore<number>();
numberStore.addItem(100);

/*
Узагальнені типи використовуються для типізації форми даних (interface Container<T>) або поведінки функції (function createDataStore<T>()). Це дозволяє створювати типобезпечні об'єкти-сховища без необхідності оголошувати повний клас, використовуючи лише функції та інтерфейси.
*/

//Generics у Відповідях API (Складні структури)

/*
Generics ідеально підходять для типізації відповідей від API, де структура даних є універсальною, але тип фактичних даних (data) змінюється.
*/

// Універсальний інтерфейс відповіді API
interface ApiResponse<T> {
  status: 'ok' | 'error';
  timestamp: number;
  data: T; // T може бути будь-яким типом
}

// 1. Відповідь з даними користувача
interface User {
  id: number;
  name: string;
}
type UserResponse = ApiResponse<User[]>;
// UserResponse.data тепер має тип User[]

// 2. Відповідь з даними товару
interface Product {
  title: string;
  price: number;
}
type ProductResponse = ApiResponse<Product>;
// ProductResponse.data тепер має тип Product

//Generics у Функціях та Масивах

/*
1. Створіть функцію lastElement, яка приймає масив будь-якого типу T і повертає останній елемент цього типу.
*/
function lastElement<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

console.log(lastElement<number>([2, 3, 8, 9])); //9
console.log(lastElement<string>(['a', '4', 'b', 'd'])); //d

/*
2. Створіть функцію logPair, яка приймає два аргументи різних узагальнених типів T та U і повертає void.
*/

console.log('************************');
console.log('************************');
console.log('****** ЛЕКЦІЯ *****');

//ЛЕКЦІЯ

interface UserX {
  name: string;
  age: number;
}

interface UserResponseX {
  data: UserX[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

interface OrderX {
  id: number;
  price: number;
}

interface OrderResponseX {
  data: OrderX[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

const usersX: UserX[] = [{ name: 'Dave', age: 25 }];

const userResponseX: UserResponseX = {
  data: usersX,
  meta: {
    total: 100,
    page: 1,
    limit: 1,
  },
};

// =>

interface ApiResponseX<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

const ordersX: OrderX[] = [{ id: 1, price: 100 }];

const OrderResponseX: ApiResponseX<OrderX> = {
  data: ordersX,
  meta: {
    total: 100,
    page: 1,
    limit: 1,
  },
};

// на прикладі функції

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(['1', '2', '3']);

//**********************

interface Car {
  model: string;
  price: number;
}

const cars: Car[] = [
  {
    model: 'Car-1',
    price: 20000,
  },
  {
    model: 'Car-2',
    price: 30000,
  },
  {
    model: 'Car-3',
    price: 40000,
  },
];

function max<T>(arr: T[], selector: (arg: T) => number): T {
  return arr.reduce((prev, curr) => {
    return selector(curr) > selector(prev) ? curr : prev;
  });
}

max(cars, car => car.price);
