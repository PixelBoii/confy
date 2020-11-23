# Conify
Conify is a simple NPM package that simplifies the process of managing multiple configuration files

## Installation
```
npm install conify --save
```

## Usage
```js
const Conify = require('conify');

// The directory of your config files
var config = new Conify('./config');

// Get the property "bar" from the file "config/foo.json"
config.get('foo.bar');
```

## Good To Know
### Customize Config Name
```js
// config/foo.json
{
	"conify_name": "test",
	"port": 5000
}

// index.js
const Conify = require('conify');

var config = new Conify('./config');

config.get('test.port'); // 5000
config.get('foo.port'); // null
```

## Example Structure
```
config
+-- foo.json
+-- bar.json
index.js
```

## Contributing
Pull requests are welcome.