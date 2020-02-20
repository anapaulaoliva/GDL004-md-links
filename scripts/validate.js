const fs = require('fs');
const pathJS = require('../scripts/path.js');
const markdownLinkExtractor = require('markdown-link-extractor');
const http = require('http');

module.exports = {
    validateLinks: (markdown, links) => {
        let file = process.argv[2];
        markdown = fs.readFileSync(file).toString();
        links = markdownLinkExtractor(markdown);

        /* let httpRequestResult = {
            Href: ' ',
            Http: ' '
        } */

        links.forEach(function (link) {

            /* httpRequestResult = {
                Href: link,
                Http: 'reqRes'
            }
            console.log(httpRequestResult) */

            console.log(link);
            http.get(file, (res) => {
            const { statusCode } = res;
            let error;
                if (statusCode !== 200) {
                error = new Error('Request Failed.\n'+
                    `Status Code: ${statusCode}`);
                }
            });
            
        });
            
        /* El módulo debe hacer una petición HTTP para averiguar si el link funciona o no.

        0.1 Fallido - Confirmar que el pathInfoResult se paso al modulo de valite.
        0.2 Fallido Poder acceder solamente al key href de los objetos.
        pathJS.showLinks();
        console.log(pathInfoResult.href)
        1. Tener solamente links *
        3. Para cada uno hacer la peticion http.
        4. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.
        5. objeto = href, y ok o fail. */
    }

}
