import express from 'express';
import { createUserController,getUserController, deleteUserController, getUsersController, updateUserController } from '../controllers/user.controller.js'; 

const router = express.Router();

router.get('/',getUsersController);

router.put('/:id',updateUserController);

router.post('/',createUserController);

router.delete('/:id',deleteUserController);

router.get('/:id',getUserController);




export default router;