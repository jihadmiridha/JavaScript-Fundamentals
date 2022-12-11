 // cars[0] = "Opel"(This is for changing Element)
 // const cars =["saab", "audi", "volovo
  // document.getElementById("demo").innerHTML = cars 

// const fruits = ["bsanana", "jam", 'kola']
// fruits[3] = "Pineapple"
 // fruits[4] = "Pineapples"
 // fruits[5] = "Pineapplse"
 // fruits[6] = "Pineapplessf"
 // console.log(fruits[fruits.length -1])

 // const fruits = ["bsanana", "jam", "kola", "bangi"]

 // for(i = 0; i < fruits.length; i++){
//     console.log(i)
 //     console.log(fruits[i])
 // }


 // function myFunction(value){ 
 // console.log(value)
// }
 // fruits.forEach(myFunction)

 // console.log("finished")

// const array = new Array(1,2,3,4,5,6,7,8)

// //Push
// array.push(9)
// //Pop
// array.pop()

// //Unshift
// array.unshift(0)
// //Shift
// array.shift()
// array[0] = true


// const names =["AMamn","stierthg","Jihad"]
// //indexOf
// names.indexOf('Jihad')

// //lastIndexOf
// names.lastIndexOf('Jihad')

// names.includes('Akak')


// //Find method
// let channels = [{
//     name: 'Apna College',
//     subscriber:10000
// }, {name: 'jpna College',
//    subscriber:10000

// }]
// console.log(channels.find((element) => element.name === 'Apna College'))


let names1 =["AMamn","stierthg","Jihad"]
let names2 =["AMamn","Akshat","Connoure"]
//let names3 = names1.concat(names2)
let names3 = [...names2,...names1]//Spread on
//concat means link things
//console.log(names3.slice(2,5))//slice method
console.log(names3)

//Join
let student =['j','i','h','a','d']
console.log(student.join('-'))

//Split
console.log(student.split('-')) 

//Practise Map or Filter method

var d = new Date()
    console.log(d.toTimeString())

    var d2 = new Date(2022,3,3,4,32,44,44)
    console.log(d2.toString())