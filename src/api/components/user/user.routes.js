import express from 'express';
import userController from './user.controller';

const router = express.Router();

// user routes

// create user
router.post('/', userController.create);
// read user
router.get('/:id', userController.get);
// read all users
router.get('/', userController.list);
// update user
router.put('/:id', userController.update);
// delete user
router.delete('/:id', userController.remove);

// export user router
export default router;
