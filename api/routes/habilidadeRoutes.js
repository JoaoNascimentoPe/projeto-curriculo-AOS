import { Router } from "express";
import habilidadeController from "../controller/habilidadeController.js";

const router = Router();

// Rotas para gerenciar a entidade "Habilidade" global
router.get("/", habilidadeController.findAll);
router.post("/", habilidadeController.create);

export default router;
