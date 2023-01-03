import express from "express";

import { auhtenticateJWT } from "../jwt/auth.jwt.js";

import {
  createUserController,
  getUserController,
  deleteUserController,
  getUsersController,
  updateUserController,
  userLogin,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", auhtenticateJWT, getUsersController);

router.put("/:id", auhtenticateJWT, updateUserController);

router.post("/", auhtenticateJWT, createUserController);

router.delete("/:id", auhtenticateJWT, deleteUserController);

router.get("/:id", auhtenticateJWT, getUserController);

router.post("/login", userLogin);

export default router;
