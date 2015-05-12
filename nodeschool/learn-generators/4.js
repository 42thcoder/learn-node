function* upper(items){
  for(var i = 0; i < items.length; i++){
    var item = items[i];
    try {
      yield item.toUpperCase();
    } catch(error){
      yield null;
    }
  }
}

var bad_items = ['a', 'B', 1, 'c'];
for(var item of upper(bad_items)) {
  console.log(item);
}