import db from "../models/index.js";

const habilidadesService = {
  findOrCreateHabilidade: async (nome) => {
    return await db.Habilidade.findOrCreate({
      where: { nome: nome },
      defaults: { nome: nome },
    });
  },

  findAllHabilidades: async () => {
    return await db.Habilidade.findAll({ order: [["nome", "ASC"]] });
  },

  associateHabilidade: async (pessoa_id, habilidade_id) => {
    const pessoa = await db.Pessoa.findByPk(pessoa_id);
    if (!pessoa) throw new Error("Pessoa não encontrada");

    const habilidade = await db.Habilidade.findByPk(habilidade_id);
    if (!habilidade) throw new Error("Habilidade não encontrada");

    await pessoa.addHabilidade(habilidade);
    return true;
  },

  disassociateHabilidade: async (pessoa_id, habilidade_id) => {
    const pessoa = await db.Pessoa.findByPk(pessoa_id);
    if (!pessoa) throw new Error("Pessoa não encontrada");

    const habilidade = await db.Habilidade.findByPk(habilidade_id);
    if (!habilidade) throw new Error("Habilidade não encontrada");

    await pessoa.removeHabilidade(habilidade);
    return true;
  },
};

export default habilidadesService;
