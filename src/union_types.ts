//Власні та Комбіновані Типи

//- Власні Типи (type Keywords)

/*
Ключове слово type дозволяє створювати псевдоніми типів (Type Aliases) для будь-якого вже існуючого типу (примітиву, об'єкта, об'єднання чи перетину). Це робить код чистішим і легшим для розуміння, оскільки ви даєте складним типам зрозумілі назви.
*/

// Псевдонім для примітивного типу
type UserID = string;

// Псевдонім для об'єктного типу (аналог Interface)
type Point = {
  x: number;
  y: number;
};

// Псевдонім для функції
type Handler = (event: Event) => void;

//Об'єднання Типів (Union Types: |)

/*
Оператор | (вертикальна риска) створює новий тип, який може бути будь-яким із перелічених типів. Це дозволяє змінній чи аргументу мати декілька можливих форм.
*/

// Змінна може зберігати або число, або рядок
type ID = number | string;

let userId: ID = 101; // OK
userId = 'user-101'; // OK
// userId = true;       // ❌ Помилка

// Об'єднання для логіки
type Status = 'success' | 'error' | 'pending';

function logStatus(status: Status): void {
  // ...
}

//Літеральні Типи (Literal Types)

/*
Це типи, які обмежують можливі значення змінної конкретними літералами (тобто точними значеннями). Вони часто використовуються в поєднанні з Union Types.
*/

// Тип, який може приймати лише конкретні рядки
type Direction = 'up' | 'down' | 'left' | 'right';

let move: Direction = 'up'; // OK
// move = "forward";       // ❌ Помилка: "forward" не входить до типу Direction

// Літеральні числа
type ZeroOrOne = 0 | 1;

//Тип Перетину (Intersection Types: &)

/*
Оператор & (амперсанд) створює новий тип, який повинен мати всі властивості всіх об'єднаних типів. Це схоже на наслідування, але використовується для комбінування типів.
*/

interface HasID {
  id: number;
}

interface HasName {
  name: string;
}

// Потрібен об'єкт, який має І id, І name
type IdentifiedUser = HasID & HasName;

const user: IdentifiedUser = {
  id: 42,
  name: 'Дмитро',
  // ❌ Якщо пропустити id або name, буде помилка
};

//Приклади Типових Задач та Рішення

/*
Задача 1: Використання Union Type для гнучкого ID
Мета: Написати функцію, яка приймає ID, що може бути числом або рядком, та обробляє його відповідно.

Хід рішення:
Визначити Union Type для ID.

Використати оператор typeof для перевірки типу всередині функції (це називається звуження типів).
*/

type FlexibleID = number | string;

function processID(id: FlexibleID): void {
  // Звуження типу: TS тепер знає, що 'id' є string
  if (typeof id === 'string') {
    console.log(`Обробка рядкового ID: ${id.toUpperCase()}`);
  }
  // Звуження типу: TS тепер знає, що 'id' є number
  else if (typeof id === 'number') {
    console.log(`Обробка числового ID: ${id.toFixed(2)}`);
  }
}

processID(100); // Обробка числового ID: 100.00
processID('doc-45a'); // Обробка рядкового ID: DOC-45A

//Задача 2: Комбінування об'єктів за допомогою Intersection Type

/*
Мета: Створити тип для співробітника, який має базові дані (User) і права доступу (Permissions).

Хід рішення:
Створити два базові інтерфейси.

Об'єднати їх за допомогою &.
*/

interface UserInfo {
  name: string;
  email: string;
}

interface AdminPermissions {
  isAdmin: boolean;
  role: 'super' | 'standard';
}

// Об'єднання: має бути і UserInfo, І AdminPermissions
type AdminUser = UserInfo & AdminPermissions;

const currentAdmin: AdminUser = {
  name: 'Олег',
  email: 'oleg@corp.com',
  isAdmin: true,
  role: 'super', // Повинно відповідати літеральному типу
};

// const failedAdmin: AdminUser = { name: "Іван", role: "super" };
// ❌ Помилка: Відсутні властивості 'email' та 'isAdmin'

console.log('*************************');
//Псевдоніми Типів (type) та Об'єднання (|)

/*
1. Створіть псевдонім типу Count для типу number.
*/

type Count = number;

/*
2. Створіть псевдонім типу Size для об'єкта { width: number, height: number }.
*/

type Size = { width: number; height: number };

/*
3. Оголосіть змінну totalClicks та типізуйте її як Count.
*/

let totalClicks: Count;

/*
4. Створіть Union Type NumericInput для number | string.
*/

type NumericInput = number | string;

/*
5. Оголосіть функцію handleInput, яка приймає аргумент input типу NumericInput і нічого не повертає.
*/

function handleInput(input: NumericInput): void {}

/*
6. Створіть Union Type NullableString для string | null.
*/

type NullableString = string | null;

/*
7. Оголосіть змінну comment та типізуйте її як NullableString.
*/

let comment: NullableString;

/*
8. Створіть тип Key, який може бути string або symbol.
*/

type Key = string | symbol;

//Літеральні Типи (Literal Types)

/*
9. Створіть Literal Type Theme для значень "light", "dark", "system".
*/

type Theme = 'light' | 'dark' | 'system';

/*
10. Оголосіть константу currentTheme та типізуйте її як Theme.
*/

let currentTheme: Theme = 'light';

/*
11. Створіть Literal Type HttpMethod для значень "GET", "POST", "PUT", "DELETE".
*/

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

/*
12. Створіть Union Type MaybeBoolean для значень true | false | undefined.
*/

type MaybeBoolean = true | false | undefined;

/*
13. Оголосіть функцію fetchData, яка приймає method типу HttpMethod і повертає void.
*/

function fetchData(method: HttpMethod): void {}

/*
14. Створіть Literal Type Price для числа 100 або 200.
*/
type Price = 100 | 200;

//Тип Перетину (Intersection Types)

/*
15. Створіть інтерфейс Logger з методом log(message: string): void.
*/

interface Logger {
  log(message: string): void;
}

/*
16. Створіть інтерфейс ErrorHandler з методом error(message: string): void.
*/

interface ErrorHandler {
  error(message: string): void;
}

/*
17. Створіть тип перетину SystemTool з Logger & ErrorHandler.
*/

type SystemTool = Logger & ErrorHandler;

/*
18. Оголосіть константу appLogger типу SystemTool та реалізуйте обидва його методи.
*/

const appLogger: SystemTool = {
  log(message: string): void {
    console.log(`LOG: ${message}`);
  },
  error(message: string): void {
    console.error(`ERROR: ${message}`);
  },
};

appLogger.log('Система ініціалізована');
appLogger.error('Помилка підключення до бази даних');

/*
19. Створіть інтерфейс Person з властивостями firstName: string та lastName: string. Створіть інтерфейс Ageable з властивістю age: number.
*/

interface Person {
  firstName: string;
  lastName: string;
}

interface Ageable {
  age: number;
}

/*
20. Створіть тип перетину UserWithAge з Person & Ageable та оголосіть об'єкт цього типу.
*/

type UserWithAge = Person & Ageable;

const userProfile: UserWithAge = {
  firstName: 'firstName',
  lastName: 'lastName',
  age: 35,
};
