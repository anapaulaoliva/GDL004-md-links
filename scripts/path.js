const fs = require('fs');
const path = require('path');
const markdownLinkExtractor = require('markdown-link-extractor');
const validate = require('../scripts/validate.js');

module.exports = {
    readPath: (file) => {
        file = process.argv[2];
    },
    textMdArray: (markdown, textResult) => {
        markdown = fs.readFileSync(process.argv[2]).toString();
        textResult = markdown.match(/\[.+\w+(\w|\W)\]/g);
    },
    showLinks: (file, markdown, links, textResult) => {
        file = /*path.basename(*/process.argv[2]/*)*/;
        markdown = fs.readFileSync(process.argv[2]).toString();
        textResult = markdown.match(/\[.+\w+(\w|\W)\]/g);
        links = markdownLinkExtractor(markdown);
        
            let pathInfoResult = {
                File: ' ',
                Href: ' ',
                Text: ' '
            };
            
            let counter = 0;

            for (let i = 0; i < textResult.length; i++) { 
        
            links.forEach((link) => {  
                
                if (counter >= textResult.length){

                } else {
                    
                pathInfoResult.File = file;
                pathInfoResult.Href = link;
                pathInfoResult.Text = textResult[counter];

                counter++;
                console.log(pathInfoResult);
                }
             });
         }
    }
}