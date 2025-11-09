import db from "../models/index.js";

const pessoaService = {
  createPessoa: async (data) => {
    return await db.Pessoa.create(data);
  },

  findAllPessoas: async () => {
    return await db.Pessoa.findAll({
      attributes: ["id", "nome_completo", "email"],
      order: [["nome_completo", "ASC"]],
    });
  },

  findPessoaById: async (id) => {
    const pessoa = await db.Pessoa.findByPk(id);
    if (!pessoa) {
      throw new Error("Pessoa não encontrada");
    }
    return pessoa;
  },

  updatePessoa: async (id, data) => {
    const [updateCount, updatedPessoas] = await db.Pessoa.update(data, {
      where: { id: id },
      returning: true,
    });

    if (updateCount === 0) {
      throw new Error("Pessoa não encontrada para atualizar");
    }
    return updatedPessoas[0];
  },

  deletePessoa: async (id) => {
    const deleteCount = await db.Pessoa.destroy({
      where: { id: id },
    });
    if (deleteCount === 0) {
      throw new Error("Pessoa não encontrada para deletar");
    }
    return true;
  },

  getCurriculoCompleto: async (id) => {
    const curriculo = await db.Pessoa.findByPk(id, {
      include: [
        {
          model: db.Experiencia,
          as: "experiencias",
          order: [["data_inicio", "DESC"]],
        },
        {
          model: db.Educacao,
          as: "educacao",
          order: [["data_inicio", "DESC"]],
        },
        { model: db.Projeto, as: "projetos", order: [["nome", "ASC"]] },
        {
          model: db.Habilidade,
          as: "habilidades",
          order: [["nome", "ASC"]],
          through: { attributes: [] },
        },
      ],
    });

    if (!curriculo) {
      throw new Error("Pessoa não encontrada");
    }
    return curriculo;
  },
};

export default pessoaService;
