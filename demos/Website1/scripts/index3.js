"use strict"

const toyCategoryDropdown = document.getElementById("toyCategoryDropdown");
const toyList = document.getElementById("toyList");
const toyDetailRow = document.getElementById("toyDetailRow");
const toyNameElement = document.getElementById("toyName");
const toyManufacturer = document.getElementById("toyManufacturer");
const toyAge = document.getElementById("toyAge");

window.onload = () => {
    console.log("onload");
    toyCategoryDropdown.onchange = onToyCategoryDropdownChange;
    toyList.onchange = onToyListChange;
};

function onToyCategoryDropdownChange() {
    console.log("onToyCategoryDropdownChange");

    // figure out what value was selected(which category)
    let selectedCategory = toyCategoryDropdown.value;
    console.log(selectedCategory);

    // clear out toylist from previous selection
    toyList.innerHTML = '';

    // get toys in the selected category
    let toysInCategory = getToysForCategoryCode(selectedCategory);
    console.log(toysInCategory);

    // loop through the toys and add them to the toyList
    for (let i = 0; i < toysInCategory.length; i++) {
        let toy = toysInCategory[i];
        let newOption = document.createElement("option");
        newOption.value = toy.name;
        newOption.innerHTML = toy.name;
        toyList.appendChild(newOption);
    }
}

function getToysForCategoryCode(categoryCode) {
    let toys = []; 

    if (categoryCode === "action_figures") {
        for (let i = 0; i < toys.length; i++) {
            if (toys[i].category === "Action Figures") {
                toys.push(toys[i]);
            }
        }
    } else if (categoryCode === "educational_toys") {
        for (let i = 0; i < toys.length; i++) {
            if (toys[i].category === "Educational Toys") {
                toys.push(toys[i]);
            }
        }
    } else if (categoryCode === "outdoor_toys") {
        for (let i = 0; i < toys.length; i++) {
            if (toys[i].category === "Outdoor Toys") {
                toys.push(toys[i]);
            }
        }
    } else {
        console.log("unrecognized category");
    }

    return toys;
}

function onToyListChange() {
    console.log("onToyListChange");
}

function getToyByName(toyName) {
    let selectedCategory = toyCategoryDropdown.value;
    let toys = getToysForCategoryCode(selectedCategory);

    for (let i = 0; i < toys.length; i++) {
        if (toys[i].name === toyName) {
            return toys[i];
        }
    }
}

// Example usage
let selectedToy = getToyByName("Toy Name");

// set detail row elements to represent this toy.
toyNameElement.innerHTML = selectedToy.name;
toyManufacturer.innerHTML = selectedToy.manufacturer;
toyAge.innerHTML = selectedToy.age_range;

// show detail row
showDetailRow(); 
