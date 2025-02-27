let hats = [
  {
    name: "Taco Hat",
    img: "/images/taco-hat.png",
    description: "Beautiful taco hat for parties and stuff",
    link: "",
  },
  {
    name: "Kaptajn",
    img: "/images/Kaptajn.jpg",
    description: "Traditional headpiece for the born sailor",
    link: "",
  },
  {
    name: "Strawberry",
    img: "/images/Strawberry.png",
    description: "cute headpiece with a summer feeling",
    link: "",
  },
];

let hatcards = hats.map((hat) => {
  // Creating the card div
  let hatCard = document.createElement("div");
  hatCard.className = "card bg-warning";
  hatCard.style = "width: 300px";

  // Creating the image element
  let img = document.createElement("img");
  img.className = "card-img-top";
  img.style.height = "200px";
  img.style.objectFit = "center";
  img.src = hat.img; // Accessing the correct variable
  img.alt = "Card image";

  // Creating the card body div
  let hatBody = document.createElement("div");
  hatBody.className = "card-body text-center";

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
  link.className = "btn btn-info";
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
