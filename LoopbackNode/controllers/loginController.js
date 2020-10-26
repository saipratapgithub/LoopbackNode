var config = require('../config/config.json');

function loginController() {

}

loginController.prototype.authenticate = function (req, res, next) {
    res.send('This is '+config.Title+' authenticate controller-11111');
};

loginController.prototype.getUser = function (req, res, next) {
    res.send('This is '+config.Title+' getUser controller ' + req.params.id);
};

module.exports = loginController;

