
let displayProduct() {
    let cardSize = document.createElement("div");
    cardSize.className = "col-sm-6";


    // Creating the card div
    let hatCard = document.createElement("div");
    hatCard.className = "card bg-warning";
    hatCard.style.width = "18rem";
    hatCard.style.height = "18rem";


    // Creating the image element
    let img = document.createElement("img");
    img.className = "card-img-top";
    img.style.height = "10rem";
    img.style.objectFit = "cover";
    img.src = hat.img; // Accessing the correct variable
    img.alt = "Card image";

    return product
}