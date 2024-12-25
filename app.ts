function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const a = 5;
const b = 10;
const printResult = true;
const resultPhrase = "Result is: ";

add(a, b, printResult, resultPhrase);

// *** Object Types ***
// Type inference in TS

// Here TS infer's the type of `person` variable to be exactly what it is initialized with
// Here TS automatically infer's the type of `name` key's value to be string and that of `age` to be number
const person = {
  name: "John",
  age: 35,
};

// In this example we can specifically mention the type of each key's value
// This is not an ideal case and TS does not infer's in this scenario
// It's better to use the above approach as to use the TS's type inference
const person2: {
  name: string;
  age: number;
} = {
  name: "James",
  age: 30,
};

console.log("person ===> ", person);
console.log("person 2 ===> ", person2);

// *** Array types ***

// Determines that the favouriteActivities is of type string array
let favouriteActivities: string[];
favouriteActivities = ["Football", "chess"];

let favNumbers: number[];
favNumbers = [1, 2, 3];

console.log("Favourite activities ===> ", favouriteActivities);
console.log("Favourite number ===> ", favNumbers);

// *** Tuple type ***
// A tuple is an array with fixed length and fixed types

let tuple: [number, string];
tuple = [1, "Popcorn"];

// Invalid / not allowed
// tuple = ['Pip', 'Pop'];
// tuple = [1, 'pop', 'pip'];

tuple.push("Apple"); // Allowed

console.log("Tuple ===> ", tuple);

// *** Enum type ***
// enums are a way to organize a collection of related values
// The reason why you can't store an object, boolean, or array value inside an enum key is because enums are meant to represent a fixed set of distinct values, and these complex types can be mutable or vary in structure, which goes against the purpose of enums.

// By default enum assigns the values 0, 1, 2 and so on to the ADMIN, AUTHOR, READER ...
// We can customize the values as per requirement
enum Role {
  ADMIN = 100,
  AUTHOR = "AUTHOR",
  READER = "READ_ONLY",
}

console.log("Role enum ===>", Role.ADMIN);
console.log("Role enum ===>", Role.AUTHOR);
console.log("Role enum ===>", Role.READER);

// *** Union type ***
// Wherein a variable/parameter can have multiple types

function combine(param1: number | string, param2: number | string) {
  let result: string | number;
  if (typeof param1 == "number" && typeof param2 == "number") {
    result = param1 + param2;
  } else {
    result = param1.toString() + " " + param2.toString();
  }

  return result;
}

const combineNumbers = combine(5, 10);
console.log("combineNumbers ===> ", combineNumbers);

const combineStrings = combine("John", "Wick");
console.log("combineStrings ===> ", combineStrings);

// *** literal type ***
// This takes in the exact value as the type of the variable/parameter

// Here `Male` and `Female` options are the literal type of gender parameter
// And hence no other value for gender will be valid in this case
function showGender(gender: "Male" | "Female") {
  // Valid usecase
  if (gender === "Male") {
    console.log("Gender is Male");
  }
  if (gender === "Female") {
    console.log("Gender is Female");
  }

  // Invalid usecase
  // if(gender === "Mal")
  // if(gender === "Fema")
}

// Valid function call
showGender("Female");

// Invalid function call
// showGender("Mal");

// *** Alias and custom types ***
// We can assign an alias union types / any literal type

type SwimmingGear = "swim_cap" | "floater";
type Combinable = number | string;
type User = { name: string; age: number };

function sports(param: SwimmingGear) {
  if (param === "swim_cap") {
    console.log("Swim cap is a swimming gear");
  }
}

sports("swim_cap");
