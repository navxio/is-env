### how to use
```
const isEnv = require('node-is-env')()
console.log(isEnv.development) // false
```
or pass your own envs
```
const isEnv = require('node-is-env')({ dev: 'development' });
console.log(isEnv.dev); // false
```

#### why
I got tired of testing my node envs by typing process.env.NODE_ENV
