// function displayCards(hatList) {

let hatList = JSON.parse(localStorage.getItem("allHats"));
let hatcards = hatList.map((hat) => {
  // Card-sizing wrapper
  let cardSize = document.createElement("div");
  cardSize.className = "col-sm-6 mb-3";
  cardSize.className = "col-sm-6 mb-3";
  cardSize.setAttribute("category", hat.category);

  // Creating the card div
  let hatCard = document.createElement("div");
  hatCard.className = "card card-outline";
  hatCard.className = "card card-outline";

  // Creating the image element
  let img = document.createElement("img");
  img.className = "card-img-top";
  img.src = hat.img; // Accessing the correct variable
  img.alt = "Card image";

  // Creating the card body div
  let hatBody = document.createElement("div");
  hatBody.className = "card-body";

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
  link.className = "btn btn-outline-success";
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
container.className = "row row-cols-1 row-cols-sm-2 row-cols-md-4";

// Appending each cardSize div to the container
hatcards.forEach((hatCard) => {
  container.appendChild(hatCard);
});
// }

function filteredView(category) {
  //let hatList = JSON.parse(localStorage.getItem("allHats"));
  let container = document.getElementById("hat-container");
  let containerChildren = container.children;

  if (category == "allHats") {
    for (let index = 0; index < containerChildren.length; index++) {
      containerChildren[index].className = "col-sm-6 mb-3";
    }
  } else {
    for (let index = 0; index < containerChildren.length; index++) {
      if (containerChildren[index].getAttribute("category") == category) {
        containerChildren[index].className = "col-sm-6 mb-3";
      } else {
        containerChildren[index].className = "d-none";
      }
    }
  }
}
