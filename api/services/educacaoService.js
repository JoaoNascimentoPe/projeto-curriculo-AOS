import db from "../models/index.js";

const educacaoService = {
  create: async (pessoa_id, data) => {
    const pessoa = await db.Pessoa.findByPk(pessoa_id);
    if (!pessoa) {
      throw new Error("Pessoa não encontrada");
    }

    return await db.Educacao.create({
      ...data,
      pessoa_id: parseInt(pessoa_id),
    });
  },

  deleteEducacao: async (id) => {
    const deleteCount = await db.Educacao.destroy({ where: { id: id } });
    if (deleteCount === 0) {
      throw new Error("Registro de educação não encontrado");
    }
    return true;
  },
};

export default educacaoService;
