import express from 'express';
import { createUserController, deleteUserController, getUsersController, updateUserController } from '../controllers/user.controller.js'; 

const router = express.Router();

router.get('/',getUsersController);

router.put('/:id',updateUserController);

router.post('/',createUserController);

router.delete('/:id',deleteUserController);

// router.delete('/:id',deleteUserController);




export default router;