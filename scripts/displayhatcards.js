// Array with hat objects
let hats = [
  {
    name: "Taco Hat",
    img: "/images/taco-hat.png",
    description: "Beautiful taco hat for parties and stuff",
    category: "Fun",
    link: "",
  },
  {
    name: "Kaptajn",
    img: "/images/Kaptajn.jpg",
    description: "Traditional headpiece for the born sailor",
    category: "Outdoor",
    link: "",
  },
  {
    name: "Strawberry",
    img: "/images/Strawberry.png",
    description: "Cute headpiece with a summer feeling",
    category: "Kids",
    link: "",
  },
  {
    name: "Sixpence Cap",
    img: "/images/SixPence.png",
    description:
      "A classic flat cap with a rounded crown, often worn in British working-class fashion.",
    category: "Classic",
    link: "",
  },
  {
    name: "Victorian Tophat",
    img: "/images/VictorianTophat.png",
    description:
      "A tall, elegant hat with a flat crown, popular in the 19th century.",
    category: "Classic",
    link: "",
  },
  {
    name: "Adventure Hat",
    img: "/images/AdventureHat.png",
    description:
      "A tall, elegant hat with a flat crown, popular in the 19th century.",
    category: "Outdoor",
    link: "",
  },
  {
    name: "Emoji Hat",
    img: "/images/ShitHat.png",
    description: "When lifes gives you...",
    category: "Fun",
    link: "",
  },
];

let hatcards = hats.map((hat) => {
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
  link.href = hat.link;
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
hatcards.forEach((cardSize) => {
  container.appendChild(cardSize);
});
