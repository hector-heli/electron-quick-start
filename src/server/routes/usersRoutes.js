import { Router } from "express";
import { createUser, getUsers, deleteUserById, updateUserById } from "../controllers/userController.js";
import { isAdmin, verifyToken } from "../middlewares/authJwt.js";
import { checkExistingUser } from "../middlewares/verifySignup.js";

const router = Router();

router.post("/", [verifyToken, isAdmin, checkExistingUser], createUser);
router.get('/', getUsers)
router.delete('/:userId', deleteUserById);
router.put('/:userId', updateUserById);


export default router;