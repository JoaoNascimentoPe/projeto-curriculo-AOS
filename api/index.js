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

// --- Configuração do App Express ---
const app = express();
const PORT = process.env.PORT || 3000;

// --- Middlewares ---
app.use(cors());
app.use(express.json());

// --- Rotas da API ---
app.use("/api/v1/pessoas", rotasPessoas);
app.use("/api/v1/educacao", rotasEducacao);
app.use("/api/v1/habilidades", rotasHabilidades);
app.use("/api/v1/projetos", rotasProjetos);
app.use("/api/v1/experiencias", rotasExperiencias);

// Rota raiz simples
app.get("/", (req, res) => {
  res.send(
    "API de Currículos no ar! Acesse /api/v1/pessoas para ver os dados."
  );
});

// --- Inicialização do Servidor ---
async function startServer() {
  try {
    // Autentica e Sincroniza o banco
    await db.sequelize.authenticate();
    console.log("Banco de dados conectado com sucesso (via Sequelize).");

    await db.sequelize.sync({ force: true });
    console.log("Tabelas sincronizadas (force: true).");

    // Popula o banco
    await seedDatabase();

    // Inicia o servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Falha ao iniciar o servidor:", error);
    process.exit(1);
  }
}

startServer();
