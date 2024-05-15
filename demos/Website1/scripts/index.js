"use strict"

const toyCategoryDropdown = document.getElementById("toyCategoryDropdown")
const toyList = document.getElementById("toyList")
const toyDetailRow = document.getElementById("toyDetailRow")
const toyName = document.getElementById("toyName")
const toyManufacturer = document.getElementById("toyManufacturer")
const toyAge = document.getElementById("toyAge")


window.onload =() => {
    console.log("onload")
    toyCategoryDropdown.onchange = onToyCategoryDropdownChange;
    toyList.onchange = onToyListChange;
};


function onToyCategoryDropdownChange(){
    console.log("onToyCategoryDropdownChange")

    // figure out what value was selected(which category)
    let selectedCategory = toyCategoryDropdown.value;
    console.log(selectedCategory);
    // clear outtoylist from previous selcetion

    toyList.options.length = 0;
    // loop through correct array and add values to the toyList at a time.
    let toysInCategory = getToysForCategoryCode(selectedCategory);

console.log(toysInCategory);

for(let toy in toysInCategory){
    for(let toy in toysInCategory){
let newOption = document.createElement("option");
newOption.value = toyNamenewOption.innerHTML = toyName;
toyList.appendChild(newOption);

    }
}



function getToysForCategoryCode(categoryCode){

}


if(selectedCategory == "action_figures"){
    toysInCategory= toys.Toys["Action Figures"];

}
else if(selectedCategory =="educational_toys"){
    toysInCategory= toys.Toys["Educational Toys"]


}
else if(selectedCategory == "outdoor_toys"){
    toysInCategory= toys.Toys["Outdoor Toys"]

}
else{
    console.log("unrecognized category")

}

return[];

}






function onToyListChange() {
    console.log("onToyListChange")
    // loop up selcted toy
    // show detail row
    // set detail row elements to represent this toy.



}