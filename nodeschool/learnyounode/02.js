argvs = process.argv.slice(2);

sum = argvs.reduce(function(previous, current, index, array){
  return Number(previous) + Number(current);
});

console.log(sum);