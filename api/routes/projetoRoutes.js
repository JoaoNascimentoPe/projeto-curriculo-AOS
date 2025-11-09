import { Router } from "express";
import projetoController from "../controller/projetoController.js";

const router = Router();

router.delete("/:id", projetoController.deleteProjeto);

export default router;
