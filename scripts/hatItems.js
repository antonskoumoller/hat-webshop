function loadHats() {
  if (localStorage.getItem("allHats") === null) {
    // Array with hat objects
    let allHats = [
      {
        id: 1,
        name: "Taco Hat",
        img: "/images/taco-hat.png",
        description: "Beautiful taco hat for parties and stuff",
        fullDescription:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        category: "Fun",
        popular: true,
        price: 500,
      },
      {
        id: 2,
        name: "Kaptajn",
        img: "/images/Kaptajn.jpg",
        description: "Traditional headpiece for the born sailor",
        fullDescription:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        category: "Outdoor",
        popular: true,
        price: 500,
      },
      {
        id: 3,
        name: "Strawberry",
        img: "/images/Strawberry.png",
        description: "Cute headpiece with a summer feeling",
        fullDescription:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        category: "Kids",
        popular: true,
        price: 500,
      },
      {
        id: 4,
        name: "Sixpence Cap",
        img: "/images/SixPence.png",
        description:
          "A classic flat cap with a rounded crown, often worn in British working-class fashion.",
        fullDescription:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        category: "Classic",
        popular: true,
        price: 500,
      },
      {
        id: 5,
        name: "Victorian Tophat",
        img: "/images/VictorianTophat.png",
        description:
          "A tall, elegant hat with a flat crown, popular in the 19th century.",
        fullDescription:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        category: "Classic",
        popular: true,
        price: 500,
      },
      {
        id: 6,
        name: "Adventure Hat",
        img: "/images/AdventureHat.png",
        description:
          "A tall, elegant hat with a flat crown, popular in the 19th century.",
        fullDescription:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        category: "Outdoor",
        popular: true,
        price: 500,
      },
      {
        id: 7,
        name: "Emoji Hat",
        img: "/images/ShitHat.png",
        description: "When lifes gives you...",
        fullDescription:
          "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        category: "Fun",
        popular: false,
        price: 500,
      },
    ];

    localStorage.setItem("allHats", JSON.stringify(allHats));
  }
}
