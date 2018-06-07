var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var newlist = students.sort(function(a,b){
  var name_a = a.name;
  var name_b = b.name;
  return name_a > name_b;
})

newlist.sort(function(a,b){
  var age_a = a.age;
  var age_b = b.age;
  var name_a = a.name;
  var name_b = b.name;
  if (name_b === name_a) {
    return age_b - age_a;
  }
});

console.log(newlist);