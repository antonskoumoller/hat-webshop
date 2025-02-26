let hats = [
  {
    name: "Taco Hat",
    img: "/hat-webshop/images/taco-hat.png",
    description: "Beautiful taco hat for parties and stuff",
    link: "",
  },
];

let hatcards = hats.map((hat) => {
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

let container = document.getElementById("hat-container");

// Appending each card to the container
hatcards.forEach((hatCard) => {
  container.appendChild(hatCard);
});
