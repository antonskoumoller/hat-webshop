generateBasket();
//resetBasket();
//testBasket();

function resetBasket() {
  // Sets basket to an empty array
  localStorage.setItem("basket", JSON.stringify([]));
}

function generateBasket() {
  // Checks if there is currently a basket in localstorage, if not it adds an empty basket
  if (
    localStorage.getItem("basket") == null ||
    localStorage.getItem("basket") == undefined
  ) {
    localStorage.setItem("basket", JSON.stringify([]));
  }
}

function getBasketClone() {
  // Returns a JS-array representing the basket, either empty or with hats
  generateBasket(); // generates empty basket if not made yet
  return JSON.parse(localStorage.getItem("basket"));
}

function setBasket(newBasket) {
  // @param is a JS-object representing the basket, adds the param as the new basket in local storage
  localStorage.setItem("basket", JSON.stringify(newBasket));
}

function addToBasket(hatIDExp) {
  // @param is the ID of the hat to be added to basket
  generateBasket();
  let localBasket = getBasketClone(); // Creates local clone of current basket
  localBasket.push(
    getHatStorage().find(function (hat) {
      // Adds the hat with the given param as ID to the basket
      return hat.id == hatIDExp;
    })
  );
  setBasket(localBasket); // Sets basket in localstorage to new basket with added hat-item
}

function removeFromBasket(hatIDExp) {
  generateBasket();
  let localBasket = getBasketClone(); // Creates local clone of current basket
  let newBasket = localBasket.filter(function (hat) {
    // Creates new array with hat filtered out
    return hat.id != hatIDExp;
  });
  setBasket(newBasket);
  location.reload();
}

function getHatStorage() {
  // Returns an array containing all hat objects on website
  return JSON.parse(localStorage.getItem("allHats"));
}

function generateBasketCards() {
  let container = document.getElementById("basket-container");
  let localBasket = getBasketClone();
  if (localBasket.length == 0) {
    container.innerHTML =
      "Your basket is currently empty. Visit the shop to buy the best hats in the world!";
  } else {
    let hatcards = localBasket.map((hat) => {
      // Creating the card div
      let hatCard = document.createElement("div");
      hatCard.className = "card";
      hatCard.style.width = "18rem";

      // Creating the image element
      let img = document.createElement("img");
      img.className = "card-img-top";
      img.src = hat.img; // Accessing the correct variable
      img.alt = "Card image cap";

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
      link.href = hat.link;
      link.className = "btn btn-primary";
      link.textContent = "Show hat";

      // Appending title, description, and link to card body:
      hatBody.appendChild(title);
      hatBody.appendChild(description);
      hatBody.appendChild(link);

      // Appending image and card body to the card
      hatCard.appendChild(img);
      hatCard.appendChild(hatBody);

      return hatCard; // Returning the card
    });
    hatcards.forEach((hatCard) => {
      container.appendChild(hatCard);
    });
  }
}

function testBasket() {
  let hat1 = {
    id: "5",
    name: "Victorian Tophat",
    img: "/images/VictorianTophat.png",
    description:
      "A tall, elegant hat with a flat crown, popular in the 19th century.",
    category: "Classic",
    link: "",
  };
  let hat2 = {
    id: "6",
    name: "Adventure Hat",
    img: "/images/AdventureHat.png",
    description:
      "A tall, elegant hat with a flat crown, popular in the 19th century.",
    category: "Outdoor",
    link: "",
  };

  let hat3 = {
    id: "1",
    name: "Taco Hat",
    img: "/images/taco-hat.png",
    description: "Beautiful taco hat for parties and stuff",
    category: "Fun",
    link: "",
  };
  addToBasket(hat1.id);
  addToBasket(hat2.id);
  addToBasket(hat3.id);
  removeFromBasket(hat2.id);
}
