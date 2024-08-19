/*
// Proveruvame dali funkcijata inflationCalculator() funkcionira
function inflationCalculator() {
  console.log('FUNCTIONING');
}
*/

/*
//Prezemanje na podatoci od input-ot inflation rate
function inflationCalculator() {
  let inflationRate = document.querySelector('#inflationRate');
  console.log(inflationRate);
}
*/

/*
//Proveruvanje na funkcionalnost na kopce Calculate so vnes na podatoci vo input-ot Inflation rate
function inflationCalculator() {
  let inflationRate = document.querySelector('#inflationRate');
  console.log(inflationRate.value);
}
*/

/*
// Prezemanje na podatoci od input-ot money
function inflationCalculator() {
  let inflationRate = document.querySelector('#inflationRate');
  let money = document.querySelector('#money');

  console.log(typeof(inflationRate.value)); // string
  console.log(typeof(money.value)); // string
  console.log(typeof(inflationRate.value + money.value)); // string

  let sum = inflationRate.value + money.value;
  console.log(inflationRate.value);
  console.log(money.value);
  console.log(sum);
}
*/

/*
//Pretvoranje na string vo number so parseInt (integer = cel broj)
function inflationCalculator() {
let inflationRate = document.querySelector('#inflationRate');
  let money = document.querySelector('#money');

  inflationRate = parseInt(inflationRate.value);
  money = parseInt(money.value);

  console.log(inflationRate);
  console.log(money);

  let sum = inflationRate + money;
  console.log(sum);
}
*/

/*
//Pretvoranje na string vo number so parseFloat (float = decimalen broj)
function inflationCalculator() {
  let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
  
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
  
    console.log(inflationRate);
    console.log(money);
  
    let sum = inflationRate + money;
    console.log(sum);
  }
  */

  /*
  // Prezemanje na podatoci od input-ot years
  function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');
    let years = document.querySelector('#years');
    
      inflationRate = parseFloat(inflationRate.value);
      money = parseFloat(money.value);
      years = parseFloat(years.value);
 }
 */

 /*
 // presmetuvanje na inflacija so pomos na formula za inflacija

 function inflationCalculator() {
  let inflationRate = document.querySelector('#inflationRate');
  let money = document.querySelector('#money');
  let years = document.querySelector('#years');
  
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years.value);

    //Формула за пресметување на инфлација за една година
    let worth = money + (money * (inflationRate / 100));
    console.log(worth);

    //воведување на loop-for за пресметување на инфлација за 10 години
    for(let i = 1; i <years; i++){
      worth += worth * (inflationRate / 100)
      console.log(worth);
    }
}
*/

//Kreiranje na nov element vo JS i vmetnuvanje vo HTML

//Најпрво креираме функција со нејзините потребни варијабли
function inflationCalculator() {
  let inflationRate = document.querySelector('#inflationRate'); // ги преземаме податоците од input-ot Inflation rate
  let money = document.querySelector('#money'); // ги преземаме податоците од input-ot money
  let years = document.querySelector('#years'); // ги преземаме податоците од input-ot years
  
    //Претворање на низите во броеви, поточно во децимални броеви (со parseFloat)  
    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);
    years = parseFloat(years.value);

    //Формула за пресметување на инфлација за една година
    let worth = money + (money * (inflationRate / 100));


    //Воведување на loop-for за пресметување на инфлација за 10 години
    for(let i = 1; i <years; i++){
      worth += worth * (inflationRate / 100)
     }

    worth = worth.toFixed(2); //корекција на децималниот број да покажува до 2 децимали
    
    //Креирање на нов <div> елемент во JS со класа 'final-calculator' 
    let newElement = document.createElement('div'); //креирање на новиот елемент
    newElement.classList = 'final-calculator'//доделување на класа на новиот елемент
    newElement.innerText = `Today's ${money}€ is equal like ${worth}€ for ${years} years.`;//додавање на реченица на новиот елемент

   document.querySelector('.container').appendChild(newElement);//вметнување на новиот елемент од JS во HTML
}