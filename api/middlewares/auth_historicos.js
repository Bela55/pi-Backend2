const jwt = require('jsonwebtoken');
function validarToken(req, res, next){
    const token = req.headers['authorization'];
    if(jwt.verify(token, '12345678')){
        next();
    } else {
     res.status(401).json({msg: 'Token inválido'});
    }
}

module.exports = validarToken;
