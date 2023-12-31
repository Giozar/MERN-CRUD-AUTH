import { Router } from 'express';
import { authRequire } from '../middlewares/validateToken.js';
import { getTasks, getTask, creatTask, updateTask, deleteTask } from '../controllers/tasks.controller.js';
import { validateSchema } from '../middlewares/validator.middlewares.js';
import { createTaskSchema } from '../schemas/task.schemas.js';

const router = Router();

router.get('/tasks', authRequire, getTasks);
router.get('/tasks/:id', authRequire, getTask);
router.post('/tasks', authRequire, validateSchema(createTaskSchema), creatTask);
router.delete('/tasks/:id', authRequire, deleteTask);
router.put('/tasks/:id', authRequire, updateTask);

export default router;