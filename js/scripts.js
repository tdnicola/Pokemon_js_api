var pokemonRepository = (function () {
  var repository = []
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  // allows to add a new pokemon to the array repository
  function add (pokemon) {
    repository.push(pokemon);
  }

  function getAll () {
    return repository;
  }
    // Function that creates li inside of ul elements and inserts the pokemon names

  function addListItem (pokemon) {
    var $ul = document.querySelector('ul');
    var $li = document.createElement('li');
    $ul.appendChild($li);
    var $button = document.createElement('button');
    $li.appendChild($button);
    $button.innerText = pokemon.name;
    $button.addEventListener('click', function (event) {
      console.log(pokemon.name, pokemon.detailsUrl, pokemon.height, pokemon.types, pokemon.imageUrl) //Loading where the info goes. Will change to append to a div
    })
    }

  function loadList () {
    return fetch(apiUrl).then(function (response){
      return response.json ();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url,
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  // Fetch data from API and add to the repository
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default; // loading items
      item.height = details.height;
      item.types = details.types.map(function(item) {return item.type.name})
    }).catch(function (e) {
      console.error(e);
    })
  }

    // couldn't get showDetailsto work...
  // function showDetails (item) {
  //   pokemonRepository.loadDetails(item).then(function() {
  //   console.log(item.height); }) // not showing anything for console.log
  // }

  // returns the functions outside of the iife
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };

})()

// puts the elements onto the page from the addListItem above
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  pokemonRepository.loadDetails(pokemon)
    });
});
