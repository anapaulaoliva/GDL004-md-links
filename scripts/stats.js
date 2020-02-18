const fs = require('fs');
//const path = require('path');

module.exports = {
    showStats: () => {
        console.log('entra a showstats');
        
        /* const path = fs.readFileSync(process.argv[2], 'utf8');
        const parsedPathArray = path.split(' ');
        let counter = 0;
        for(item of parsedPathArray) {
            if(item.includes('https://')){
                counter++;
            }
        }
        return 'Total: ' + counter; */
    }
}
