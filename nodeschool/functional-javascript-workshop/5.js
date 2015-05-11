function checkUsersValid(goodUsers){
	return function(submittedUsers){
		return submittedUsers.every(function(item){
			return goodUsers.indexOf(item) !== -1;
		});
	};
}

module.exports = checkUsersValid;

//    module.exports = function checkUsersValid(goodUsers) {
//      return function allUsersValid(submittedUsers) {
//        return submittedUsers.every(function(submittedUser) {
//          return goodUsers.some(function(goodUser) {
//            return goodUser.id === submittedUser.id
//          })
//        })
//      }
//    }