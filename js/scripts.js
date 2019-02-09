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

  // allows to add a new pokemon to the array repository
  function add (repository) {
    repository.push(repository);
  }

  function getAll () {
    return repository;
  }

  // returns the functions outside of the iife

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

  // Function that creates li inside of ul elements and inserts the pokemon names

  function addListItem (repository) {
    var $ul = document.querySelector('ul');
    var $li = document.createElement('li');
    $ul.appendChild($li);
    var $button = document.createElement('button');
    $li.appendChild($button);
    $button.innerText = repository.name;
    $button.addEventListener('click', function (event) {
      console.log(repository.name)
    })
  }

  function showDetails (pokemon) {
    console.log(pokemon)
  }
})()

// puts the elements onto the page from the addListItem above

pokemonRepository.getAll().forEach(function (repository) {
  pokemonRepository.addListItem(repository)
})
