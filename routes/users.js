import express from "express";
import { getPontos, addPontos, removePontos } from "../controllers/user.js";

const router = express.Router();

router.get("/", getPontos);
router.post("/addPontos", addPontos);
router.post("/removePontos", removePontos);

export default router;