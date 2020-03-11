const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const validate = require('../scripts/validate.js');

module.exports = {
    readPath: (path) => {

        return fs.readFileSync(path).toString();
    },
    getLabelLinks: (parsedFile) => {

        return parsedFile.match(/\[.+\w+(\w|\W)\]/g);
    },
    showLinks: (path, parsedFile, labelLinks ) => {

        let links = markdownLinkExtractor(parsedFile);   
        let pathInfoArray = [];

            links.forEach((link, index) => {          
                pathInfoArray.push({File: path, Href: link, Text: labelLinks[index]});
            });
            return pathInfoArray;
    } 
}