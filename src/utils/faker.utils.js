import { createHash } from "./hash.js";
import { faker } from "@faker-js/faker";
faker.locale = "es";


const password = "coder123";
const hashPassword = await createHash(password);

export const generateUser = () => {
    return {    
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        age: faker.date.birthdate({ mode: 'age', min: 18, max: 65 }),
        password: faker.helpers.arrayElement([hashPassword]),
        role: faker.helpers.arrayElement(["user", "admin"]),
    };
};

export const generatePet = () => {
    return {
        name: faker.animal.dog(),
        age: faker.date.birthdate({ mode: 'age', min: 1, max: 30 }),
        image: faker.image.avatar(),
    };
};
