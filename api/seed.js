import db from "./models/index.js";

export async function seedDatabase() {
  console.log("Iniciando o processo de seeding...");

  const [js, react, node, pg, python, sql, pandas] = await Promise.all([
    db.Habilidade.findOrCreate({ where: { nome: "JavaScript" } }),
    db.Habilidade.findOrCreate({ where: { nome: "React" } }),
    db.Habilidade.findOrCreate({ where: { nome: "Node.js" } }),
    db.Habilidade.findOrCreate({ where: { nome: "PostgreSQL" } }),
    db.Habilidade.findOrCreate({ where: { nome: "Python" } }),
    db.Habilidade.findOrCreate({ where: { nome: "SQL" } }),
    db.Habilidade.findOrCreate({ where: { nome: "Pandas" } }),
  ]);

  const [ana] = await db.Pessoa.findOrCreate({
    where: { email: "ana.silva@email.com" },
    defaults: {
      nome_completo: "Ana Silva",
      email: "ana.silva@email.com",
      telefone: "+55 11 98765-4321",
      linkedin_url: "https://linkedin.com/in/anasilva",
      github_url: "https://github.com/anasilva",
      resumo_perfil:
        "Desenvolvedora Full Stack com 5 anos de experiência em React, Node.js e PostgreSQL.",
    },
  });

  await db.Experiencia.findOrCreate({
    where: { pessoa_id: ana.id, cargo: "Desenvolvedora Sênior" },
    defaults: {
      pessoa_id: ana.id,
      cargo: "Desenvolvedora Sênior",
      empresa: "Tech Solutions Ltda.",
      data_inicio: "2021-03-15",
      descricao: "Liderança técnica da equipe de frontend.",
    },
  });
  await db.Experiencia.findOrCreate({
    where: { pessoa_id: ana.id, cargo: "Desenvolvedora Pleno" },
    defaults: {
      pessoa_id: ana.id,
      cargo: "Desenvolvedora Pleno",
      empresa: "Web Inovações",
      data_inicio: "2018-01-10",
      data_fim: "2021-03-14",
      descricao: "Desenvolvimento de APIs REST com Node.js.",
    },
  });
  await db.Educacao.findOrCreate({
    where: { pessoa_id: ana.id, curso: "Ciência da Computação" },
    defaults: {
      pessoa_id: ana.id,
      instituicao: "Universidade Digital",
      curso: "Ciência da Computação",
      grau: "Bacharelado",
      data_inicio: "2014-02-01",
      data_fim: "2017-12-15",
    },
  });
  await db.Projeto.findOrCreate({
    where: { pessoa_id: ana.id, nome: "Sistema de E-commerce" },
    defaults: {
      pessoa_id: ana.id,
      nome: "Sistema de E-commerce",
      descricao: "Plataforma de e-commerce completa.",
      link_repo: "https://github.com/anasilva/ecommerce",
    },
  });
  await ana.addHabilidades([js[0], react[0], node[0], pg[0]]);

  const [bruno] = await db.Pessoa.findOrCreate({
    where: { email: "bruno.costa@email.com" },
    defaults: {
      nome_completo: "Bruno Costa",
      email: "bruno.costa@email.com",
      telefone: "+55 21 91234-5678",
      linkedin_url: "https://linkedin.com/in/brunocosta",
      github_url: "https://github.com/brunocosta",
      resumo_perfil: "Analista de Dados especialista em SQL e Python.",
    },
  });

  await db.Experiencia.findOrCreate({
    where: { pessoa_id: bruno.id, cargo: "Analista de Dados Pleno" },
    defaults: {
      pessoa_id: bruno.id,
      cargo: "Analista de Dados Pleno",
      empresa: "Data Insights S.A.",
      data_inicio: "2020-05-01",
      descricao: "Análise de dados de vendas, criação de dashboards.",
    },
  });
  await db.Educacao.findOrCreate({
    where: { pessoa_id: bruno.id, curso: "Estatística" },
    defaults: {
      pessoa_id: bruno.id,
      instituicao: "Instituto de Estatística",
      curso: "Estatística",
      grau: "Bacharelado",
      data_inicio: "2016-01-01",
      data_fim: "2019-12-20",
    },
  });
  await bruno.addHabilidades([python[0], sql[0], pandas[0], pg[0]]);

  console.log("Seeding concluído com sucesso.");
}
