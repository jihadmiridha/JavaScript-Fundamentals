 let bread1 = prompt("Which bread woild you like to have:-");
 let veggies1 = prompt("what veggies would you like to have:-");
 let sauce1 = prompt("which type of sauce would you like to have:-");

function makeSandwich(bread,veggies,sauce){
    let sandWich = bread + "bread" + veggies + " " + sauce + "sandWich is ready"; 
    return sandWich; 
}

let vegSandwich = makeSandwich(bread1, veggies1, sauce1);
console.log(vegSandwich);