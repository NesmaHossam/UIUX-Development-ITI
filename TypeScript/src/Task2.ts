// Write a function printValueLength that accepts a parameter of type string | string[], string | number[], ...etc. Use type narrowing to safely log the length of the value. (Don't use any)

function printValueLength<T>(value: T): void {
  if (typeof value === "string") {
    console.log(`String length: ${value.length}`);
  } else if (Array.isArray(value)) {
    console.log(`Array length: ${value.length}`);
  } else {
    console.log("not valid");
  }
}

printValueLength("hello"); // "String length: 5"
printValueLength(["a", "b", "c"]); // "Array length: 3"

printValueLength([1, 2]); // "Array length: 2"

printValueLength([{ name: "Ali" }, { name: "Mohammed" }, { name: "Mostafa" }]); // "Array length: 3"
