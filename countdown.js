var countdownGenerator = function (x) {
  var timeleft = 4;
  return function(){
    timeleft -= 1;

    if(timeleft > 0) {
      console.log("T-minus " + timeleft);
    } else if (timeleft === 0) {
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!")
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!