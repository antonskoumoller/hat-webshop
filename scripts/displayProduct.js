
// takes ID from URL:
let urlParams = new URLSearchParams(window.location.search);
let hatId = parseInt(urlParams.get("id"));

//gets the selecet hat from local storridge:
let allHats = JSON.parse(localStorage.getItem("allHats"));
let hat = allHats.find((hat) => hat.id === hatId);
console.log(hat);

//Gives hats attributes to the page
//sets h1:
document.getElementById("hatName").textContent = hat.name;
// sets image:
document.getElementById("hatImage").src = hat.img;
//sets fullDescription;
document.getElementById("hatDescription").textContent = hat.fullDescription;

