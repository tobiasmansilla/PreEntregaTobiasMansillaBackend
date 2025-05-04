import * as userService from "../services/user.service.js";
import * as petService from "../services/pet.service.js";

export const createData = async (req, res, next) => {
    try {
        const { cant } = req.query;
        const [userResponse, petResponse] = await Promise.all([
            userService.createUserMock(cant),
            petService.createPetMock(cant)
        ]);
        res.status(200).json({
            users: userResponse,
            pets: petResponse
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
