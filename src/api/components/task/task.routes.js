import express from 'express';
import taskController from './task.controller';

const router = express.Router();

// task routes

// create task
router.post('/', taskController.create);
// read task
router.get('/:id', taskController.get);
// read all tasks
router.get('/', taskController.list);
// update task
router.put('/:id', taskController.update);
// delete task
router.delete('/:id', taskController.remove);

// export task router
export default router;
