import * as userService from "../services/user.service.js";

export const createUser = async (req, res, next) => {
    try {
        const { cant } = req.query;
        const response = await userService.createUserMock(cant);
        res.status(200).json(response);        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getUsers = async (req, res, next) => {
    try {
        const response = await userService.getUsers();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}