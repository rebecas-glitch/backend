const Usuario = require("../models/Usuario");

module.exports = {
  async listar(req, res) {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  },

  async buscarPorId(req, res) {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(usuario);
  },

  async criar(req, res) {
    try {
      const novo = await Usuario.create(req.body);
      res.status(201).json(novo);
    } catch (error) {
      res.status(400).json({ error: "Erro ao criar usuário" });
    }
  },

  async atualizar(req, res) {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json(usuario);
  },

  async deletar(req, res) {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) return res.status(404).json({ error: "Usuário não encontrado" });
    res.json({ mensagem: "Usuário removido com sucesso" });
  }
};
