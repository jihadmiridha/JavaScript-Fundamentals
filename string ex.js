const list = document.querySelector('.output ul');
list.innerHTML ='';
let cities = ['dhAka', 'khULna','jeSSore','gOA'];

for(let i=0;i<cities.length;i++){
    let firstAlphabet = cities[i].slice(0,1);
    let lowerCaseCity = cities[i].toLowerCase();
    lowerCaseCity.replace(firstAlphabet,firstAlphabet.toUpperCase());
     let listItem =document.createElement('li')
     listItem.textContent = lowerCaseCity;
     list.appendChild(listItem);
}