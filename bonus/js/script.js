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
    // tariffa applicata
    var tariffaApplicata = ('Tariffa Standard');

    // verifico se ci sono sconti da applicare
    if (sconto == 'minorenne'){
      costoBiglietto -= (costoBiglietto / 100 * 20);
      tariffaApplicata = ('Sconto Young');
      // risparmio
      var risparmio = costoBiglietto / 100 * 20;
      document.getElementById('print_risparmio').innerHTML = risparmio.toFixed(2);
      document.getElementById("print_risparmio_div").classList.add("show");
    }
    else if (sconto == 'over65'){
      costoBiglietto -= (costoBiglietto / 100 * 40);
      tariffaApplicata = ('Sconto Silver');
      // risparmio
      var risparmio = costoBiglietto / 100 * 20;
      document.getElementById('print_risparmio').innerHTML = risparmio.toFixed(2);
      document.getElementById("print_risparmio_div").classList.add("show");
    }

    // Stampo tariffa tariffaApplicata
    document.getElementById('print_offerta').innerHTML= tariffaApplicata;

    // stampo numero casuale carrozza
    var carrozza = Math.floor(Math.random() * 9) + 1;
    document.getElementById('print_carrozza').innerHTML= carrozza;

    // stampo numero casuale CP
    var codiceCp = Math.floor(Math.random() * (9999 - 9000) ) + 9000;
    document.getElementById('print_codicecp').innerHTML= codiceCp;

    //stampo costo Biglietto
    document.getElementById('print_costo').innerHTML= costoBiglietto.toFixed(2);

    // gestisco la comparsa del biglietto
    var classBiglietto =
    document.getElementById("biglietto").classList.add("show");
    document.getElementById("biglietto_titolo").classList.add("show");
  }
);

var annulla = document.getElementById('annulla');
annulla.addEventListener('click',
  function() {
    document.getElementById('nome').value='';
    document.getElementById('km').value='';
    document.getElementById('sconto').value='maggiorenne';
    document.getElementById('print_risparmio').innerHTML = '';
    document.getElementById("biglietto").classList.remove("show");
    document.getElementById("biglietto_titolo").classList.remove("show");
    document.getElementById("print_risparmio_div").classList.remove("show");
  }
);
