// original user object
let user = {
  name: "Praman",
  age: 20,
  role: "Developer"
};

// function to clone and update
function cloneAndUpdate(obj, key, newValue) {
  let clone = {};

  for (let prop in obj) {
    clone[prop] = obj[prop];
  }

  clone[key] = newValue;
  return clone;
}

// usage
let updatedUser = cloneAndUpdate(user, "age", 21);

console.log("Original:", user);
console.log("Updated:", updatedUser);