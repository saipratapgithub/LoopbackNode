var moment = require('moment-timezone');
module.exports = function (grunt) {
    grunt.initConfig({
        conf: grunt.file.readJSON('config/default.json'),
        eslint: {
            options: {},
            json: {
                options: {
                    configFile: 'config/lint/eslint-json-rules.json',
                    outputFile: 'lint_logs/json-eslint.log'
                },
                src: ['./config/default.json']
            },
            node: {
                options: {
                    configFile: 'config/lint/eslint-node.json',
                    outputFile: 'lint_logs/reporting-api-eslint.log'
                },
                src: ['./**/*.js']
            }
        }
    });
    require('load-grunt-tasks')(grunt);
};

