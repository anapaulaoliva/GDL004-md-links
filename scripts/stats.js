const fs = require('fs');
const pathJS = require('../scripts/path.js');

module.exports = {
    showStats: (markdown, textResult) => {
            markdown = fs.readFileSync(process.argv[2]).toString();
            textResult = markdown.match(/\[.+\w+(\w|\W)\]/g);
    
            console.log('Total Links: ' + textResult.length);
        }
}
