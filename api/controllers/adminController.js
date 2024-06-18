const carregarConteudoSeguro = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Parabéns, vc conseguiu acessar a área segura!",
  });
};

module.exports = { carregarConteudoSeguro };
