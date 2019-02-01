// Original working method below, objects in an array
// var repository = [
//   {
//     name: 'Bulbasaur ',
//     height: 7,
//     types: ['grass', 'poison ']
//   },
//    {
//     name: 'Charmander',
//     height: 6,
//     types: ['fire ']
//   },
//     {
//     name: 'Squirtle ',
//     height: 5,
//     types: ['water ']
//   }
// ]

// for loop that prints out all objects

// for (var i = 0; i < repository.length; i++) {
//   document.write(repository[i].name + ' ' +  repository[i].types + '(height: ' + repository[i].height + ')' + ' ' + '<br>');
//   if (repository[i].height >= 7) {
//     document.write('- Wow, that\'s big ');
//   };
// };


// currently writing only the keys in the object below.

// IIFE testing
var pokemonRepository = (function() {
  var data = {};

// currently printing out each line, can change each key to be seperate pokemon

var repository =
  {
    name: ['Bulbasaur',' Charmander',' Squirtle'],
    height: [7, 6, 5],
    types: ['grass and poison', ' fire ', ' water ']
  };

//creating printing without using the for loop

  Object.keys(repository).forEach(function (pokemonData) {
    document.write(pokemonData + ': ' + repository[pokemonData] + '<br>');
  });

  // end IIFE testing brackets

})();


// trying for each function to print off each pokemon, but above is already an array. Duh it's using object.keys

// prints all key names in the object

//  var allProperties = Object.keys(repository);
//
// document.write(allProperties);

// trying for each function to print off each pokemon, but above is already an array.

// object.keys(repository).forEach(function(repKeys) {
//   document.write(repository[repKeys]);
// });

// print each pokemon with a for loop



// trying to mess around with colors?
// if (repository[0, 1, 2].types = 'grass') {
//   backgroundColor = '#99C262'
// };
