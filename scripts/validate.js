const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');
const fetch = require('node-fetch');

module.exports = {
    validateLinks: (markdown, links) => {

        markdown = fs.readFileSync(process.argv[2]).toString();
        links = markdownLinkExtractor(markdown);

        let httpRequestResult = {
            Href: ' ',
            Status: ' '
        }

        links.forEach(function (link) {

                httpRequestResult.Href = link;
                httpRequestResult.Status = 'statusCode';

                console.log(httpRequestResult)

            });
    }
}
        /* 
        El módulo debe hacer una petición HTTP para averiguar si el link funciona o no.

        0.1 F - Confirmar que el pathInfoResult se paso al modulo de valite.
        0.2 F Poder acceder solamente al key href de los objetos.
        pathJS.showLinks();
        console.log(pathInfoResult.href)

        0.3 F usar //const http = require('http');
        0.4 F En forEach de Links:
                http.get(link, res => {
                console.log(res.statusCode);
                
                if (
                    res.statusCode == 200
                ){
                    httpRequestResult.Href = link;
                    httpRequestResult.Status = 'Ok' + statusCode;
                }
                else {
                    httpRequestResult.Href = link;
                    httpRequestResult.Status = 'Failed' + statusCode;
                }
    
            console.log(httpRequestResult);

        5. Para cada uno hacer la peticion http.
        6. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.
        7. objeto = href, y ok o fail. 
        */
