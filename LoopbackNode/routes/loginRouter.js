var express = require('express'),
    router = express.Router(),
    LoginController = require('../controllers/loginController.js'),
    login_controller = new LoginController();

router.post('/:authenticate', login_controller.authenticate.bind(login_controller));
router.get('/id/:id', login_controller.getUser.bind(login_controller));

module.exports = router;



