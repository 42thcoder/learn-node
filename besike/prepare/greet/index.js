module.exports = greet;


function greet(){
    var argv = require('minimist')(process.argv.slice(2));

    var message = "Hello, " + argv._[0];
    var isDrunk = argv.drunk;
    if(isDrunk){
        message += ', you look sexy today';
    }

    console.log(message);
}

