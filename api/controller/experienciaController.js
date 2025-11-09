import experienciaService from "../services/experienciaService.js";

const experienciaController = {
  create: async (req, res) => {
    try {
      const { pessoa_id } = req.params;
      const newExperiencia = await experienciaService.addExperiencia(
        pessoa_id,
        req.body
      );
      res.status(201).json(newExperiencia);
    } catch (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ error: "Erro ao adicionar experiência", details: err.message });
    }
  },

  deleteExperiencia: async (req, res) => {
    try {
      await experienciaService.deleteExperiencia(req.params.id);
      res.json({ message: "Experiência deletada" });
    } catch (err) {
      console.error(err.message);
      if (err.message.includes("não encontrada")) {
        return res.status(404).json({ error: err.message });
      }
      res
        .status(500)
        .json({ error: "Erro ao deletar experiência", details: err.message });
    }
  },
};

export default experienciaController;
