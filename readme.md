### how to use
```
const isEnv = require('node-is-env')()
```
then NODE_ENV=development node index.js
```
console.log(isEnv.development) // true
```
or pass your own envs
```
const isEnv = require('node-is-env')({ dev: 'development' });
```
NODE_ENV=production node index.js
```
console.log(isEnv.dev); // false
```

### why
I got tired of testing my node envs by typing process.env.NODE_ENV

also, isEnv.development / isEnv.production is more readable than process.env.NODE_ENV === 'production'
