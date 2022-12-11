//  //Create a map
//  const cars = new Map([
//      ["Mercedes Benz", 5050],
//      ["Toyota" ,5032],
//      ["Ford",5033]
//  ])
//  console.log(cars)

// MAP
// const fruits = new Map();

//  Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

//  console.log(fruits.size)//Size of map

// console.log(fruits.has("Guava"))//it shows false

// The forEach Method[calls a function for each key/value pair in a Map]

function logMapElements(value, key, map) {
    console.log(`m[${key}] = ${value}`);
  }
  
  new Map([['foo', 3], ['bar', {}], ['baz', undefined]])
    .forEach(logMapElements);

console.log(document.all)