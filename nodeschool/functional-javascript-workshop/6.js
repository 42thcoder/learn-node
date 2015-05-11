function countWords(inputWords) {
	return inputWords.reduce(function(previous, current, index, array){
		if(previous.hasOwnProperty(current)){
			previous[current]++;
		} else {
			previous[current] = 1;
		}
		
		return previous;
	}, {});
}

module.exports = countWords;