import { Router } from "express";
import { userModel } from "../daos/mongoDB/models/user.models.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { createHash } from "../utils/hash.js";

const router = Router();

router.post("/register", async (req, res) => {
    const { first_name, last_name, email, age, role, password } = req.body;
    if (!first_name || !last_name || !email || !age || !password) {
        return res.status(400).json({ error: "Todos los campos <first_name, last_name, email, age, password> son obligatorios" });
    }
    try {
        const hashPassword = await createHash(password);
        const user = await userModel.create({ first_name, last_name, email, age, password: hashPassword, role });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error al crear usuario", message: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get("/:id", authenticate, async (req, res) => {
    const {id} = req.params;
    try {
        const user = await userModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


export default router;