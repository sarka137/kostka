const tlacitko = document.getElementById('game');
const kostka = document.getElementById('cube');
const kostka2 = document.getElementById('cube2');
const kostka3 = document.getElementById('cube3');
const vysledek = document.getElementById('result');
const canvas = document.getElementById("myCanvas");
let hod = 6;
let hod2 = 6;
let hod3 = 6;
let hody = [];
let soucetHod = [];
let timer = false;

function animace() {
    hod = Math.ceil(Math.random() * 6);
    hod2 = Math.ceil(Math.random() * 6);
    hod3 = Math.ceil(Math.random() * 6);
    
    kostka.src='img/kostka' + hod + '.png';
    kostka2.src='img/ckostka' + hod2 + '.png';
    kostka3.src='img/zkostka' + hod3 + '.png';
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
            hody.push(hod, hod2, hod3);
            soucetHod.push(hod + hod2 + hod3);
            console.log(hody);
            console.log(soucetHod);
            statistika();
            
        }                
    }
);


function suma(cisla) {
    let sum = 0;
    for (let i = 0; i < hody.length; i++){
        sum += hody[i];
    }
    return sum;
}

function maximum(cisla) {
    let max = 1;
    cisla.forEach(function(value){
        if (value > max) max = value;
    })
    return max;
}

function minimum(cisla) {
    let min = 18;
    cisla.forEach(function(value){
        if (value < min) min = value;
    })
    return min;
}

function average(sum, count) {
    return (sum / count).toFixed(2);
}

function statistika() {
      
    vysledek.innerHTML = `<p>Hod:  | ${hod} | ${hod2} | ${hod3} |</p>`;
    vysledek.innerHTML += `<p>Součet hodů: ${hod + hod2 + hod3}  </p>`;
    vysledek.innerHTML += `<p>Počet hodů: ${(hody.length)/3}  </p>`;
    vysledek.innerHTML += `<p>Součet všech hodů: ${suma(hody)}  </p>`;
    vysledek.innerHTML += `<p>Průměr hodů: ${average(suma(hody),hody.length)}  </p>`;
    vysledek.innerHTML += `<p>Nejvyšší součet hodů: ${maximum(soucetHod)}  </p>`;
    vysledek.innerHTML += `<p>Nejnižší součet hodů: ${minimum(soucetHod)}  </p>`;
    
}