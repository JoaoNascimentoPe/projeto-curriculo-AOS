import educacaoService from "../services/educacaoService.js";

const educacaoController = {
  create: async (req, res) => {
    try {
      const { pessoa_id } = req.params;
      const newEducacao = await educacaoService.create(pessoa_id, req.body);
      res.status(201).json(newEducacao);
    } catch (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ error: "Erro ao adicionar educação", details: err.message });
    }
  },

  deleteEducacao: async (req, res) => {
    try {
      await educacaoService.deleteEducacao(req.params.id);
      res.json({ message: "Registro de educação deletado" });
    } catch (err) {
      console.error(err.message);
      if (err.message.includes("não encontrado")) {
        return res.status(404).json({ error: err.message });
      }
      res
        .status(500)
        .json({ error: "Erro ao deletar educação", details: err.message });
    }
  },
};

export default educacaoController;
