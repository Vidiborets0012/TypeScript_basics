// Перелічення (enum)

/*
Перелічення — це спосіб визначення набору іменованих констант. Вони використовуються для створення колекції пов'язаних значень, які є більш виразними та безпечними, ніж використання звичайних рядків чи чисел.
*/

//Числові Перелічення (Numeric Enums)
//Це перелічення за замовчуванням. TypeScript автоматично присвоює числа, починаючи з 0.

// enum Direction {
//   Up, // 0 (за замовчуванням)
//   Down, // 1
//   Left, // 2
//   Right, // 3
// }

// let userDirection: Direction = Direction.Up; // 0

/*
Ви можете змінити початкове значення або явно присвоїти значення будь-якому елементу. Наступні елементи будуть інкрементуватися від нього.
*/

enum StatusCodes {
  OK = 200,
  NotFound = 404, // 404
  ServerError, // 405 (інкрементується від попереднього)
}

//Рядкові Перелічення (String Enums)

/*
У рядкових переліченнях, кожен елемент повинен бути явно ініціалізований рядковим літералом. Це робить код більш читабельним під час налагодження, оскільки значення, що зберігається, є зрозумілою назвою, а не числом.
*/

enum AppTheme {
  Light = 'LIGHT',
  Dark = 'DARK',
  System = 'SYSTEM',
}

let theme: AppTheme = AppTheme.Dark; // "DARK"

//Гетерогенні Перелічення (Heterogeneous Enums)
/*
Перелічення, що містять як числа, так і рядки. Хоча це дозволено, зазвичай не рекомендується, оскільки зменшує читабельність.
*/

enum Mixed {
  Yes = 1,
  No = 'NO',
}

//const enum (Перелічення Часу Компіляції)

/*
Використання ключового слова const перед enum створює перелічення, яке повністю видаляється під час компіляції (transpilation). Замість нього, TypeScript вставляє безпосередньо значення (інлайн) у код, де воно використовується.

Це забезпечує кращу продуктивність (менший розмір бандлу), але ви не можете звертатися до значень перелічення під час виконання (наприклад, через цикли).
*/

const enum LogLevel {
  Debug,
  Info,
  Error,
}

// У скомпільованому JS це буде 1 (число)
let level = LogLevel.Info;

//Приклади Типових Задач та Рішення

/*
Задача 1: Використання Enum для обмеження значень функції
Мета: Написати функцію, яка приймає лише дозволені дії користувача.

Хід рішення:
Визначити рядкове перелічення для всіх можливих дій.

Типізувати аргумент функції цим переліченням.
*/

// Крок 1: Визначення рядкового перелічення
enum UserAction {
  Create = 'CREATE_ITEM',
  Read = 'READ_ITEM',
  Update = 'UPDATE_ITEM',
  Delete = 'DELETE_ITEM',
}

// Крок 2: Типізація аргументу
function performAction(action: UserAction, itemId: number): void {
  if (action === UserAction.Delete) {
    console.log(`Видалення елемента ${itemId}`);
  } else if (action === UserAction.Create) {
    console.log(`Створення нового елемента.`);
  }
}

// Виклик:
performAction(UserAction.Delete, 5); // OK
// performAction("INVALID_ACTION", 1); // ❌ Помилка: рядок не належить до типу UserAction

/*
Задача 2: Використання числового Enum для перетворення
Мета: Зберігати набір конфігураційних налаштувань.

Хід рішення:
Визначити числове перелічення зі значеннями.

Використовувати пряме звернення для отримання значення.
*/

enum UserRole {
  Guest = 1,
  User = 5,
  Moderator = 10,
  Admin = 100,
}

const currentLevel: UserRole = UserRole.Moderator; // 10

function checkAccess(level: number): boolean {
  return level >= UserRole.User; // Перевірка, чи рівень >= 5
}

console.log(checkAccess(currentLevel)); // true

// Перевірка зворотного перетворення (працює тільки для Numeric Enums)
let roleName: string = UserRole[100]; // "Admin"

//Числові Перелічення (Numeric Enums)

/*
1. Створіть числове перелічення Days, що починається з Monday (0).
*/

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

/*
2. Оголосіть змінну today типу Days і присвойте їй значення Days.Wednesday.
*/

let today: Days = Days.Wednesday;

/*
3. Створіть числове перелічення Priorities, яке починається з Low = 1.
*/

enum Priorities {
  Low = 1,
  High,
}

/*
4. Створіть змінну highPriority і присвойте їй значення Priorities.High (де High — наступне значення після Low).
*/

let highPriority: Priorities = Priorities.High;
console.log('highPriority:', highPriority); //2

/*
5. Яке числове значення матиме Priorities.High?
*/
//2

/*
6. Створіть функцію isWeekend, яка приймає день тижня (Days) і повертає boolean (вважаємо, що Saturday і Sunday є вихідними).
*/

function isWeekend(day: Days): boolean {
  return day === Days.Saturday || day === Days.Sunday;
}

//Рядкові Перелічення (String Enums)

/*
7. Створіть рядкове перелічення Environment зі значеннями "DEV", "TEST", "PROD".
*/

enum Environment {
  Dev = 'DEV',
  Test = 'TEST',
  Prod = 'PROD',
}

/*
8. Оголосіть константу currentEnv і типізуйте її як Environment. Присвойте їй значення "PROD".
*/

const currentEnv: Environment = Environment.Prod;
console.log(currentEnv); //PROD

/*
9. Створіть функцію logRequest, яка приймає status: "SUCCESS" | "ERROR" (використовуйте літеральні типи).
*/

function logRequest(status: 'SUCCESS' | 'ERROR') {
  console.log(status);
}

/*
10. Створіть рядкове перелічення ResponseStatus для "SUCCESS" та "ERROR" та перепишіть функцію logRequest, використовуючи цей enum.
*/

enum ResponseStatus {
  Success = 'SUCCESS',
  Error = 'ERROR',
}

function logRequest1(status: ResponseStatus): void {
  console.log(status);
}

logRequest('SUCCESS');

/*
11. Яке значення (тип) поверне ResponseStatus.SUCCESS?
*/
//  string

//Комбіновані та const Enums

/*
12. Створіть перелічення AccessLevel з числовими значеннями Read = 1, Write = 2, Admin = 4. (Бітові прапори).
*/

enum AccessLevel {
  Read = 1,
  Write = 2,
  Admin = 4,
}

/*
13. Створіть числове перелічення Direction і присвойте йому довільні числові значення: Up = 10, Down = 20, Left = 30, Right = 40.
*/

enum Direction {
  Up = 10,
  Down = 20,
  Left = 30,
  Right = 40,
}

/*
14. Створіть const enum Color зі значеннями "RED", "GREEN", "BLUE".
*/

const enum Color {
  RED = 'RED',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
}

/*
15. Оголосіть функцію getColorHex, яка приймає Color і повертає string.
*/

function getColorHex(color: Color): string {
  switch (color) {
    case Color.RED:
      return '#FF0000';
    case Color.GREEN:
      return '#00FF00';
    case Color.BLUE:
      return '#0000FF';
    default:
      // Це робить функцію безпечною, але TypeScript гарантує, що сюди не потрапимо.
      // throw new Error(`Невідомий колір: ${color}`);
      return '#000000'; // Повертаємо чорний, як дефолт
  }
}

/*
16. Створіть функцію printDay, яка приймає число 0 або 1 і повертає відповідну назву дня з числового перелічення Days (використовуйте зворотне відображення).
*/

function printDay(dayNumber: number): string {
  return Days[dayNumber];
}

console.log(printDay(0)); // Виводить: Monday
console.log(printDay(1)); // Виводить: Tuesday

/*
17. Яку помилку видасть TS, якщо ви спробуєте звернутися до const enum як Color[0]?
*/
//const enum НЕ генерують зворотного відображення

/*
18. Створіть функцію handlePriority, яка приймає Priorities (з Завдання 3) і використовує конструкцію switch для виведення повідомлення для Low та High пріоритетів.
*/

function handlePriority(prioritie: Priorities): void {
  switch (prioritie) {
    case Priorities.Low:
      console.log('Priorities is Low');
      break;
    case Priorities.High:
      console.log('Priorities is High');
      break;

    default:
      console.log('Priorities not found');
  }
}

/*
19. Створіть псевдонім типу ActionType для UserAction.Create або UserAction.Delete (використовуйте enum UserAction зі зразка у теорії).
*/

type ActionType = UserAction.Create | UserAction.Delete;

/*
enum UserAction {
  Create = 'CREATE_ITEM',
  Read = 'READ_ITEM',
  Update = 'UPDATE_ITEM',
  Delete = 'DELETE_ITEM',
}
*/

/*
20. Оголосіть змінну allowedAction типу ActionType і присвойте їй значення.
*/

const allowedAction: ActionType = UserAction.Create;

console.log('************************');
console.log('************************');
console.log('****** ЛЕКЦІЯ *****');

//ЛЕКЦІЯ

interface User {
  name: string;
  age: number;
  // role: string; -> union type
  role: 'admin' | 'user' | 'super';
}

const user1: User = {
  name: 'Petya',
  age: 33,
  role: 'admin',
  // role: 'user',
  // role: 'super',
};

if (user1.role === 'admin') {
  console.log(`${user1.name} is ${user1.role}`);
}

enum Role {
  Admin,
  User,
  Super,
}

enum Role1 {
  Admin = 'Admin',
  User = 'User',
  Super = 'Super',
}

const role: Role = Role.Admin;
console.log('Role.Admin:', Role.Admin); //0;
console.log('role:', role); //0

const role1: Role1 = Role1.Admin;
console.log('Role1.Admin:', Role1.Admin); //Admin
console.log('role1:', role1); //Admin

if (role === Role.Admin) {
  console.log('This is admin');
}

// **********************
const status: 200 | 201 | 400 = 200;

if (status === 200) {
  console.log('Request is success'); //Request is success
} else if (status === 201) {
  console.log('Request created resource');
} else {
  console.log('Resource is not found');
}

// enum Status1 {
//   Success = 200,
//   Created = 201,
//   BadRequest = 400,
//   NotFound = 404,
// }

// let status1: Status1 = Status1.NotFound;
// const status2: Status1 = 404;
// console.log(Status1.NotFound);
// console.log(status2);

// if (status1 === Status1.Success) {
//   console.log('Request is success'); //Request is success
// } else if (status1 === Status1.Created) {
//   console.log('Request created resource');
// } else if (status1 === Status1.BadRequest) {
//   console.log('Bad Request');
// } else if (status1 === Status1.NotFound) {
//   console.log('Resource is not found');
// }
