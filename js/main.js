"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    var html = '<div class="col-12 col-med-6 col-lg-6">';
    html += '<h5 style="font-weight: bold; color: #000">' + coffee.name + '</h5>';
    html += '<p><span>' + coffee.roast + '</span></p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });

    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//// Coffee Search Function /////

var coffeeSearch = () => {
    var a = '';
    for (var i = 0; i < coffees.length; i++) {
        if (coffees[i].name.toLowerCase().includes(searchCoffee.value)) {
            a += renderCoffee(coffees[i]);
        }
    }
    tbody.innerHTML = a;
};

////// Add Coffee ////////

// CARSON ADD
// Adds new coffee to coffees[] array, then
// displays new list of coffees
function addCoffee(e) {
    e.preventDefault();
    var newCoffee = {
        id: coffees.length + 1,
        name: nameAdd.value,
        roast: roastAdd.value
    };
    console.log(newCoffee);
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}
        // CARSON ADD
var addCoffee = input => {
    input.preventDefault();

    var a = '';
    var newCoff = {};
    newCoff.id = coffees.length + 1;
    newCoff.name = addNewCoffeeName.value;
    newCoff.roast = addNewCoffeeRoast.value;

    coffees.push(newCoff);
    a += renderCoffees(coffees);
    tbody.innerHTML = a;
};

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffeesOriginal = [
    { id: 1, name: 'Light City', roast: 'light' },
    { id: 2, name: 'Half City', roast: 'light' },
    { id: 3, name: 'Cinnamon', roast: 'light' },
    { id: 4, name: 'City', roast: 'medium' },
    { id: 5, name: 'American', roast: 'medium' },
    { id: 6, name: 'Breakfast', roast: 'medium' },
    { id: 7, name: 'High', roast: 'dark' },
    { id: 8, name: 'Continental', roast: 'dark' },
    { id: 9, name: 'New Orleans', roast: 'dark' },
    { id: 10, name: 'European', roast: 'dark' },
    { id: 11, name: 'Espresso', roast: 'dark' },
    { id: 12, name: 'Viennese', roast: 'dark' },
    { id: 13, name: 'Italian', roast: 'dark' },
    { id: 14, name: 'French', roast: 'dark' },
];

var coffees = coffeesOriginal.reverse();


var tbody               = document.querySelector('#coffees');
var submitButton        = document.querySelector('#submit');
var roastSelection      = document.querySelector('#roast-select');
var searchCoffee        = document.getElementById('search__coffee');
var addNewCoffeeName    = document.getElementById('add__coffee__name');
var addNewCoffeeRoast   = document.getElementById('add__coffee__roast');
var addNewCoffeeButton  = document.getElementById('add__new__coffee');

tbody.innerHTML = renderCoffees(coffees);

/////// Event Listeners ///////////////

submitButton.addEventListener('click', updateCoffees);
searchCoffee.addEventListener('keyup', coffeeSearch, false);
addNewCoffeeButton.addEventListener('click', addCoffee, false);