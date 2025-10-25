/*
У TypeScript можна створювати власні (custom) типи, щоб багаторазово використовувати одну й ту ж структуру даних.
Замість того щоб постійно повторювати { name: string; age: number }, ми можемо дати цій структурі ім’я.
*/

//Варіант 1: type (тип-аліас)
/*
Ключове слово type створює псевдонім типу (type alias) — тобто ім’я для будь-якої структури типу.
*/
type User = {
  name: string;
  age: number;
  isAdmin?: boolean; // опціональна властивість
};

const user1: User = {
  name: 'Alice',
  age: 25,
};

const admin: User = {
  name: 'Bob',
  age: 30,
  isAdmin: true,
};

//Варіант 2: interface
/*
interface схожий на type, але частіше використовується для опису об’єктів і підтримує наслідування.
*/

interface UserX {
  name: string;
  age: number;
}

interface Admin extends UserX {
  permissions: string[];
}

const superAdmin: Admin = {
  name: 'Olena',
  age: 40,
  permissions: ['read', 'write', 'delete'],
};

//Приклад: Union типи
type Status = 'pending' | 'success' | 'error';

let currentStatus: Status = 'pending';
currentStatus = 'success';
// currentStatus = 'done'; // ❌ Помилка: 'done' не належить типу 'Status'

//Intersection типи (&)
/*
Intersection (перетин) поєднує кілька типів в один:
*/

type Person = {
  name: string;
};

type Contact = {
  email: string;
};

type Employee = Person & Contact;

const worker: Employee = {
  name: 'Ivan',
  email: 'ivan@example.com',
};

//Власні типи для функцій
type Logger = (message: string) => void;

const log: Logger = msg => {
  console.log(msg);
};

//Типи з масивами
type Product = {
  name: string;
  price: number;
};

type Catalog = Product[];

const shop: Catalog = [
  { name: 'Apple', price: 10 },
  { name: 'Orange', price: 15 },
];

//Використання з generics
/*
Власні типи можуть бути узагальненими (generic) — приймати параметри типів:
*/
type ApiResponse<T> = {
  status: 'success' | 'error';
  data: T;
};

const userResponse: ApiResponse<{ name: string }> = {
  status: 'success',
  data: { name: 'Andrii' },
};

//Readonly і Partial
/*
TypeScript має утилітарні типи, які часто застосовують до власних типів:
*/
type UserQ = {
  name: string;
  age: number;
};

// Робимо всі властивості лише для читання
const readonlyUser: Readonly<UserQ> = {
  name: 'Alice',
  age: 22,
};
// readonlyUser.name = 'Bob'; ❌ Помилка

// Робимо всі властивості опціональними
const partialUser: Partial<UserQ> = {};

//Типи як елементи документації
/*
Описуючи типи, ти створюєш самодокументований код.
*/
type Coordinates = { x: number; y: number };

function move(point: Coordinates, dx: number, dy: number): Coordinates {
  return { x: point.x + dx, y: point.y + dy };
}

//Приклад повної системи типів

type Address = {
  city: string;
  street: string;
};

type Company = {
  name: string;
  employees: Employee1[];
};

type Employee1 = {
  id: number;
  name: string;
  position: string;
  address?: Address;
};

const company: Company = {
  name: 'TechCorp',
  employees: [
    {
      id: 1,
      name: 'Ira',
      position: 'Developer',
      address: { city: 'Kyiv', street: 'Main 1' },
    },
  ],
};

console.log('*********************');

/*
Вправа 1.
Створи власний тип User з полями name (string) і age (number).
Оголоси змінну user типу User.
*/

// type User2 = {
//   name: string;
//   age: number;
// };

// const user2: User2 = {
//   name: 'Name-1',
//   age: 22,
// };

/*
Вправа 2.
Додай до типу User опціональне поле email.
*/

type User2 = {
  name: string;
  age: number;
  email?: string;
};

/*
Вправа 3.
Створи тип Product з властивостями name (string) і price (number).
Оголоси масив products типу Product[].
*/

type Product2 = {
  name: string;
  price: number;
};

const products: Product2[] = [
  { name: 'product-1', price: 30 },
  { name: 'product-2', price: 60 },
];

/*
Вправа 4.
Створи тип Address із полями city і zip.
Створи тип Person, який містить name, age і вкладену адресу типу Address.
*/

type Address2 = {
  city: string;
  zip: number;
};

type Person2 = {
  name: string;
  age: number;
  address: Address2;
};

/*
Вправа 5.
Використай ключове слово readonly, щоб зробити властивість id у типі Book лише для читання.
*/

type Book = {
  readonly id: number;
};

/*
Вправа 6.
Створи union тип Status, який може бути: 'pending', 'success', або 'error'.
Оголоси змінну currentStatus цього типу.
*/

type Status2 = 'pending' | 'success' | 'error';

const currentStatus2: Status2 = 'pending';

/*
Вправа 7.
Створи тип, який може бути або рядком, або числом (StringOrNumber).
*/

type StringOrNumber2 = number | string;

/*
Вправа 8.
Створи два типи:
UserBasic — з name і age,
UserContact — з email і phone.
Створи новий тип UserFull, який поєднує обидва через intersection (&).
*/

type UserBasic = {
  name: string;
  age: number;
};

type UserContact = {
  email: string;
  phone: number;
};

type UserFull = UserBasic & UserContact;

/*
Вправа 9.
Створи тип Response, який містить:
status: 'ok' | 'fail'
і message: string.
*/

type Response = {
  status: 'ok' | 'fail';
  message: string;
};

/*
Вправа 10.
Створи тип Logger, який описує функцію log(message: string): void.
*/

type Logger1 = (message: string) => void;
const log1: Logger1 = m => {
  console.log(m);
};

/*
Вправа 11.
Створи інтерфейс Animal із методом sound(): void.
Реалізуй змінну dog, яка відповідає цьому інтерфейсу.
*/

interface Animal {
  sound(): void;
}

const dog: Animal = {
  sound() {
    console.log('Woof');
  },
};

/*
Вправа 12.
Створи інтерфейс Vehicle з полем speed і методом move().
Створи інтерфейс Car, який розширює Vehicle і додає brand.
*/

interface Vehicle {
  speed: number;
  move(): void;
}

interface Car extends Vehicle {
  brand: string;
}

/*
Вправа 13.
Створи тип Shape з полями area(): number та perimeter(): number.
Реалізуй об’єкт rectangle, який відповідає цьому типу.
*/

type Shape = {
  area(): number;
  perimetr(): number;
};

const rectangle: Shape = {
  area() {
    const a = 5,
      b = 10;
    return a * b;
  },
  perimetr() {
    const a = 5,
      b = 10;
    return 2 * (a + b);
  },
};

/*
Вправа 14.
Створи тип ApiResponse<T> з полями data: T і success: boolean.
Створи змінну response для даних типу string.
*/

type ApiResponse2<T> = {
  data: T;
  success: boolean;
};

const response2: ApiResponse2<string> = {
  data: 'data',
  success: true,
};

/*
Вправа 15.
Створи generic тип Pair<T, U>, який містить поля first і second.
Оголоси змінну pair, де T — string, а U — number.
*/

//generic розглянемо пізніше

/*
Вправа 16.
Створи тип UserRole, який може бути: 'admin' | 'user' | 'guest'.
Оголоси масив roles цього типу.
*/

type UserRole = 'admin' | 'user' | 'guest';

const roles: UserRole[] = ['admin', 'user', 'guest'];

/*
Вправа 17.
Створи тип Config, де всі властивості опціональні: host (string), port (number), secure (boolean).
*/

type Config = {
  host?: string;
  port?: number;
  secure?: boolean;
};

/*
Вправа 18.
Створи тип Point2D із координатами x, y.
Створи тип Point3D, який розширює Point2D і додає координату z.
*/

interface Point2D {
  x: number;
  y: number;
}
interface Point3D extends Point2D {
  z: number;
}

/*
Вправа 19.
Створи тип ButtonProps із властивостями label (string) і onClick(): void.
Оголоси змінну button, що реалізує цей тип.
*/

type ButtonProps = {
  label: string;
  onClick(): void;
};

const button: ButtonProps = {
  label: 'Button',
  onClick() {
    console.log(button.label);
  },
};

/*
Вправа 20.
Створи тип Result<T>, який може мати два варіанти:
- { success: true; data: T }
- { success: false; error: string }
Створи змінну resultSuccess і resultError цього типу.
*/

type Result<T> = { success: true; data: T } | { success: false; error: string };

const resultSuccess: Result<{ name: string; price: number }> = {
  success: true,
  data: { name: 'name', price: 20 },
};

const resultError: Result<{ name: string; price: number }> = {
  success: false,
  error: 'error',
};
