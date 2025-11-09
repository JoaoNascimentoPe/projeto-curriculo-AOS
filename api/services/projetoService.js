import db from "../models/index.js";

const projetoService = {
  addProjeto: async (pessoa_id, data) => {
    const pessoa = await db.Pessoa.findByPk(pessoa_id);
    if (!pessoa) {
      throw new Error("Pessoa não encontrada");
    }

    return await db.Projeto.create({
      ...data,
      pessoa_id: parseInt(pessoa_id),
    });
  },

  deleteProjeto: async (id) => {
    const deleteCount = await db.Projeto.destroy({ where: { id: id } });
    if (deleteCount === 0) {
      throw new Error("Projeto não encontrado");
    }
    return true;
  },
};

export default projetoService;
