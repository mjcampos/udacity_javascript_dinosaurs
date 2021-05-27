Array.prototype.shuffle = function() {
    var currentIndex = this.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this[currentIndex];
        this[currentIndex] = this[randomIndex];
        this[randomIndex] = temporaryValue;
    }

    return this;
}

// Create Dino Constructor
function Dinos() {
    this.dinos = [
        {
            "species": "Triceratops",
            "weight": 13000,
            "height": 114,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh",
            "image": "images/triceratops.png"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long.",
            "image": "images/tyrannosaurus rex.png"
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years.",
            "image": "images/anklyosaurus.png"
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991.",
            "image": "images/brachiosaurus.png"
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines.",
            "image": "images/stegosaurus.png"
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas.",
            "image": "images/elasmosaurus.png"
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur.",
            "image": "images/pteranodon.png"
        }
    ];

    this.compareHeight = function(human) {
        var localDinos = this.dinos;
        var humanHeight = human.height;

        for(var i = 0; i < localDinos.length; i++) {
            var height = localDinos[i].height;

            if(humanHeight > height) {
                localDinos[i].fact = "A human is taller than this guy!";
            } else if(humanHeight < height) {
                localDinos[i].fact = "A human is shorter than this guy!";
            }
        }

        this.dinos = localDinos;
    }

    this.compareWeight = function(human) {
        var localDinos = this.dinos;
        var humanWeight = human.weight;

        for(var i = 0; i < localDinos.length; i++) {
            var weight = localDinos[i].weight;

            if(humanWeight > weight) {
                localDinos[i].fact = "A human is lighter than this guy!";
            } else if(humanWeight < weight) {
                localDinos[i].fact = "A human is heavier than this guy!";
            }
        }

        this.dinos = localDinos;
    }

    this.generateRandomFact = function(human) {
        var rndNum = Math.floor(Math.random() * 2);

        switch (rndNum) {
            case 0:  // Compare height
                this.compareHeight(human);
                break;
            case 1:  // Compare weight
                this.compareWeight(human);
            default:
                break;
        }
    }
}

// Create Dino Objects
var dinos = new Dinos();
var dinoArr = dinos.dinos;

// Create Human Object
function Human(name, feet, inches, weight, diet) {
    this.species = name;
    this.height = feet + (inches/12);
    this.weight = weight;
    this.diet = diet;
    this.where = "Worldwide";
    this.when = "Stone Age";
    this.fact = "Its's a mircale on an astronomical level that they still exist";
    this.image = "images/human.png";
}

// Create Bird Object
function Birds() {
    this.birds = [{
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs.",
        "image": "images/pigeon.png"
    }];
}

var birds = new Birds();
var birdArr = birds.birds;

function createTile(item) {
    var t;  // Global text node

    // Create parent grid div
    var parentDiv = document.createElement('div');
    parentDiv.classList.add('grid-item');

    // Add species name with h3 tags and append to parentDiv
    var h3 = document.createElement('h3');
    t = document.createTextNode(item.species);
    h3.appendChild(t);
    parentDiv.appendChild(h3);

    // Add fact
    var p = document.createElement('p');
    t = document.createTextNode(item.fact);
    p.appendChild(t);
    parentDiv.appendChild(p);

    // Add image
    if(item.image) {
        var image = document.createElement('img');
        image.src = item.image;
        parentDiv.appendChild(image);
    }

    // return parentDiv
    return parentDiv;
}

// Remove form from index.html
function removeForm() {
    var form = document.getElementById('dino-compare');
    form.remove();
    main.style.display === 'block';
}

// Use IIFE to get human data from form
var btn = document.getElementById('btn');

btn.addEventListener('click', (function() {
    return function() {
        var mainArr = [];

        var name = document.getElementById('name').value;
        var feet = document.getElementById('feet').value;
        var inches = document.getElementById('inches').value;
        var weight = document.getElementById('weight').value;
        var diet = document.getElementById('diet').value;
        var human = new Human(name, feet, inches, weight, diet);

        dinos.generateRandomFact(human);

        removeForm();

        // Add dinos to mainArr
        for (var i = 0; i < dinoArr.length; i++) {
            var item = dinoArr[i];

            mainArr.push(createTile(item));
        }

        // Add human to mainArr
        mainArr.push(createTile(human));

        // Add birds to mainArr
        for(var i = 0; i < birdArr.length; i++) {
            var item = birdArr[i];

            mainArr.push(createTile(item));
        }

        // shuffle
        mainArr = mainArr.shuffle().slice(0, 9);

        // Push to HTML
        mainArr.forEach(el => main.appendChild(el));
    }
})());

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

    // Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
var main = document.getElementById('grid');
main.style.display === 'none';
