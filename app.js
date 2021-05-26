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
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 11905,
            "height": 144,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 10500,
            "height": 55,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 70000,
            "height": "372",
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 11600,
            "height": 79,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 16000,
            "height": 59,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 44,
            "height": 20,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.5,
            "height": 9,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ];

    this.createDino = function(species, weight, height, diet, where, when, fact) {
        var newDino = {
            species,
            weight,
            height,
            diet,
            where,
            when,
            fact
        }

        this.dinos.push(newDino);
    }
}

// Create Dino Objects
var dinos = new Dinos();

// Create Human Object
function Human(name, feet, inches, weight, diet) {
    this.name = name;
    this.feet = feet;
    this.inches = inches;
    this.weight = weight;
    this.diet = diet;
}

var human;

// Create Bird Object
function Birds() {
    this.birds = [{
        "species": "Falcon",
        "weight": 3,
        "height": 4,
        "diet": "carnivor",
        "where": "North America",
        "when": "Modern",
        "fact": "Serves as the inspiration for Marvel's Falcon"
    }]
}

var birds = new Birds();

// Use IIFE to get human data from form
var btn = document.getElementById('btn');

btn.addEventListener('click', (function() {
    return function() {
        var name = document.getElementById('name').value;
        var feet = document.getElementById('feet').value;
        var inches = document.getElementById('inches').value;
        var weight = document.getElementById('weight').value;
        var diet = document.getElementById('diet').value;

        human = new Human(name, feet, inches, weight, diet);

        var form = document.getElementById('dino-compare');
        form.remove();
        main.style.display === 'block';

        var mainArr = [];
        var t;

        // Add dinos to mainArr
        for (var i = 0; i < dinos.dinos.length; i++) {
            var item = dinos.dinos[i];

            // Create grid div
            var dino = document.createElement('div');

            dino.classList.add('grid-item');

            // Add species name with h1 tags and append to dino div
            var h1 = document.createElement('h3');

            t = document.createTextNode(item.species);
            h1.appendChild(t);
            dino.appendChild(h1);

            // Add fact
            var p = document.createElement('p');

            t = document.createTextNode(item.fact);
            p.appendChild(t);
            dino.appendChild(p);

            mainArr.push(dino);
        }

        // create grid div
        var humanItem = document.createElement('div');

        humanItem.classList.add('grid-item');

        // add name
        var h1 = document.createElement('h3');
        t = document.createTextNode(human.name);
        h1.appendChild(t);
        humanItem.appendChild(h1);

        mainArr.push(humanItem);

        // Add birds to mainArr
        for (var i = 0; i < birds.birds.length; i++) {
            var item = birds.birds[i];

            // Create grid div
            var bird = document.createElement('div');

            bird.classList.add('grid-item');

            // Add species name with h1 tags and append to bird div
            var h1 = document.createElement('h3');

            t = document.createTextNode(item.species);
            h1.appendChild(t);
            bird.appendChild(h1);

            // Add fact
            var p = document.createElement('p');

            t = document.createTextNode(item.fact);
            p.appendChild(t);
            bird.appendChild(p);

            mainArr.push(bird);
        }

        // shuffle
        mainArr = mainArr.shuffle().slice(0, 9);

        // Push to HTML
        mainArr.forEach(el => {
            main.appendChild(el);
        });
    }
})());

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
dinos.createDino('Velociraptor', 7, 0, 35, 'carnivor', 'North America', 'Late Cretaceous', 'They are smaller than they appear in the movies');

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
dinos.createDino('Indo-Raptor', 14, 2, 70, 'carnivor', 'Central America', 'Modern', 'Made up for Jurrasic World: Lost Kingdom');

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
dinos.createDino('Indomitus Rex', 23005, 155, 'carnivor', 'Central America', 'Modern', 'Created by INGEN for Jurassic World');

// Generate Tiles for each Dino in Array

    // Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
var main = document.getElementById('grid');
main.style.display === 'none';
