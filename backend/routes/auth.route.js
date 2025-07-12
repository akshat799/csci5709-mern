import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller.js';
import { validateRegister, validateLogin } from '../validators/authValidator.js';

const authRoute = express.Router();

authRoute.post('/register', validateRegister, registerUser);
authRoute.post('/login', validateLogin, loginUser);

export default authRoute;