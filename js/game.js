const tlacitko = document.getElementById('game');
const kostka = document.getElementById('cube');
const vysledek = document.getElementById('result');
const canvas = document.getElementById("myCanvas");
let hod = 6;
let hody = [];
let timer = false;
 


let ctx = canvas.getContext("2d");




function animace() {
    hod = Math.ceil(Math.random() * 6);
    
    kostka.src='img/kostka' + hod + '.png';
}

tlacitko.addEventListener('click',
    function(){
        if(!timer) {
            timer = setInterval(animace, 50);
            tlacitko.innerText = 'Stop';
        }else {
            clearInterval(timer);
            timer = false;
            tlacitko.innerText = 'Hraj';
            hody.push(hod);
            console.log(hody);
            statistika();
            drawTarget(hod, 10);
        }
        
        
    }
);

function plocha() {
   
}

function drawTarget(circles, gap){
    let col;
    if (circles % 2){
        col = "blue";
    }else {
        col = "red";
    }
    
    for (i=1; i<=circles; i++){
      drawCircle(canvas.width/2, canvas.height/2, i*gap, col);
      
    }
  }


function suma(cisla) {
    let sum = 0;
    for (let i = 0; i < hody.length; i++){
        sum += hody[i];
    }
    return sum;
}

function maximum(cisla) {
    let max = 1;
    cisla.forEach(function(value,index){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    let min = 6;
    cisla.forEach(function(value,index){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function statistika() {
      
    vysledek.innerHTML = `<p>Hod:   ${hod}  </p>`;
    vysledek.innerHTML += `<p>Počet hodů: ${hody.length}  </p>`;
    vysledek.innerHTML += `<p>Součet hodů: ${suma(hody)}  </p>`;
    vysledek.innerHTML += `<p>Průměr hodů: ${average(suma(hody),hody.length)}  </p>`;
    vysledek.innerHTML += `<p>Nejvyšší hod: ${maximum(hody)}  </p>`;
    vysledek.innerHTML += `<p>Nejnižší hod: ${minimum(hody)}  </p>`;
    
}