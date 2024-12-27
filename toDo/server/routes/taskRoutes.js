import express from 'express';
import { createTask, getAllTasks, completeTask, deleteTask } from '../controllers/taskController.js';

const router = express.Router();

router.post('/', createTask);
router.get('/', getAllTasks);
router.put('/:id/complete', completeTask);
router.delete('/:id', deleteTask);

export default router;
