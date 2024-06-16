const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(user) {
  return jwt.sign({ data: user }, process.env.JWT_SECRET, { expiresIn: '10m' }); 

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (token == null) return res.status(401).json({ msg: 'Acesso negado' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (e) {
    console.error(e);
    if (e instanceof jwt.JsonWebTokenError) {
   
      res.status(403).json({ msg: 'Token inválido' });
    } else if (e instanceof jwt.TokenExpiredError) {
     
      res.status(401).json({ msg: 'Token expirado' });
    } else {
     
      res.status(500).json({ msg: 'Erro ao verificar o token' });
    }
  }
 }
}
module.exports = { authenticateToken, generateToken };