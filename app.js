const process = require('process');
const validate = require('./scripts/validate.js');
const path = require('./scripts/path.js');
const stats = require('./scripts/stats.js');
const pathExtFlag = process.argv[2];
const commandFlag = process.argv[3];

if (pathExtFlag.includes('.md')) {

            let textFile = path.readPath(process.argv[2]);
            let labelLinksArray = path.textMdArray(textFile);
            
            console.log(textFile);
            console.log(labelLinksArray);
            
            //path.showLinks(labelLinksArray);

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
