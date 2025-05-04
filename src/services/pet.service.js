import { petModel } from "../daos/mongoDB/models/pet.model.js";
import { generatePet } from "../utils/faker.utils.js";

export const createPetMock = async (cant = 50) => {
    try {
        const petArray = [];        
        for (let i = 1 ; i <= cant; i++) {
            const pets = generatePet();
            console.log(pets);
            petArray.push(pets);
        }
        return await petModel.create(petArray);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const getPets = async () => {
    try {
        return await petModel.find({});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}