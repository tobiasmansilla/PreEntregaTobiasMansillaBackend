import * as petService from "../services/pet.service.js";

export const createPet = async (req, res, next) => {
    
    try {
        const { cant } = req.query;
        const response = await petService.createPetMock(cant);
        console.log(response);
        res.status(200).json(response);        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getPets = async (req, res, next) => {
    try {
        const response = await petService.getPets();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}