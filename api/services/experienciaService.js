import db from "../models/index.js";

const experienciaService = {
  addExperiencia: async (pessoa_id, data) => {
    const pessoa = await db.Pessoa.findByPk(pessoa_id);
    if (!pessoa) {
      throw new Error("Pessoa não encontrada");
    }

    return await db.Experiencia.create({
      ...data,
      pessoa_id: parseInt(pessoa_id),
    });
  },

  deleteExperiencia: async (id) => {
    const deleteCount = await db.Experiencia.destroy({ where: { id: id } });
    if (deleteCount === 0) {
      throw new Error("Experiência não encontrada");
    }
    return true;
  },
};

export default experienciaService;
