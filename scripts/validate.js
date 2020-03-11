const fetch = require('node-fetch');

module.exports = {
    validateLinks: (pathInfoArray) => {
        //el parametro pathInfoArray esta recibiendo mi arreglo de objetos con [{File: ,Href: ,Text: }] como argument
        
        //se declara un arreglo donde se va a meter -la respuesta de la peticion a fetch- para cada link del arreglo
        let promises = [];

        //se declaran contadores para el chart de estadisticas del final
        let total = pathInfoArray.length;
        let functionalLinks = 0;
        let brokenLinks = 0;

        //se hace un objeto con las estadisticas para que salgan como una tabla en la consola con console.table(stats)
        let stats = {
                    'Total Links': total,
                    Unique: functionalLinks,
                    Broken: brokenLinks}

        //itera en cada objeto del arreglo
        for (let item of pathInfoArray) {

            //Elimina la key "Text" de cada objeto iterado
            delete item.Text;
            
            //Manda la peticion al servidor (fetch) del link
            //Antes de resolverse la promesa, aparece como Promise {pending...}
            //Una vez que se resuelva la promesa, saldra una respuesta con todos los datos de la pagina: Status, StatusText, Url... etc.
            //Por tanto, queremos hacerles .push a las promesas una vez ya resueltas para continuar con las validaciones de los status.
            promises.push(fetch(item.Href));
        }

        //Como tenemos un -arreglo de promesas ya resueltas-, utilizamos Promise.all y le metemos ese arreglo
        //Se guarda el Promise.all que significa "Una vez resueltas todas las promesas", en una variable
        //Para poder retornar esta variable al final de la funcion.
        const validatePromise = Promise.all(promises)
            //resArr es cada response (respuesta) del Array resuelta
            .then(resArr => {
                //Para cada respuesta se hace un mapeo del status y se guarda en una variable
                let totalArray = resArr.map(element => {
                    //Se hace una condicional para el status 
                    if(element.status >= 200 && element.status < 300){

                        //si la condicional es true, creara un objeto en donde se actualiza la URL (Href:) y el Status (Status:)
                        let object = {
                            Href: element.url, 
                            Status: element.status
                            };

                        //al contador de los status se le suma 1 cada que se cumple la condicion
                        functionalLinks++;
                        //se modifica el key Unique: con el valor del contador 'functional links' para el chart de status
                        stats.Unique = functionalLinks;
                        return object;

                    } else {

                        let object = {
                            Href: element.url, 
                            Status: element.status
                            };
                        
                        brokenLinks++;
                        stats.Broken = brokenLinks;
                        return object;
                        }
                    })
                
                console.table(stats)
                return totalArray;
            })
            .catch((error) => 
                console.log(error))
        
        return validatePromise;
    }
}
