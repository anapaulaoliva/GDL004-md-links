# Markdown Links

##### Build Status: In process.


### Features

- Analyze .md files to read each      hyperlink contained on it. 
- Substract Text, URL from hyperlinks.

- Make HTTP requests for these links.
- Status chart of 200 and 404 in HTTP requests.


- This Markdown Links uses `markdownLinkExtractor` library to do part of it's job.



##### Logo: In process.
![Logo](https://medium.com/@armando_amador/how-to-make-http-requests-using-fetch-api-and-promises-b0ca7370a444)

### Installing

Install with npm

```
npm install  https://github.com/anapaulaoliva/mdLinks
```

### Example

```javascript
var markdownLinks = require("markdownLinks");
```

### About MarkdownLinks

* `options` --validate --status
* `--validate` What validate does.
* `--status` What status does.
  values:
  * `false` - Path does not exist
  * `true` - Path exists
  * `'FILE'` - Path exists, and is not a directory
  * `'DIR'` - Path exists, and is a directory
  * `[file, entries, ...]` - Path exists, is a directory, and the
    array value is the results of `fs.readdir`
* `File, Href, Link` ---
* `Href, StatusCode` ---
* `Total Links:` ---
* `Unique:` ---
* `Broken:` ---

### Resources
Links to redirect of searching.

### Logo
Markdown Links logo was created by [User](https://www.npmjs.com/packageetch#class-response).

### Keywords

