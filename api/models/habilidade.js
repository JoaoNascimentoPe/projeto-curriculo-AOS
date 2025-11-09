import { DataTypes, Model } from "sequelize";

export default function defineHabilidade(sequelize) {
  class Habilidade extends Model {}

  Habilidade.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: { type: DataTypes.STRING, unique: true },
    },
    {
      sequelize,
      modelName: "Habilidade",
      tableName: "habilidades",
      timestamps: false,
    }
  );

  return Habilidade;
}
