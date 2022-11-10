/*Iteración 1: crear las tarjetas
Cluedo tiene tres tipos de cartas diferentes : sospechosos , habitaciones y armas .

Vamos a crear un array para cada tipo de tarjeta . Estas matrices deben llamarse suspectsArray, weaponsArray, roomsArray. Cada matriz contendrá objetos , donde cada objeto representa una carta.

Toda la información que necesita sobre sospechosos , habitaciones y armas se puede encontrar en el DATA.mdarchivo.

Sugerencia : copie estos datos en el clue.jsarchivo y modele en objetos anidados dentro de sus matrices de tarjetas. Esta es una gran oportunidad para que experimente con los accesos directos de IDE, la selección de varias líneas, buscar y reemplazar, y otras funciones excelentes que ofrece VS Code.


sospechosos
Los seis posibles sospechosos en Clue tienen nombre , apellido , ocupación , edad , descripción , imagen y color .

Para completar esta iteración, debe tener una matriz similar a la siguiente:

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur'
    // ...
  }
  // ...
];

armas
Hay un total de nueve armas . Cada uno de ellos tiene un nombre y peso diferente .


Habitaciones
El tablero de juego representa los planos de la mansión y cuenta con quince habitaciones diferentes . Cada habitación solo tendrá un nombre .


Iteración 2: Crear el misterio
Al comienzo del juego, los jugadores barajan cada una de las pilas de cartas para crear una combinación de sospechoso , arma y habitación . Este será el misterio a resolver.


Selector aleatorio
Declare una función llamada selectRandompara seleccionar aleatoriamente un elemento de una pila de cartas. La función debe esperar un arraycomo argumento y debe devolver un elemento aleatorio de la matriz.


Crea el misterio
Declare una función named pickMysteryque no tome argumentos y devuelva un objeto con tres propiedades: sospechoso , arma y habitación , cada una con un valor de una carta de ese tipo específico. Puede obtener una carta aleatoria de cada tipo llamando selectRandomen cada pila de cartas.


Iteración 3: Revelar el misterio
Por fin, estamos listos para revelar el misterio.

Declare una función named revealMysteryque reciba un sobre object (con la forma del objeto devuelto por pickMystery) como único argumento y devuelva un mensaje de revelación en el siguiente formato:

¡<FIRST NAME> <LAST NAME> mató al Sr. Boddy usando el <ARMA> en la <HABITACIÓN>!


*/

// // ITERATION 1

// // Suspects Array
const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur",
  },

  {
    firstName: "Doctor",
    lastName: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist",
  },

  {
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer",
  },

  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor",
  },

  {
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité",
  },

  {
    firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description:
      "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player",
  },
];

// // Weapons Array

// const weaponsArray = [];

// // ITERATION 2

// function selectRandom() {}

// function pickMystery() {}

// // ITERATION 3

// function revealMystery() {}

// Characters Collection
var charactersArray = [
  {
    nickname: "mrGreen",
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur",
  },

  {
    nickname: "drOrchid",
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation: "Scientist",
  },

  {
    nickname: "profPlum",
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer",
  },

  {
    nickname: "missScarlet",
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor",
  },

  {
    nickname: "mrsPeacock",
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité",
  },

  {
    nickname: "mrMustard",
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description:
      "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player",
  },
];

// Rooms' Collection
var roomsArray = [
  "Dinning Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio",
];

// Weapons Collection
var weaponsArray = [
  { name: "rope", weight: 10 },
  { name: "knife", weight: 8 },
  { name: "candlestick", weight: 2 },
  { name: "dumbbell", weight: 30 },
  { name: "poison", weight: 2 },
  { name: "axe", weight: 15 },
  { name: "bat", weight: 13 },
  { name: "trophy", weight: 25 },
  { name: "pistol", weight: 20 },
];

//-------------------------------------------------Game Functionalities----------------

//random selector method for character---------

function randomSelectorForName(Name) {
  var murderer = Name[Math.round(Math.random() * (Name.length - 1))];
  //console.log("The murderer is " + murderer.nickname);
  return murderer;
}

//randomSelectorForName(charactersArray);

//random selector method for weapon---------

function randomSelectorForWeapon(stringWeapon) {
  var weapon =
    stringWeapon[Math.round(Math.random() * (stringWeapon.length - 1))];
  //console.log("The weapon used for murder is " + weapon.name);
  return weapon;
}
//randomSelectorForWeapon(weaponsArray);

//random selector method for murder Room------

function randomSelectorForRoom(stringRoom) {
  var room = stringRoom[Math.round(Math.random() * (stringRoom.length - 1))];
  return room;
  //console.log("The murder took place in " + room);
}
//randomSelectorForRoom(roomsArray);

// Creating array for randomselector-----

function pickMistery() {
  var misteryEnvelope = [];
  misteryEnvelope.push(randomSelectorForRoom(roomsArray));
  misteryEnvelope.push(randomSelectorForName(charactersArray));
  misteryEnvelope.push(randomSelectorForWeapon(weaponsArray));
  //console.log(misteryEnvelope);
  return misteryEnvelope;
}

//pickMistery();

//Revealing the mystery--------

function revealMistery() {
  var mysteryArray = pickMistery();
  //console.log(mysteryArray);
  console.log(
    mysteryArray[1].first_name +
      " " +
      mysteryArray[1].last_name +
      " killed Mr.Boddy using the " +
      mysteryArray[2].name +
      " in the " +
      mysteryArray[0] +
      " !!!!"
  );
}

revealMistery();
