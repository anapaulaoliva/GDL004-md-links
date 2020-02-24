const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const validate = require('../scripts/validate.js');

module.exports = {
    readPath: (file) => {

        return fs.readFileSync(file).toString();
    },
    textMdArray: (str) => {

        let labelLinksArray = str.match(/\[.+\w+(\w|\W)\]/g);
        return labelLinksArray;
    }/*,
    showLinks: (labelLinks) => {

        /*file = path.basename(process.argv[2]);
        markdown = fs.readFileSync(process.argv[2]).toString();
        textResult = markdown.match(/\[.+\w+(\w|\W)\]/g);
        links = markdownLinkExtractor(str)
        
            let pathInfoResult = {
                File: ' ',
                Href: ' ',
                Text: ' '
            };
            
            let counter = 0;

            for (let i = 0; i < labelLinks.length; i++) { 
        
            links.forEach((link) => {  
                
                if (counter >= labelLinks.length){

                } else {
                    
                pathInfoResult.File = file;
                pathInfoResult.Href = link;
                pathInfoResult.Text = textResult[counter];

                counter++;
                console.log(pathInfoResult);
                }
                
            });
        }
    } */
}