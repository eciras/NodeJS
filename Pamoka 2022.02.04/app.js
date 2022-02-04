//1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
//Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės 
//kintamųjų raidžių. Jį atspausdinti. (Pvz. Bradas Pitas - rezultatas: dastas)

const actorName = 'Bill';
const actorSurname = 'Murray';
let lastLetters = actorName.slice(-3) + actorSurname.slice(-3)

document.getElementById('firstTask').innerHTML = lastLetters;


//2. Sukurti kintamąjį su stringu: “An American in Paris”. Jame ištrinti visas balses. 
//Rezultatą atspausdinti. Kodą pakartoti su stringais: “Breakfast at Tiffany's”, 
//“2001: A Space Odyssey” ir “It's a Wonderful Life”.

const movie1 = `An American in Paris`;
const movie2 = `Breakfast at Tiffany's`;
const movie3 = `2001: A Space Odyssey`;
const movie4 = `It's a Wonderful Life`;


function regexAll(a) {
    return a.replace(/[aeiyou]/gi, '');
  }

const regex1 = regexAll(movie1)
const regex2 = regexAll(movie2)
const regex3 = regexAll(movie3)
const regex4 = regexAll(movie4)

document.getElementById('secondTask').innerHTML = regex1 + "<br>" + regex2 + "<br>" + regex3 + "<br>" + regex4;


//3. Naršyklėje nupieškite linija iš 400 “*” simbolių. Programiškai “suskaldykite” žvaigždutes taip, 
//kad vienoje eilutėje nebūtų daugiau nei 50 “*”; 

const stars = '*';
const moreStars = stars.repeat(400)

    document.getElementById('thirdTask').innerHTML = moreStars.replace(/(.{50})/g, "$1<br>");;


//4. Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais
//ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti raudonos spalvos. 

const array = [];
while(array.length < 300){
    let r = Math.floor(Math.random() * 300) + 1;
    if(array.indexOf(r) === -1) array.push(r);
}
array.sort(function(a, b) {
    return a - b;
  });

  function isGreater(element, index, array) { 
    return (element > 275); 
 } 
 const moreThan275 = array.filter(isGreater)

 document.getElementById('fourthTask').innerHTML = array.join(', ')
 
 document.getElementById('greaterThan').innerHTML = 'Skaičiai, kurie yra didesni už 275: <br>' + moreThan275.join(', ');
 document.getElementById('greaterThan').style.color = "red";

 const count = array.slice(-149).length;
 
 document.getElementById('countNum').innerHTML = 'Array esančių skaičių didesnių už 150: <br>' + count;



//5. Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos.
//Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti. Jeigu reikia, panaudokite css, 
//kad visi rezultatai matytųsi ekrane. 


const arrayOfNums = [...new Array(3000)].map((_, item) => item + 1);

function divide(a) {
  return (a % 77 === 0) 
}

const divided = arrayOfNums.filter(divide);

document.getElementById('fifthTask').innerHTML = divided;


//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.





//8. Sugeneruokite stringą, kurį sudarytų 50 atsitiktinių skaičių nuo 1 iki 200,
//atskirtų tarpais. Skaičiai turi būti unikalūs (t.y. nesikartoti). Sugeneruokite antrą stringą,
//pasinaudodami pirmu, palikdami jame tik pirminius skaičius (t.y tokius, kurie dalinasi be liekanos 
//tik iš 1 ir patys savęs). Skaičius stringe sudėliokite didėjimo tvarka, nuo mažiausio iki didžiausio. 
//https://lt.wikipedia.org/wiki/Pirminis_skai%C4%8Dius


const random = [];
while (random.length < 50) {
  let r = Math.floor(Math.random() * 200) + 1;
  if (random.indexOf(r) === -1) random.push(r);
}
random.sort(function (a, b) {
  return a - b;
});

document.getElementById('eighthTask').innerHTML = "50 atsitiktinių skaičių nuo 1 iki 200: </br>" + random.join(', ');

function isPrime(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {
      return false;
    }
  }
  return num > 1;
}

const primes = random.filter(isPrime)
console.log(prime)

document.getElementById('prime').innerHTML = "Tik pirminiai skaičiai: </br>" + primes.join(', ');


