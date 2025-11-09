import habilidadeService from "../services/habilidadeService.js";

const habilidadeController = {
  create: async (req, res) => {
    try {
      const { nome } = req.body;
      if (!nome)
        return res
          .status(400)
          .json({ error: "Nome da habilidade é obrigatório" });

      const [habilidade, created] =
        await habilidadeService.findOrCreateHabilidade(nome);
      res.status(created ? 201 : 200).json(habilidade);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Erro ao criar habilidade" });
    }
  },

  findAll: async (req, res) => {
    try {
      const habilidades = await habilidadeService.findAllHabilidades();
      res.json(habilidades);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Erro ao buscar habilidades" });
    }
  },

  associateToPessoa: async (req, res) => {
    try {
      const { pessoa_id } = req.params;
      const { habilidade_id } = req.body;
      await habilidadeService.associateHabilidade(pessoa_id, habilidade_id);
      res.status(201).json({ message: "Habilidade associada" });
    } catch (err) {
      console.error(err.message);
      if (err.message.includes("não encontrada")) {
        return res.status(404).json({ error: err.message });
      }
      res
        .status(500)
        .json({ error: "Erro ao associar habilidade", details: err.message });
    }
  },

  disassociateFromPessoa: async (req, res) => {
    try {
      const { pessoa_id } = req.params;
      const { habilidade_id } = req.params;
      await habilidadeService.disassociateHabilidade(pessoa_id, habilidade_id);
      res.status(201).json({ message: "Habilidade desassociada!" });
    } catch (err) {
      console.error(err.message);
      if (err.message.includes("não encontrada")) {
        return res.status(404).json({ error: err.message });
      }
      res
        .status(500)
        .json({ error: "Erro ao associar habilidade", details: err.message });
    }
  },
};

export default habilidadeController;
