_browserifyRequire.modules[$filename] = function () {
	if(typeof _browserifyRequire.modules[$filename]._cached === "undefined")
		_browserifyRequire.modules[$filename]._cached = { exports : [] };
		
	if(typeof _browserifyRequire.modules[$filename]._totalExports === "undefined")
		_browserifyRequire.modules[$filename]._totalExports = -1;
	
    var module = _browserifyRequire.modules[$filename]._cached;
    var exports = module.exports;
	var total = _browserifyRequire.modules[$filename]._totalExports;
	
	_browserifyRequire.modules[$filename]._totalExports = module.exports.length;
	
	if(total === module.exports.length)
		return module.exports;
	
    var __dirname = $__dirname;
    var __filename = $__filename;
    
    var require = function (path) {
        return _browserifyRequire.fromFile($filename, path);
    };
    
    (function () {
        $body
    }).call(module.exports);

    return module.exports;
};
