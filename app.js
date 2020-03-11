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
                
                        validate.validateLinks(pathInfoArray)
                        .then((data) => {
                                //validate.validateLinks(data)
                                console.log(data)
                        })
                        .catch((error) => {
                                console.log(error)
                        });
                        break;
                case '--stats':
                case '-s':
                        let total = stats.showStats(pathInfoArray);
                        console.table(total)
                        break; 
        }
} else {

        console.log('ERR: Invalid Path.');
};