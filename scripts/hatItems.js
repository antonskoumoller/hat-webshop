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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Fun",
        popular: false,
        price: 500,
      },
      {
        id: 8,
        name: "Diamont cap",
        img: "/images/diamont-cap.jpg",
        description: "When you want to shine",
        fullDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Fashion",
        popular: false,
        price: 99999,
      },
      {
        id: 9,
        name: "Fishing hat with fish",
        img: "/images/Fish-hat.jpg",
        description: "A lucky hat for your fishing trip",
        fullDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Outdoor",
        popular: false,
        price: 1,
      },
      {
        id: 10,
        name: "Pink cowboy",
        img: "/images/Pink-cowboy.jpg",
        description: "When you feel like a pink cowboy",
        fullDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Fashion",
        popular: false,
        price: 149,
      },
      {
        id: 11,
        name: "Red hat",
        img: "/images/red-hat.jpg",
        description: "This is a hat that is red. Buy it if you want to",
        fullDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Fashion",
        popular: false,
        price: 250,
      },
    ];

    localStorage.setItem("allHats", JSON.stringify(allHats));
  }
}
