"use strict";
const users = [
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
    var _a;
    console.log(`User ID: ${user.id}, Name: ${user.name}, Role: ${user.role}, Age: ${(_a = user.age) !== null && _a !== void 0 ? _a : "N/A"}`);
});
