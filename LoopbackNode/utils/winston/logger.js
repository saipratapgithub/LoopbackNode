var winston = require('winston'),
    moment = require('moment'),
    date = moment(),
    logger,
    dateFormat = date.format('YYYY-MM-DD'),
    filename;
filename = 'log-files/' + dateFormat;

logger = new (winston.Logger)({
    levels: {
        info: 1,
        error: 2
    },
    colors: {
        info: 'green',
        error: 'red'
    },
    transports: [
        new (winston.transports.File)({
            name: 'info-file',
            filename: filename,
            level: 'info',
            json: true,
            colorize: true,
            timestamp: true,
            prettyPrint: true
        }),
        new (winston.transports.File)({
            name: 'error-file',
            filename: filename,
            level: 'error',
            colorize: true,
            json: true,
            handleExceptions: true,
            humanReadableUnhandledException: true,
            timestamp: true,
            prettyPrint: true
        })
    ],
    exitOnError: false
});
module.exports = logger;