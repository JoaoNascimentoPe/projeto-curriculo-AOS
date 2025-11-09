import { DataTypes, Model } from "sequelize";

export default function definePessoa(sequelize) {
  class Pessoa extends Model {}

  Pessoa.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome_completo: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      telefone: DataTypes.STRING,
      linkedin_url: DataTypes.STRING,
      github_url: DataTypes.STRING,
      resumo_perfil: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Pessoa",
      tableName: "pessoas",
      timestamps: false,
    }
  );

  return Pessoa;
}
