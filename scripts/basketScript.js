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
  if (localBasket.length === 0) {
    container.innerHTML =
      "Your basket is currently empty. Visit the shop to buy the best hats in the world!";
  } else {
    let hatList = localBasket.map((hat) => {
      let hatItem = document.createElement("li");
      hatItem.className = "basketItem";
      hatItem.innerHTML = `
        <div class="container-basketItems row">
          <div class="hatAttributes col-md-8">
                <img src="${hat.img}"></img>
                <p>${hat.description}</p>
          </div>

          <div class="priceAttributes col-md-4">
            <div class="row">
              <div class="col-md-8" style="display: flex; flex-direction: column;">
                <p>Amount</p>
                <div style="display: flex; flex-direction: row;">
                  <button type="button" class="btn btn-outline-success">-</button>
                  <p id="item-amount">1,2,3</p>
                  <button type="button" class="btn btn-outline-success">+</button>
                </div>
              </div>
              <div class="col-md-4">
                <p>Price</p>
              </div>
            </div>
          </div>
        </div>`;
      return hatItem;
    });
    list = document.createElement("ul");
    list.className = "list-group";

    hatList.forEach((hat) => {
      list.appendChild(hat);
    });

    container.appendChild(list);
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
