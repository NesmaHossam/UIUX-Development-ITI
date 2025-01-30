// Given the data, define the interface "User" and use it accordingly.
interface User {
  id: number | string;
  name: string;
  age?: number;
  role: "SUPER_ADMIN" | "USER" | "ADMIN";
}

const users: User[] = [
  {
    id: 1,
    name: "Ahmed",
    role: "SUPER_ADMIN",
  },
  {
    id: "2",
    name: "Mohammed",
    age: 32,
    role: "USER",
  },
  {
    id: 3,
    name: "Ali",
    age: 36,
    role: "ADMIN",
  },
];

users.forEach((user) => {
  console.log(
    `User ID: ${user.id}, Name: ${user.name}, Role: ${user.role}, Age: ${
      user.age ?? "N/A"
    }`
  );
});
