import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./models/index.js";
import rotasPessoas from "./routes/pessoaRoutes.js";
import rotasEducacao from "./routes/educacaoRoutes.js";
import rotasHabilidades from "./routes/habilidadeRoutes.js";
import rotasProjetos from "./routes/projetoRoutes.js";
import rotasExperiencias from "./routes/experienciaRoutes.js";
import { seedDatabase } from "./seed.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/pessoas", rotasPessoas);
app.use("/api/v1/educacao", rotasEducacao);
app.use("/api/v1/habilidades", rotasHabilidades);
app.use("/api/v1/projetos", rotasProjetos);
app.use("/api/v1/experiencias", rotasExperiencias);

app.get("/", (req, res) => {
  res.send(
    "API de Currículos no ar! Acesse /api/v1/pessoas para ver os dados."
  );
});

async function initializeDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log("Banco de dados conectado com sucesso (via Sequelize).");

    // await db.sequelize.sync({ force: true });
    console.log("Tabelas sincronizadas (force: true).");

    // await seedDatabase();
    console.log("Banco populado com dados iniciais.");
  } catch (error) {
    console.error("Erro ao inicializar o banco:", error);
  }
}

initializeDatabase();

export default app;
