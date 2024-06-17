const jwt = require('jsonwebtoken');
require('dotenv').config();

// Função para gerar um token JWT com tempo de expiração
function generateToken(user) {
  return jwt.sign({ data: user }, process.env.JWT_SECRET, { expiresIn: '10m' }); // Token expira em 1 hora
} 

// Middleware para autenticar o token JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (token == null) return res.status(401).json({ msg: 'Acesso negado' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // opcional: adicionar payload ao request se necessário
    next();
  } catch (e) {
    console.error(e);
    if (e instanceof jwt.JsonWebTokenError) {
      // Erro de token inválido
      res.status(403).json({ msg: 'Token inválido' });
    } else if (e instanceof jwt.TokenExpiredError) {
      // Erro de token expirado
      res.status(401).json({ msg: 'Token expirado' });
    } else {
      // Outros erros
      res.status(500).json({ msg: 'Erro ao verificar o token' });
    }
  }
}

module.exports = { authenticateToken, generateToken };
