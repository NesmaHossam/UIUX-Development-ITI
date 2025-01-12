// create a dynamic object using Proxy such that it has only the following properties

// a∙ name property that accepts only string of 7 characters.

// b∙ address property that accepts only string value.

// c∙ age property that accepts numerical value between 25 and 60.
// //////////////////////////////////////////////////////////

const person = new Proxy(
  {},
  {
    set: (target, key, value) => {
      if (key === "name") {
        if (typeof value === "string" && value.length === 7) {
          target[key] = value;
        } else {
          throw new Error("error the name should be a string of 7 characters.");
        }
      } else if (key === "address") {
        if (typeof value === "string") {
          target[key] = value;
        } else {
          throw new Error("error the address should be a string.");
        }
      } else if (key === "age") {
        if (typeof value === "number" && value >= 25 && value <= 60) {
          target[key] = value;
        } else {
          throw new Error(
            "error the age should be a number between 25 and 60."
          );
        }
      } else {
        throw new Error(`error ${key}`);
      }
      return true;
    },
    get: (target, key) => {
      if (key in target) {
        return target[key];
      }
      return undefined;
    },
  }
);

try {
  person.name = "Nesmaaa";
  person.address = "streets";
  person.age = 26;

  console.log(person);
} catch (error) {
  console.error(error.message);
}
