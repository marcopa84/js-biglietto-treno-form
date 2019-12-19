var genera = document.getElementById('genera')
genera.addEventListener('click',
  function() {
    var nome = document.getElementById('nome').value;
    var km = parseInt(document.getElementById('km').value);
    var sconto = document.getElementById('sconto').value;
    console.log(nome);
    document.getElementById('print_nome').innerHTML= nome;
    console.log(km);
    console.log(sconto);
    var costoKm = 0.21;


    var costoBiglietto = km * costoKm;
    document.getElementById('print_costo').innerHTML= costoBiglietto;

    var carrozza = Math.floor(Math.random() * 9) + 1;
    document.getElementById('print_carrozza').innerHTML= carrozza;


    if (sconto == 'minorenne'){
      costoBiglietto -= (costoBiglietto / 20 * 100)
    }
    else if (sconto == 'over65'){

    }
    console.log(costoBiglietto);

  }
);






// var annulla document.getElementById('annulla')
