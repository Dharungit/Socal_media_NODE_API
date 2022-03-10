import express from "express";

const router = express.Router();


import { signup, signin } from "../controller/user.js";

router.post('/signin', signin);
router.post('/signup', signup);

export default router;
