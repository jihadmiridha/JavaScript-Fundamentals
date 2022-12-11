const cars =["A","B", "C", "D"]

for(let i = 0; i < cars.length; i++){
  console.log(i) //0
}


console.log("I am done")
//Loop For In

const numbers = [45, 9,16, 25]

let txt = ""
for (let x in numbers){
    txt += numbers[x]
    console.log(txt)
}

let language = "JavaScript"
let text = ""
for (let x of language){
    text =+ x
}
console.log(text)
//For loop
//for (let i = 0; i < 10; i++){
  //  console.log("Hello")
//}

//While Loop
//let i =0;
//while(i>= 0){
   // console.log("Hello")
 //   i--
//}

//Do while loop
// let j = 10
// do{
//     console.log("Hello")
//     j++
// }
// while(j<10)

//For...In
//Objects
// let animal ={
//     name : "Zebra",
//     leg : 4
// };
// for(let key in animal){
//     console.log(key, animal [key])
// }
// console.log(animal ["name"])

//Arrays
let names = ["rahul", "Nisha" ,"nina" ,"rishabh"];
for(let index in names){
    console.log(index, names[index])
}
//For..of
for(let name of names){
    console.log(name)
}

