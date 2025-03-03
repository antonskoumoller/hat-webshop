let basket = [{
    hatid: "1",
  name: "Taco Hat",
  img: "/images/taco-hat.png",
  description: "Beautiful taco hat for parties and stuff",
  link: "",
},];
let hats = [
    {
        hatid: "1",
      name: "Taco Hat",
      img: "/images/taco-hat.png",
      description: "Beautiful taco hat for parties and stuff",
      link: "",
    },
  ];
localStorage.setItem("allHats", JSON.stringify(hats));
localStorage.setItem("basket", JSON.stringify(basket));

let allHats = JSON.parse(localStorage.getItem("allHats"));
let userBasket = JSON.parse(localStorage.getItem("basket"));

function addToBasket(hatIDExp) {
    if (localStorage.getItem("basket")==null){
        localStorage.setItem("basket", JSON.stringify([]));
    }
    let localBasket = JSON.parse(localStorage.getItem("basket"));
    localBasket.push(allHats.find(function(hat) {
        return hat.hatid==hatIDExp;
    }))
    localStorage.setItem("basket", JSON.stringify(localBasket));
    userBasket=localBasket;
}

function removeFromBasket(hatIDExp) {
    let localBasket=JSON.parse(localStorage.getItem("basket"));
    let temp = localBasket.filter(function(hat) {
        return hat.hatid != hatIDExp;
    });
    localStorage.setItem("basket", JSON.stringify(temp));
    userBasket=localBasket;
}

function generateBasketCards() {
    let container = document.getElementById("basket-container");
    if (basket.length==0) {
        container.innerHTML = "Your basket is currently empty. Visit the shop to buy the best hats in the world!"
        
    } else {
        let hatcards = basket.map((hat) => {
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
