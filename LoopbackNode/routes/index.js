var express = require('express'),
    router = express.Router();

router.use('/user', require('../routes/loginRouter.js'));

module.exports = router;



