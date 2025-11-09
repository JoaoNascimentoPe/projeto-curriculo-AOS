import { Router } from "express";
import experienciaController from "../controller/experienciaController.js";

const router = Router();

router.delete("/:id", experienciaController.deleteExperiencia);

export default router;
