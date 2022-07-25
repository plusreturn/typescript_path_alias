import express from 'express';
import {
  createTask,
  deleteTask,
  getSingleTask,
  getTasks,
  updateTask,
} from '../controllers/tasksController';

export const tasksRouter = express.Router();

tasksRouter.get('/', getTasks);
tasksRouter.get('/:taskId', getSingleTask);
tasksRouter.get('/', createTask);
tasksRouter.get('/:taskId', updateTask);
tasksRouter.get('/:taskId', deleteTask);
