//这道题的说明也太模糊了
var concat = require('concat-stream');

process.stdin.pipe(concat(function (data) {
    var string = data.toString().split('').reverse().join('');
    console.log(string);
}));