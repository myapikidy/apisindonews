const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    const token = req.header('key');

    if(!token)
    {
        return res.status(404).json({pesan: 'Provide a Key'});
    }

    try
    {
        const decoded = jwt.verify(token, config.get('Privatekey'));
        req.user = decoded;
        next();
    }

    catch(Ex) {
        res.status(400).json({pesan: 'Error'});
    }
}