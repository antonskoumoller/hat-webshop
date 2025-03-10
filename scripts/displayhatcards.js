function createHatCards() {
  // Retrieving all hats from local storage
  let hatList = JSON.parse(localStorage.getItem("allHats")) || [];

  if (hatList === 0) {
    console.log("No hats found in Local Storage");
    return [];
  }

  return hatList.map((hat) => {
    // Creating card container
    let cardContainer = document.createElement("div");
    cardContainer.className = "col-sm-6 mb-3";
    cardContainer.setAttribute("category", hat.category);
    cardContainer.setAttribute("brand", hat.brand);

    // Creating card
    let card = document.createElement("div");
    card.className = "card card-outline";

    // Creating image element
    let img = document.createElement("img");
    img.className = "card-img-top";
    img.src = hat.img;
    img.alt = "Card image";

    // Creating card body
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Creating title element
    let title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = hat.name;

    // Creating description element
    let description = document.createElement("p");
    description.className = "card-text";
    description.textContent = hat.description;

    // Creating "Show hat" link
    let link = document.createElement("a");
    link.href = `/pages/product-page.html?id=${hat.id}`;
    link.className = "btn btn-outline-success";
    link.textContent = "Show hat";

    // Creating "Add to cart" link
    let link2 = document.createElement("a");
    link2.href = "#";
    link2.setAttribute("onclick", `addToBasket(${hat.id});`);
    link2.className = "btn btn-outline-success";
    link2.textContent = "Add to cart";

    // Appending elements (title, description and link) to cardBody
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(link);
    cardBody.appendChild(link2);

    // Appending image cardBody to the card
    card.appendChild(img);
    card.appendChild(cardBody);

    // Appending card to the cardContainer
    cardContainer.appendChild(card);

    return cardContainer; // Returning one cardContainer for each hat
  });
}

function displayHatCards() {
  let container = document.getElementById("hat-container");
  if (!container) {
    console.log("hat-container not found");
    return;
  }

  container.className = " row row-cols-1 row-cols-sm-2 row-cols-md-4 m-3";
  let hatCards = createHatCards();
  hatCards.forEach((hatCard) => {
    container.appendChild(hatCard);
  });
}

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
function filteredViewBrand(brand) {
  //let hatList = JSON.parse(localStorage.getItem("allHats"));
  let container = document.getElementById("hat-container");
  let containerChildren = container.children;

  if (brand == "allHats") {
    for (let index = 0; index < containerChildren.length; index++) {
      containerChildren[index].className = "col-sm-6 mb-3";
    }
  } else {
    for (let index = 0; index < containerChildren.length; index++) {
      if (containerChildren[index].getAttribute("brand") == brand) {
        containerChildren[index].className = "col-sm-6 mb-3";
      } else {
        containerChildren[index].className = "d-none";
      }
    }
  }
}
