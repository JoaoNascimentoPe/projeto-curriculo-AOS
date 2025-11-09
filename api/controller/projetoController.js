import projetoService from "../services/projetoService.js";

const projetoController = {
  create: async (req, res) => {
    try {
      const { pessoa_id } = req.params;
      const newProjeto = await projetoService.addProjeto(pessoa_id, req.body);
      res.status(201).json(newProjeto);
    } catch (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ error: "Erro ao adicionar projeto", details: err.message });
    }
  },

  deleteProjeto: async (req, res) => {
    try {
      await projetoService.deleteProjeto(req.params.id);
      res.json({ message: "Projeto deletado" });
    } catch (err) {
      console.error(err.message);
      if (err.message.includes("não encontrado")) {
        return res.status(404).json({ error: err.message });
      }
      res
        .status(500)
        .json({ error: "Erro ao deletar projeto", details: err.message });
    }
  },
};

export default projetoController;
