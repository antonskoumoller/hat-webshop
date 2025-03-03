// function displayCards(hatList) {

let hatList = JSON.parse(localStorage.getItem("allHats"));
let hatcards = hatList.map((hat) => {
  // Card-sizing wrapper
  let cardSize = document.createElement("div");
  cardSize.className = "col-sm-6 mb-3 mb-sm-0";

  // Creating the card div
  let hatCard = document.createElement("div");
  hatCard.className = "card border-success mb-3"; // skal ændres til costumized colour: border-dark-primary
  hatCard.style.width = "18rem";

  // hatCard.style.height = "18rem";

  // Creating the image element
  let img = document.createElement("img");
  img.className = "card-img-top";
  img.src = hat.img; // Accessing the correct variable
  img.alt = "Card image";

  // Creating the card body div
  let hatBody = document.createElement("div");
  hatBody.className = "card-body";
  hatBody.style.display = "flex";
  hatBody.style.flexDirection = "column";
  hatBody.style.justifyContent = "space-between";

  // Creating the title element
  let title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = hat.name;

  // Creating the description element
  let description = document.createElement("p");
  description.className = "card-text";
  description.textContent = hat.description;

  // Creating the link element

  let link = document.createElement("a");
  link.href = `/pages/product-page.html?id=${hat.id}`;
  link.className = "btn btn-info"; // -dark-primary
  link.textContent = "Show hat";

  // Appending elements (title, description and link) to the card body
  hatBody.appendChild(title);
  hatBody.appendChild(description);
  hatBody.appendChild(link);

  // Appending image and card body to the card
  hatCard.appendChild(img);
  hatCard.appendChild(hatBody);

  // Append the card to the cardSize wrapper
  cardSize.appendChild(hatCard);

  return cardSize; // Returning the wrapper div
});

let container = document.getElementById("hat-container");
container.className = "row";

// Appending each cardSize div to the container
hatcards.forEach((hatCard) => {
  container.appendChild(hatCard);
});
// }
