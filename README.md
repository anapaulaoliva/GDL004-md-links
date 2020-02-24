# Markdown Links

### Features

Analyze .md files to read each hyperlink contained on it. 
Review HTTP requests for these links and letting you know the result through a few statistics.

This Markdown Links uses `markdownLinkExtractor` library to do part of it's job.

##### Build Status: In process.

[Embed Build Status](https://docs.travis-ci.com/user/status-images/#travis-ci-pages-show-the-default-branchs-result)

##### Logo: In process.
![](logo/.png)

### Installing

Install with npm

```
npm i   
```

### Example

```javascript
var markdownLinks = require("markdownLinks");
```

### About MDLinks

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
Markdown Links logo was created by [User](pageofuser.com).

##### Keywords

