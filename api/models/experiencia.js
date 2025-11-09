import { DataTypes, Model } from "sequelize";

export default function defineExperiencia(sequelize) {
  class Experiencia extends Model {}

  Experiencia.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      cargo: DataTypes.STRING,
      empresa: DataTypes.STRING,
      data_inicio: DataTypes.DATEONLY,
      data_fim: DataTypes.DATEONLY,
      descricao: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Experiencia",
      tableName: "experiencias",
      timestamps: false,
    }
  );

  return Experiencia;
}
