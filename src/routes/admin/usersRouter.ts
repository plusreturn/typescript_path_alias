import express from 'express';
import { getUsers } from '../../controllers/usersController';

export const usersRouter = express.Router();

usersRouter.get('/', getUsers);
