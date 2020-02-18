const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
//const path = require('path');
module.exports = {
    showLinks: () => {
        console.log('Entra a showLinks');
        const file = process.argv[2];
        const markdown = fs.readFileSync(process.argv[2]).toString();
        const links = markdownLinkExtractor(markdown);

        links.forEach((link) => {        
            console.log('entra a forEach');
                
            let pathInfoResult = {
                File: file,
                Href: link
            }
            console.log(pathInfoResult);
        });
    }
}