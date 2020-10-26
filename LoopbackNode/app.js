'use strict';
var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    logger = require('./utils/winston/logger.js'),
    config = require('./config/config.json'),
    routes = require('./routes');

app.use(bodyParser({extend: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.listen(config.router_config.port);
app.use(function (req, res, next) {
    logger.info("this is request headers function..!");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, HEAD");
    res.header("Access-Control-Expose-Headers", "X-TOTAL-COUNT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,X-TOTAL-COUNT, X-access-token");
    if (req.url.substr(-1) === '/') {
        logger.info(config.title);
        return res.send({
            message: config.title
        });
    }
    next();
});
app.use(function (err, req, res, next) {
    logger.info("This is error handling function", next);
    logger.error(req, err);
    res.status(err.status).send(err);
});
app.use('/v1', routes);

module.exports = app;
