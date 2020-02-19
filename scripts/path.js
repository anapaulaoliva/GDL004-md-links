const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

module.exports = {
    readPath: (file) => {
        file = process.argv[2];
    },
    textMdArray: (markdown, textResult) => {
        markdown = fs.readFileSync(process.argv[2]).toString();
        textResult = markdown.match(/\[.+\w+(\w|\W)\]/g);
        
    },
    lengthMdArray: (markdown, textResult) => {
        markdown = fs.readFileSync(process.argv[2]).toString();
        textResult = markdown.match(/\[.+\w+(\w|\W)\]/g);

        console.log('Total Links: ' + textResult.length);
    },
    showLinks: (file, markdown, links, textResult) => {
        file = process.argv[2];
        markdown = fs.readFileSync(process.argv[2]).toString();
        textResult = markdown.match(/\[.+\w+(\w|\W)\]/g);
        links = markdownLinkExtractor(markdown);
    
            let counter = 0;
            for (let i = 0; i < textResult.length; i++) {            
            links.forEach((link) => {  
                if (counter > textResult.length){

                } else {

                let pathInfoResult = {
                File: file,
                Href: link,
                Text: textResult[counter]
                }
                counter++;

                console.log(pathInfoResult);
                }
             });
         }
    }
}