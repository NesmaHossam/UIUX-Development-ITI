// - `getSetGen()`
//     Create your own custom object that has getSetGen as function value, this
//     function should generate setters and getters for the properties of the caller
//     object .
//     This object may have description property of string value if needed.
//     Let any other created object can use this function property to generate
//     getters and setters for his own properties
//     💡 Avoid generating getters or setters for property of function value

//////////////////////////////////////////////////////////////////////////////////////////////////////

var myObject = {
  name: "ahmed",
  age: 20,
  address: "",

  displayInfo: function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.address);
  },

  getSetGen: function () {
    var self = this;
    for (var key in self) {
      if (typeof self[key] !== "function") {
        (function (key) {
          var value = self[key];
          Object.defineProperty(self, key, {
            get: function () {
              return value;
            },
            set: function (val) {
              value = val;
            },
            // enumerable: true,
            // configurable: true,
          });
        })(key);
      }
    }
  },
};

myObject.displayInfo();

myObject.getSetGen();
console.log(myObject);

var user = { name: "Ali", age: 10 };
myObject.getSetGen.call(user);
console.log(user);
