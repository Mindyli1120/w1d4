// The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found(i, arr[i]);   // execute callback
//     }
//   }
// }

// function actionWhenFound(position, name) {
//   console.log("Found " + name + "at index " + position + "!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

var name_list = ["Alice", "Bob", "Waldo", "Winston"];
name_list.forEach(function(name,indexNumber) {
  if (name === "Waldo") {
    console.log("Found " + name + "at index " + name_list.indexOf(name) + "!");
  }
})