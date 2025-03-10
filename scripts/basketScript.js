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
  generateBasket();
  // Creates local clone of current basket
  let localBasket = getBasketClone();

  let hat = getHatStorage().find(function (hat) {
    return hat.id == hatIDExp;
  });

  let basketItem = localBasket.find(function (item) {
    return item.hat.id == hatIDExp;
  });

  //check if the hat is already in the basket, and increment amount
  if (basketItem) {
    basketItem.amount += 1;
  } else {
    localBasket.push({ hat: hat, amount: 1 });
  }

  // Sets basket in localstorage to new basket with added hat-item
  setBasket(localBasket);
  generateBasketCards();
}

function removeFromBasket(hatIDExp) {
  generateBasket();
  // Creates local clone of current basket
  let localBasket = getBasketClone();
  let hat = localBasket.find(function (item) {
    return item.hat.id == hatIDExp;
  });

  // Removes hat from basket if amount is 1, otherwise decrements amount
  if (hat.amount > 1) {
    hat.amount -= 1;
  } else {
    localBasket = localBasket.filter((item) => item.hat.id != hatIDExp);
  }

  setBasket(localBasket);
  generateBasketCards();
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
    container.innerHTML = "";
    let hatList = localBasket.map((item) => {
      let hatItem = document.createElement("li");
      hatItem.className = "basketItem";
      hatItem.innerHTML = `
        <div class="container-basketItems row">
          <div class="hatAttributes col-md-8">
                <img src="${item.hat.img}"></img>
                <p style=margin-top:12px;>${item.hat.description}</p>
          </div>

          <div class="priceAttributes col-md-4">
            <div class="row">
              <div class="col-md-8" style="display: flex; flex-direction: column;">
                <h2  class="h2-margin-bottom">Amount</h2>
                <div style="display: flex; flex-direction: row;">
                  <button type="button" class="btn btn-outline-success" onclick="removeFromBasket('${
                    item.hat.id
                  }')">-</button>
                  <p id="item-amount">${item.amount}</p>
                  <button type="button" class="btn btn-outline-success" onclick="addToBasket('${
                    item.hat.id
                  }')">+</button>
                </div>
              </div>
              <div class="col-md-4">
                <h2 class="h2-margin-bottom">Price</h2>
                <p>${item.hat.price * item.amount} kr</p>
              </div>
            </div>
          </div>
        </div>`;
      return hatItem;
    });
    let list = document.createElement("ul");
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
