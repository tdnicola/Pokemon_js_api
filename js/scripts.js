/*  Creating var inside of array? Seems like a bad idea...
var repository = [
  var objectOne = {
    name: 'Bulbasaur',
    height: 7,
    types: ['grass', 'poison']
  },
  var objectTwo = {
    name: 'Charmander',
    height: 6,
    types: ['fire']
  },
   var objectThree = {
    name: 'squirtle',
    height: 5,
    types: ['water']
  }
]

for (var i = 0; i < repository.length; i++) {
  document.write(repository[i])
} */

// Another thought process.. creating each variable beforehand and putting them into the Array.
var objectOne = {
  name: 'Bulbasaur',
  types: ['grass', ' poison '],
  height: 7
};

var objectTwo = {
  name: 'Charmander',
  types: ['fire '],
  height: 6
};

var objectThree = {
  name: 'Squirtle',
  types: ['water '],
  height: 5
};

var repository = [
  objectOne,
  objectTwo,
  objectThree
];

for (var i = 0; i < repository.length; i++) {
  document.write(repository[i].name + ' ' +  repository[i].types + '(height: ' + repository[i].height + ')' + ' ' + '<br>');
  if (repository[i].height >= 7) {
    document.write('- Wow, that\'s big <br>');
  };
};
