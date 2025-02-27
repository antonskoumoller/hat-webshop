let hats = [
  {
    name: "Taco Hat",
    img: "/hat-webshop/images/taco-hat.png",
    description: "Beautyfull taco hat for parties and stuff",
    link: "",
  },
];

let hatcards = hats.map((hat) => {
  // Creating the card div
  let hat = document.createElement("div");
  hat.className = "card";
  hat.style.width = "18rem";

  // Creating the image element
  let img = document.createElement("img");
  img.className = "card-img-top";
  img.src = hatdata.img;
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

  // Appending title, description, and link:
  hatBody.appendChild(title);
  hatBody.appendChild(description);
  hatBody.appendChild(link);

  // Appending image and card body to card
  hat.appendChild(img);
  hat.appendChild(hatBody);

  return hat;
});

let container = document.getElementById("hat-container");

// Appending each card to the container
hatcards.forEach((hat) => {
  container.appendChild(hat);
});
