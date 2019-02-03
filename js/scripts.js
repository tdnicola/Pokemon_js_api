var pokemonRepository = (function () {
  var repository = [
    {
      name: 'Bulbasaur ',
      height: 7,
      types: 'grass'
    },
    {
      name: 'Charmander ',
      height: 6,
      types: 'fire '
    },
    {
      name: 'Squirtle ',
      height: 5,
      types: 'water '
    }
  ]

  function add (repositoryO) {
    repository.push(repositoryO);
  }

  function getAll () {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };

})()

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'mewstwostheblues', height: '8', types: 'gangster' });
console.log(pokemonRepository.getAll());

// creating printing without using the for loop

pokemonRepository.getAll().forEach(function (pokemonData) {
  document.write('name:' + pokemonData.name + 'height: ' + pokemonData.height + ' ' + 'types:' + pokemonData.types + '<br>');
});
