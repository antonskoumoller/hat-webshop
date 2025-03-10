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
        brand: "Gucci",
      },
      {
        id: 2,
        name: "Captain",
        img: "/images/Kaptajn.jpg",
        description: "Traditional headpiece for the born sailor",
        fullDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Outdoor",
        popular: true,
        price: 500,
        brand: "Gucci",
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
        brand: "Gucci",
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
        brand: "Gucci",
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
        brand: "Gucci",
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
        brand: "Gucci",
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
        brand: "Prada",
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
        brand: "Prada",
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
        brand: "Prada",
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
        brand: "Prada",
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
        brand: "Prada",
      },
      {
        id: 12,
        name: "Cat hat",
        img: "/images/hat-for-cat.jpg",
        description: "If you have a cat, buy a hat for the cat",
        fullDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Fun",
        popular: false,
        price: 99,
        brand: "Von Dutch",
      },
      {
        id: 13,
        name: "Graduation hat",
        img: "/images/graduation-hat.png",
        description: "Show of your knowledge with this hat on your head",
        fullDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Classic",
        popular: false,
        price: 315,
        brand: "Von Dutch",
      },
      {
        id: 14,
        name: "Bamboo hat",
        img: "/images/bamboo-hat.jpg",
        description:
          "A hat made of bamboo. Perfect for the summer, or if you like bamboo, or both.",
        fullDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Outdoor",
        popular: false,
        price: 101,
        brand: "Von Dutch",
      },
      {
        id: 15,
        name: "Windy hat",
        img: "/images/windy-hat.png",
        description:
          "A hat that is perfect for windy days. It will not fly off your head. Probably, we have not tested it.",
        fullDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Outdoor",
        popular: false,
        price: 299,
        brand: "Von Dutch",
      },
      {
        id: 16,
        name: "Chicken hat",
        img: "/images/chick-hat.jpg",
        description:
          "A hat that looks like a chicken. Perfect for the chicken lover in your life. Or if you are a chicken. Or if you just like chickens. ",
        fullDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Fun",
        popular: false,
        price: 9,
        brand: "Von Dutch",
      },
    ];

    localStorage.setItem("allHats", JSON.stringify(allHats));
  }
}
