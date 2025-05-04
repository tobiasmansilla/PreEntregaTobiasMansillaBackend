import { Router } from "express";
import { petModel } from "../daos/mongoDB/models/pet.model.js";
 
const router = Router();

router.get("/", async (req, res) => {
    try {
        const pets = await petModel.find();
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default router;