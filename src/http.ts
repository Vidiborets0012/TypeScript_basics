import axios from 'axios';

//Конспект

//Типізація HTTP-запитів

//-Типізація fetch

//Якщо GET-запит повертає об’єкт, створюємо відповідний інтерфейс.

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async (userId: number): Promise<User> => {
  const response = await fetch(`https://api.example.com/users/${userId}`);
  const data = (await response.json()) as User;
  return data;
};

//Якщо відповідь – це масив об’єктів, типізуємо так:

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://api.example.com/users');
  const data = (await response.json()) as User[];
  return data;
};

//-Типізація GETзапитів з Axios

const fetchUser1 = async (userId: number): Promise<User> => {
  const response = await axios.get<User>(
    `https://api.example.com/users/${userId}`
  );
  return response.data;
};

//Якщо запит повертає масив:

// const fetchUsers = async (): Promise<User[]> => {
//   const response = await axios.get<User[]>('https://api.example.com/users');
//   return response.data;
// };

//Лекція

// async function fetchUsersX() {
//   const response = await fetch('http://localhost:8080/api/users');
//   const data = response.json();

//   return data;
// }

// fetchUsersX().then(data => console.log(data));

// interface Order {
//   id: number;
//   price: number;
// }

// async function fetchOrders(): Promise<Order[]> {
//   const { data } = await axios.get<Order[]>('http://localhost:8080/api/orders');

//   return data;
// }

// async function fetchOrder(id: number): Promise<Order> {
//   const { data } = await axios.get<Order>(
//     `http://localhost:8080/api/orders/${id}`
//   );

//   return data;
// }
