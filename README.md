# npm-dependency-playground

this is a working example to demonstrate that npm understands nested dependencies and perfectly resolves it

if you want to try it yourself, do:
``` bash
npm i
node index.js
```

you should get this output:
```
calling our deps... 
called from depA... 
called from depB... 
called from depC...
```

Explanation:
in `./index.js` we call our first dependecy `depA`, which in order calls `depB` which calls `depC`,
and as the result: we see logs from each dependency - which means npm resolved and executed all nested deps. For this we didn't need to do any npm link which we did in previous projects, just install deps as it is, e.g. `npm install ./depA --save`, and it will automatically be added to main package.json file as a dependency
