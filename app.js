function cercaPokemon(e) {
    e.preventDefault();
  var richiesta = new XMLHttpRequest();
  console.log(pokemon);
  richiesta.open('GET', 'http://pokeapi.co/api/v2/pokemon/' + pokemon.value, true);
  richiesta.addEventListener('load', function () {
    var risp = JSON.parse(richiesta.responseText);
    console.log(risp);
  });
  richiesta.send();
}
var pokemon= document.getElementById('pokemon_name');
var form=document.querySelector('#search_form');
form.addEventListener('submit',cercaPokemon);
