import express from 'express';
import teamController from './team.controller';

const router = express.Router();

// team routes

// create team
router.post('/', teamController.create);
// read team
router.get('/:id', teamController.get);
// read all teams
router.get('/', teamController.list);
// update team
router.put('/:id', teamController.update);
// delete team
router.delete('/:id', teamController.remove);

// export team router
export default router;
