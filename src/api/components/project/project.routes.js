import express from 'express';
import projectController from './project.controller';

const router = express.Router();

// project routes

// create project
router.post('/', projectController.create);
// read project
router.get('/:id', projectController.get);
// read all projects
router.get('/', projectController.list);
// update project
router.put('/:id', projectController.update);
// delete project
router.delete('/:id', projectController.remove);

// export project router
export default router;
