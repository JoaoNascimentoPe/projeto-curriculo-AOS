import pessoaService from "../services/pessoaService.js";

const pessoaController = {
  create: async (req, res) => {
    try {
      const newPessoa = await pessoaService.createPessoa(req.body);
      res.status(201).json(newPessoa);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Erro interno no servidor", details: err.message });
    }
  },

  findAll: async (req, res) => {
    try {
      const allPessoas = await pessoaService.findAllPessoas();
      res.json(allPessoas);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Erro interno no servidor", details: err.message });
    }
  },

  findOne: async (req, res) => {
    try {
      const pessoa = await pessoaService.findPessoaById(req.params.id);
      res.json(pessoa);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Erro interno no servidor", details: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const updatedPessoa = await pessoaService.updatePessoa(
        req.params.id,
        req.body
      );
      res.json(updatedPessoa);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Erro interno no servidor", details: err.message });
    }
  },

  deletePessoa: async (req, res) => {
    try {
      await pessoaService.deletePessoa(req.params.id);
      res.json({ message: "Pessoa deletada com sucesso" });
    } catch (err) {
      res
        .status(500)
        .json({ error: "Erro interno no servidor", details: err.message });
    }
  },

  getCurriculoCompleto: async (req, res) => {
    try {
      const curriculo = await pessoaService.getCurriculoCompleto(req.params.id);
      res.json(curriculo);
    } catch (err) {
      res
        .status(500)
        .json({ error: "Erro interno no servidor", details: err.message });
    }
  },
};

export default pessoaController;
