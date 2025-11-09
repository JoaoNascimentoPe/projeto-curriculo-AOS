import { DataTypes, Model } from "sequelize";

export default function defineProjeto(sequelize) {
  class Projeto extends Model {}

  Projeto.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: DataTypes.STRING,
      descricao: DataTypes.TEXT,
      link_repo: DataTypes.STRING,
      link_demo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Projeto",
      tableName: "projetos",
      timestamps: false,
    }
  );

  return Projeto;
}
