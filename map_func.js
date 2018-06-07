var map = function(itemlist, actionToDo) {
  var resultlist = [];
  for (var i = 0; i < itemlist.length; i++) {
    resultlist.push(actionToDo(itemlist[i]));
  }
  console.log(resultlist);
}


var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});