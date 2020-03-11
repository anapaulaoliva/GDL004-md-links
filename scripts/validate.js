const fetch = require('node-fetch');

module.exports = {
    validateLinks: (pathInfoArray) => {
        
        let promises = [];
        let total = pathInfoArray.length;
        let functionalLinks = 0;
        let brokenLinks = 0;

        let stats = {'Total Links': total, Unique: functionalLinks, Broken: brokenLinks}

        for (let item of pathInfoArray) {

            promises.push(fetch(item.Href));
        }

        const validatePromise = Promise.all(promises)

            .then(resArr => {
                
                let totalArray = resArr.map(element => {
                    status 
                    if(element.status >= 200 && element.status < 300){

                        let object = {
                            Href: element.url, 
                            Status: element.status
                            };
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
