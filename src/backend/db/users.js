import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    userAddresses: [
      {
        id: 3,
        firstName: "Alex",
        lastName: "Johnson",
        addressLine1: "789 Oak St",
        addressLine2: "Suite 10",
        city: "Mumbai",
        state: "Maharashtra",
        zipCode: "400001",
        country: "India",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Manan",
    lastName: "Khurana",
    email: "manankhurana@gmail.com",
    password: "manankhurana",
    userAddresses: [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        addressLine1: "123 Main St",
        addressLine2: "Apt 4B",
        city: "Kolkata",
        state: "West Bengal",
        zipCode: "700001",
        country: "India",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        addressLine1: "456 Elm St",
        addressLine2: "",
        city: "Surat",
        state: "Gujarat",
        zipCode: "395001",
        country: "India",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Admin",
    lastName: "",
    email: "admin@gmail.com",
    password: "admin",
    userAddresses: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
