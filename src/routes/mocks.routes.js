import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import * as petController from "../controllers/pet.controller.js";
import * as generateData from "../controllers/generateData.controller.js";

const router = Router();

router.post("/mockingusers", userController.createUser);
router.get("/mockingusers", userController.getUsers);

router.post("/mockingpets", petController.createPet);
router.get("/mockingpets", petController.getPets);

router.post("/generateData", generateData.createData);
  

export default router;