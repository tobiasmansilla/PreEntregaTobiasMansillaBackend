import { userModel } from "../daos/mongoDB/models/user.models.js";
import { generateUser } from "../utils/faker.utils.js";

export const createUserMock = async (cant = 50) => {
    try {
        const userArray = [];
        for (let i = 1 ; i <= cant; i++) {
            const user = generateUser();
            console.log(user);
            userArray.push(user);
        }
        return await userModel.create(userArray);
    } catch (error) {
        throw new Error(error);    
    }
}
export const getUsers = async () => {
    try {
        return await userModel.find({});
    } catch (error) {
        throw new Error(error);
    }
}