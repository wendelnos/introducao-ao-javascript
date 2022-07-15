
//var currentNumberWrapper = document.getElementById('currentNumber');
const elementSub = document.getElementById("subtrair");
const elementSoma = document.getElementById("adicionar");
var currentNumber = 0;

elementSub.addEventListener("click", subtrair);
elementSoma.addEventListener("click",somar);

function subtrair() {
    if (currentNumber>-10) {
        currentNumber = currentNumber - 1;
        atribui(currentNumber);
    }
    
  }

function somar() {
    if (currentNumber<10) {
     currentNumber = currentNumber + 1;
     atribui(currentNumber);
    }
  }

  function atribui(currentNumber){
    document.getElementById("currentNumber").innerHTML = currentNumber;
    if (currentNumber > 0) 
    document.body.style.background = 'aqua';
    else 
    document.body.style.background = 'orange';
  }

  