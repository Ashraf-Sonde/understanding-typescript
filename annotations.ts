// variable declaration with types

let applesCount: number = 5;

// this will not work
// applesCount = '10';

applesCount = 10;

let speed: string = 'Fast';

let hasName: boolean = true;

let nullable: null = null;

let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// Array
let colors: string[] = ['Red', 'Green', 'Blue'];

let numericals: number[] = [1, 2, 3, 4];

let bools: boolean[] = [true, false, true, false];

// Classes
class Car {}

let bmw: Car = new Car();

// Object literal
let pointer: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// Type Annotations vs Inference

// When to use annotations
// 1. Function that returns the 'any' type
const json = '{"x":10,"y":20}';

// const coOrdinates = JSON.parse(json);
// Above coOrdinates has type 'any' to fix it

const coOrdinates: { x: number; y: number } = JSON.parse(json);
console.log(coOrdinates);

// 2. when we declare a variable on one line
// and initialize it later
let colours = ['red', 'green', 'blue'];
let colorFound: boolean;

for (let i = 0; i < colours.length; i++) {
  if (colours[i] === 'green') {
    colorFound = true;
    console.log(`Colour Found: ${colorFound}`);
  }
}

// 3. variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

// FUNCTIONS
const add = (a: number, b: number): number => {
  return a + b;
};

// ---------

const todaysWeather = {
  date: new Date(),
  weather: 'chilly',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(`
  Date: ${date}
  Weather condition: ${weather}  
  `);
};

logWeather(todaysWeather);

// Objects
const profile = {
  name: 'James',
  age: 29,
  coords: {
    lat: 15.3,
    lng: 109.23,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

// ARRAYS
const carMakers = ['BMW', 'Mercedes', 'TATA'];
const dates = [new Date(), new Date(), new Date()];

const matrix = [['F150'], ['Corolla'], ['Camero']];

// TS help with inference when extracting values
const car = carMakers[1];

// Prevent incompatible values
carMakers.push(11);

// Help with array functions
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// Flexible types in an array
const importantData: (string | Date)[] = [new Date(), '2020-11-11'];
importantData.push('2022-13-12');
// importantData.push(100);      // This will give error

// Tuple - array like structure where each element represents
// some property of a record
const drink = {
  color: 'Black',
  carbonated: true,
  sugar: 70,
};

type Drink = [string, boolean, number];
const coke: Drink = ['Black', true, 70];
const tea: Drink = ['Brown', false, 30];
