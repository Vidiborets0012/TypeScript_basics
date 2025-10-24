//Конспект

//Типізація промісів

const getData = (): Promise<string> => {
  return new Promise(resolve => {
    setTimeout(() => resolve('Hello, TypeScript!'), 1000);
  });
};

getData().then(result => console.log(result)); // "Hello, TypeScript!"

//приклад типізації проміса, який виконається з об’єктом:

interface User {
  id: number;
  name: string;
}

const getUser = (): Promise<User> => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: 'Alice' }), 1000);
  });
};

getUser().then(user => console.log(user.name)); // "Alice"

// типізація промісу із масивом:

const getUsers = (): Promise<User[]> => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve([
          { id: 1, name: 'Alice' },
          { id: 2, name: 'Bob' },
        ]),
      1000
    );
  });
};

getUsers().then(users => console.log(users[0].name)); // "Alice"
getUsers().then(users => console.log(users[1].name)); // "Bob"

//Лекція

interface UserX {
  name: string;
  age: number;
}

const usersX: UserX[] = [
  { name: 'Name-1', age: 22 },
  { name: 'Name-2', age: 33 },
];

function getUsersX(): Promise<UserX[]> {
  return new Promise(resolve => {
    setTimeout(() => resolve(usersX), 1000);
  });
}

getUsersX().then(data => console.log(data.map(user => user.name))); //['Name-1', 'Name-2']
