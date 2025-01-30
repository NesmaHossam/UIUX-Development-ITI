// Create a new type "PublicUser" that execlude the propery "password" from "SystemUser"

interface SystemUser {
    id: number;
    name: string;
    email: string;
    password: string;
  }
  
  type PublicUser = Omit<SystemUser, "password">;
  
  const publicUser: PublicUser = {
    id: 1,
    name: "John",
    email: "john@example.com",
  };

  console.log(publicUser);