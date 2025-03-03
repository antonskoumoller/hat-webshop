generateHatStorage();
let allHats = [
    {
        hatid: "1",
        name: "Taco Hat",
        img: "/hat-webshop/images/taco-hat.png",
        description: "Beautiful taco hat for parties and stuff",
        link: "",
      }
]

function generateHatStorage(){
    if(localStorage.getItem("allHats")==null){
        localStorage.setItem("allHats", JSON.stringify(
            allHats
        ))
    }
}

