import { Sequelize } from "sequelize";
import "dotenv/config";

// Importa as funções de definição dos modelos
import definePessoa from "./pessoa.js";
import defineExperiencia from "./experiencia.js";
import defineEducacao from "./educacao.js";
import defineProjeto from "./projeto.js";
import defineHabilidade from "./habilidade.js";

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  dialectModule: require("pg"),
});

const db = {};

db.Pessoa = definePessoa(sequelize);
db.Experiencia = defineExperiencia(sequelize);
db.Educacao = defineEducacao(sequelize);
db.Projeto = defineProjeto(sequelize);
db.Habilidade = defineHabilidade(sequelize);

db.Pessoa.hasMany(db.Experiencia, {
  as: "experiencias",
  foreignKey: "pessoa_id",
  onDelete: "CASCADE",
});
db.Experiencia.belongsTo(db.Pessoa, { foreignKey: "pessoa_id" });

db.Pessoa.hasMany(db.Educacao, {
  as: "educacao",
  foreignKey: "pessoa_id",
  onDelete: "CASCADE",
});
db.Educacao.belongsTo(db.Pessoa, { foreignKey: "pessoa_id" });

db.Pessoa.hasMany(db.Projeto, {
  as: "projetos",
  foreignKey: "pessoa_id",
  onDelete: "CASCADE",
});
db.Projeto.belongsTo(db.Pessoa, { foreignKey: "pessoa_id" });

db.Pessoa.belongsToMany(db.Habilidade, {
  as: "habilidades",
  through: "pessoa_habilidades",
  foreignKey: "pessoa_id",
  otherKey: "habilidade_id",
  timestamps: false,
});
db.Habilidade.belongsToMany(db.Pessoa, {
  as: "pessoas",
  through: "pessoa_habilidades",
  foreignKey: "habilidade_id",
  otherKey: "pessoa_id",
  timestamps: false,
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
