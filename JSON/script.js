
var person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    isStudent: false,
    courses: ["Math", "History", "English"]
  };
  
  // Converting JavaScript object to JSON string
  var jsonStr = JSON.stringify(person);
  console.log(jsonStr);
  
  // Converting JSON string back to JavaScript object
  var parsedPerson = JSON.parse(jsonStr);
  console.log(parsedPerson);
