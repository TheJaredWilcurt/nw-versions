# nw-versions

All NW.js versions data in JSON format.

## Installation

```
npm install nw-versions
```


## Usage

```js
const nwVersions = require('nw-versions');

console.log(nwVersions);
```

Which will return the contents of the `versions.json` file, like so:

```json
{
  "latest": "v0.40.1",
  "stable": "v0.40.1",
  "lts": "v0.14.7",
  "versions": [
    {
      "version": "v0.40.1",
      "files": ["win-x64", "win-ia32", "linux-x64", "linux-ia32", "osx-x64"],
      "flavors": ["normal", "sdk"],
      "components": {
        "node": "12.8.0",
        "chromium": "76.0.3809.100"
      }
    },
    // ...etc
  ]
}
```
