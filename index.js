import { faker } from '@faker-js/faker';
import mysql from 'mysql2/promise';

// Create the connection to database
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'my_password',  
  database: 'delta_app',
});

try {
  const [rows] = await connection.query("SHOW TABLES");
  console.log("Tables:", rows);
} catch (error) {
  console.error("Query Error:", error);
}

// Function to generate fake user
const createRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
};


await connection.end();
