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
  var hobbits = document.querySelector('.hobbits');
  var rivendell = document.querySelectorAll('h1')[1];
  rivendell.appendChild(hobbits);
}
leaveTheShire();
// Part 7

var rivendell = document.querySelectorAll('h1')[1];
var hobbits = document.querySelector('.hobbits');
var buddies = document.querySelectorAll('ul')[0];
buddies.setAttribute('class', 'buddies1');

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var fellowship = document.createElement('div');
  fellowship.setAttribute('class', 'fellowship');
  rivendell.appendChild(fellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  fellowship.appendChild(hobbits);
  fellowship.appendChild(buddies);
  var forge = fellowship.querySelectorAll('li');
  // after each character is added make an alert that they have joined your party
  //for (var i = 0; i < forge.length; i++) {
   // alert(forge[i].innerText + " have joined your party");
  //}
}
forgeTheFellowShip();
// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  document.querySelectorAll('li')[4].innerHTML = "Gandalf the White";
  // apply style to the element
  // make the background 'white', add a grey border
  document.querySelectorAll('li')[4].style.backgroundColor = 'white';
  document.querySelectorAll('li')[4].style.border = '4px solid grey';
}

theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  //alert("The horn of gondor has been blown");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  document.querySelectorAll('li')[8].style.textDecoration = 'line-through';
  // Remove Boromir from the Fellowship
  var Boromir = document.querySelectorAll('li')[8];
  Boromir.remove();
}

hornOfGondor();
// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  var frodo = document.querySelectorAll('li')[0];
  var sam = document.querySelectorAll('li')[1];
  var mordor = document.querySelectorAll('h1')[2];

  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement('div');
  mordor.appendChild(mountDoom);
  mountDoom.setAttribute('id', 'mount-doom');
}

itsDangerousToGoAlone();
// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  var mordor = document.querySelectorAll('h1')[2];
  var gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  mordor.appendChild(gollum);
  // Remove the ring from Frodo and give it to Gollum
  var ring = document.getElementById('the-ring');
  gollum.appendChild(ring);
  // Move Gollum into Mount Doom
  var mountDoom = document.getElementById('mount-doom');
  mountDoom.appendChild(gollum);
}

weWantsIt();
// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  var gollum = document.getElementById('gollum');
  gollum.remove();
  // remove all the baddies from the document
  buddies.remove();
  // Move all the hobbits back to the shire
  var shire = document.querySelectorAll('h1')[0];
  shire.appendChild(hobbits);
}

thereAndBackAgain();
