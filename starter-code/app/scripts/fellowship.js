console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement('section');
  middleEarth.setAttribute('id', 'middle-earth');
  // inside, add each land as an article tag
  for (var i = 0; i < lands.length; i++)  {
    var article = document.createElement('article');
  // inside each article tag include an h1 with the name of the land
    var h1 = document.createElement('h1');
    h1.innerHTML = lands[i];
    article.setAttribute('class', lands[i]);
    article.appendChild(h1);
    middleEarth.appendChild(article);
  // append middle-earth to your document body
    body.appendChild(middleEarth);
}
}

makeMiddleEarth();
// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
var list = document.createElement('ul');
list.setAttribute('class', 'hobbits');
  for (var i = 0; i < hobbits.length; i++) {
    var li = document.createElement('li');
    li.textContent = hobbits[i];
    li.setAttribute('class', 'hobbit')
    list.appendChild(li);
}
    var hobbit = document.querySelector('article');
    hobbit.appendChild(list);
}

makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
var ring = document.createElement('div');
ring.setAttribute('id', 'the-ring');
ring.setAttribute('class', 'magic-imbued-jewelry');
ring.addEventListener('click', nazgulScreech);
var Frodo = document.querySelector('li');
Frodo.appendChild(ring);
}

keepItSecretKeepItSafe();
// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside');
  var list = document.createElement('ul');
    for (var i = 0; i < buddies.length; i++) {
        var li = document.createElement('li');
        li.className = "buddies";
        li.textContent = buddies[i];
        list.appendChild(li);
        aside.appendChild(list);
    }
        var rivendell = document.querySelectorAll("h1")[1];
        rivendell.appendChild(aside);
}

makeBuddies();
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.getElementsByClassName('buddies')[3].innerHTML = "Aragorn";
  //makeBuddies.node.replaceChild('Strider', 'Aragorn');
}

beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var location = document.getElementsByClassName('.Rivendell');
  var move = document.querySelectorAll('.hobbits');
  var from = document.getElementsByClassName('.The Shire');
  location.appendChild(from).removeChild(move);
}

leaveTheShire();
// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
