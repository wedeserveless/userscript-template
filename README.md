# Userscript template
A template for creating userscripts with typescript and esbuild. I use [this safari userscript extension](https://apps.apple.com/us/app/userscripts/id1463298887?mt=12). [Learn what a userscript is.](https://en.wikipedia.org/wiki/Userscript)

# Usage
- Clone this repository
- Run `npm install` to install the dependencies (esbuild)
- Modify package.json with settings related to your script, as described below
- Run `npm run build` to build and watch your script

# Configuration
The configuration values are stored in package.json in a key called "userscriptConfig". They control the entry file, output file, and the userscript params

```javascript
// ...
"userscriptConfig": {
  "entry": "src/index.ts" // the main file of your script
  "outputFile": "dist/my-userscript.js", // where to put and what to name the built file
  "params": { // these will be turned into the params comment at the top of the userscript
    "name": "UserScript Template",
    "include": "*://*/*", // be sure to set the rules for which website your script should run on
    "grant": "none",
    "version": "1.0",
    "author": "Unknown",
    "description": "A template for user scripts."
  }
// ...
```
