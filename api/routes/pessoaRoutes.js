import { Router } from "express";
import pessoaController from "../controller/pessoaController.js";
import experienciaController from "../controller/experienciaController.js";
import educacaoController from "../controller/educacaoController.js";
import projetoController from "../controller/projetoController.js";
import habilidadeController from "../controller/habilidadeController.js";

const router = Router();

// Rotas CRUD para Pessoa
router.get("/", pessoaController.findAll);
router.post("/", pessoaController.create);
router.get("/:id", pessoaController.findOne);
router.put("/:id", pessoaController.update);
router.delete("/:id", pessoaController.deletePessoa);

// Rota principal do currículo
router.get("/:id/curriculo-completo", pessoaController.getCurriculoCompleto);

// Rotas aninhadas (para criar e consultar entidades relacionadas a uma pessoa)
router.post("/:pessoa_id/experiencias", experienciaController.create);
router.post("/:pessoa_id/educacao", educacaoController.create);
router.post("/:pessoa_id/projetos", projetoController.create);

router.post("/:pessoa_id/habilidades", habilidadeController.associateToPessoa);
router.delete(
  "/:pessoa_id/habilidades/:habilidade_id",
  habilidadeController.disassociateFromPessoa
);

export default router;
