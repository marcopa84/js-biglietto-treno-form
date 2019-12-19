var genera = document.getElementById('genera');
genera.addEventListener('click',
  function() {

    // definisco variabili generiche
    var nome = document.getElementById('nome').value;
    var km = parseInt(document.getElementById('km').value);
    var sconto = document.getElementById('sconto').value;

    // stampo nome
    document.getElementById('print_nome').innerHTML= nome;

    // costo al kilometro
    var costoKm = 0.21;

    // calcolo il costo del biglietto
    var costoBiglietto = km * costoKm;

    // verifico se ci sono sconti da applicare
    if (sconto == 'minorenne'){
      // stampo tariffa e costo del biglietto
      document.getElementById('print_offerta').innerHTML= ('Sconto Young');
      costoBiglietto -= (costoBiglietto / 100 * 20)
      document.getElementById('print_costo').innerHTML= costoBiglietto.toFixed(2);
    }
    else if (sconto == 'over65'){
      // stampo tariffa e costo del biglietto
      document.getElementById('print_offerta').innerHTML= ('Sconto Silver');
      costoBiglietto -= (costoBiglietto / 100 * 40)
      document.getElementById('print_costo').innerHTML= costoBiglietto.toFixed(2);
    }
    else {
      // stampo tariffa e costo del biglietto
      document.getElementById('print_offerta').innerHTML= ('Tariffa Standard');
      document.getElementById('print_costo').innerHTML= costoBiglietto.toFixed(2);
    }

    // stampo numero casuale carrozza
    var carrozza = Math.floor(Math.random() * 9) + 1;
    document.getElementById('print_carrozza').innerHTML= carrozza;
    // stampo numero casuale CP
    var codiceCp = Math.floor(Math.random() * (9999 - 9000) ) + 9000;
    document.getElementById('print_codicecp').innerHTML= codiceCp;

    // gestisco la comparsa del biglietto
    var classBiglietto =
    document.getElementById("biglietto").classList.add("show");
  }
);

var annulla = document.getElementById('annulla');
annulla.addEventListener('click',
  function() {
    document.getElementById('nome').value='';
    document.getElementById('km').value='';
    document.getElementById('sconto').value='maggiorenne';
    document.getElementById("biglietto").classList.remove("show");
  }
);
