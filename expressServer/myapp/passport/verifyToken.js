const jwt = require('jsonwebtoken')

 var verify = function verifyToken(req, res, next) {
     console.log(req.headers);
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'key')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    next()
  }
  module.exports = verify;
