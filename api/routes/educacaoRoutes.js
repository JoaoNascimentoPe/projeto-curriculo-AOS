import { Router } from "express";
import educacaoController from "../controller/educacaoController.js";

const router = Router();

router.delete("/:id", educacaoController.deleteEducacao);

export default router;
