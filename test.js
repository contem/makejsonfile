const makeJSON = require("makejsonfile");

const records = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

makeJSON(records, "./output.json")
  .then(() => console.log("JSON file created successfully."))
  .catch(err => console.error("Error writing JSON:", err));
