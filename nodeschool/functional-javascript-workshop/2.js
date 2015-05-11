function repeat(operation, times){
	for(var i = 0; i < times; i++){
		operation();
	}
}

module.exports = repeat;