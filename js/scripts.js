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
    $button.setAttribute('id','show-modal') // adding show-modal button to access modals
    $li.appendChild($button);
    $button.innerText = pokemon.name;
    // pokemon details section
    $button.addEventListener('click', function (event) {
      modalWork.showModal(pokemon)
    })
  }

  function loadList () {
    return fetch(apiUrl).then(function (response){
      return response.json ();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url, // property to load the detailed data for the pokemon
           };
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
      //pokemon details
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types.map(function(item) {return item.type.name})
    }).catch(function (e) {
      console.error(e);
    })
  }


  // returns the functions outside of the iife
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})()

// function showDetails (pokemon) {
// // undefined...
//   document.querySelectorAll('#show-modal').addEventListener('click', () => {
//     modalWork.showModal(pokemon.name, pokemon.height); // second part pokemon.height/types all that -
//   });
//
//   // working code - to console log name - older info to log details
//   // console.log(pokemon.name, pokemon.detailsUrl, pokemon.height, pokemon.types, pokemon.imageUrl) // where the actual console log is showing info
// }

// puts the elements onto the page from the addListItem above
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    pokemonRepository.loadDetails(pokemon)
  });
});

// iife modal
var modalWork = (function() {
  var $modalContainer = document.querySelector('#modal-container');

  function showModal (pokemon) {
    // clears all existing content
    $modalContainer.innerHTML = '';

    //creating div inside modal
    var modal = document.createElement('div');
    modal.classList.add('modal');

    // addint the new content
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    var titleElement = document.createElement('h1');
    titleElement.innerText = pokemon.name;

    var contentElement = document.createElement('p');
    contentElement.innerHTML = 'Pokemon Height: ' + pokemon.height + '<br>' + 'Pokemon Types: ' + pokemon.types + '<br>' + '<img src="' + pokemon.imageUrl + '">';

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    $modalContainer.appendChild(modal);

    $modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    $modalContainer.classList.remove('is-visible');
  }

  //showing modal details - not recognizing li buttons
  // document.querySelector('#show-modal').addEventListener('click', () => {
  //   showModal(pokemon.name, pokemon.height);
  // });

  // escape to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  //clicking off to close modal
  $modalContainer.addEventListener('click', (e) => {
    // closing overlay with clicking
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

 // returning these outside the iife to run in showdetails?
   return {
    showModal: showModal,
    hideModal: hideModal
  }
})();
