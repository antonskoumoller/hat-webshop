let allHats = [
    {
        id: "1",
        name: "Taco Hat",
        img: "/images/taco-hat.png",
        description: "Beautiful taco hat for parties and stuff",
        category: "Fun",
        link: "",
      },
      {
        id: "2",
        name: "Kaptajn",
        img: "/images/Kaptajn.jpg",
        description: "Traditional headpiece for the born sailor",
        category: "Outdoor",
        link: "",
      },
      {
        id: "3",
        name: "Strawberry",
        img: "/images/Strawberry.png",
        description: "Cute headpiece with a summer feeling",
        category: "Kids",
        link: "",
      },
      {
        id: "4",
        name: "Sixpence Cap",
        img: "/images/SixPence.png",
        description:
          "A classic flat cap with a rounded crown, often worn in British working-class fashion.",
        category: "Classic",
        link: "",
      },
      {
        id: "5",
        name: "Victorian Tophat",
        img: "/images/VictorianTophat.png",
        description:
          "A tall, elegant hat with a flat crown, popular in the 19th century.",
        category: "Classic",
        link: "",
      },
      {
        id: "6",
        name: "Adventure Hat",
        img: "/images/AdventureHat.png",
        description:
          "A tall, elegant hat with a flat crown, popular in the 19th century.",
        category: "Outdoor",
        link: "",
      },
      {
        id: "7",
        name: "Emoji Hat",
        img: "/images/ShitHat.png",
        description: "When lifes gives you...",
        category: "Fun",
        link: "",
      },
]

generateHatStorage();
resetHatStorage();


function generateHatStorage(){
    if(localStorage.getItem("allHats")==null || localStorage.getItem("allHats")== undefined){
        localStorage.setItem("allHats", JSON.stringify(
            allHats
        ))
    }
}

function resetHatStorage() {
    localStorage.setItem("allHats", JSON.stringify(
        allHats
    ))
}

