const fs = require('fs');
const path = require('path');

class Conify {
	constructor (config_path) {
		var files = fs.readdirSync(config_path);
		var config = {};

		files.forEach(file => {
			if (path.extname(file) == '.json') {
				var content = fs.readFileSync(path.resolve(config_path, file));
				var parsed = JSON.parse(content);

				if (parsed['conify_name']) {
					var config_name = parsed['conify_name'];

					delete parsed['conify_name'];
				} else {
					var config_name = file.slice(0, -5)
				}

				config[config_name] = parsed;
			}
		});

		this.config = config;
	}

	get (config_path) {
		var checkpoints = config_path.split('.');

		return checkpoints.reduce((o,i) => o ? o[i] : null, this.config);
	}
}

module.exports = Conify;