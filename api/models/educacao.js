import { DataTypes, Model } from "sequelize";

export default function defineEducacao(sequelize) {
  class Educacao extends Model {}

  Educacao.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      instituicao: DataTypes.STRING,
      curso: DataTypes.STRING,
      grau: DataTypes.STRING,
      data_inicio: DataTypes.DATEONLY,
      data_fim: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Educacao",
      tableName: "educacao",
      timestamps: false,
    }
  );

  return Educacao;
}
