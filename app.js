const process = require('process');
const validate = require('./scripts/validate.js');
const path = require('./scripts/path.js');
const stats = require('./scripts/stats.js');

const pathExtFlag = process.argv[2];
const commandFlag = process.argv[3];

if (pathExtFlag.includes('.md')) {

            let parsedFile = path.readPath(process.argv[2]);
            let labelLinksArray = path.getLabelLinks(parsedFile);
            let pathInfoArray = path.showLinks(process.argv[2], parsedFile, labelLinksArray);
            console.log(pathInfoArray);

        switch (commandFlag) {

                case '--validate':
                case '-v':
                console.log(validate.validateLinks());
                break;

                case '--stats':
                case '-s':
                console.log(stats.showStats());
                break; 

                /*case '':
                return 'ERR: INVALID COMMAND';*/
        }
} else {

    console.log('ERR: Invalid Path.');
};