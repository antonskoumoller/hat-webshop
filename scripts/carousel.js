//------------------------------------------
//Function to load cards for the caroussel
//------------------------------------------
//TODO: Should scale if multiple caroussels
function getCarouselCards(itemsPerSlide) {
  let carousselHats = JSON.parse(localStorage.getItem("allHats")).filter(
    (hat) => hat.popular
  );

  let container = document.getElementById("slides");

  for (let i = 0; i < carousselHats.length; i += itemsPerSlide) {
    // Create a carousel item (and give active, if the first one)
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item" + (i === 0 ? " active" : "");

    //Create row
    const row = document.createElement("div");
    row.className = "row";
    //add cards to the row
    for (let j = i; j < i + itemsPerSlide && j < carousselHats.length; j++) {
      //create next column (with size '1/itemsPerSlide' of the container)
      const col = document.createElement("div");
      col.className = `col-md-${12 / itemsPerSlide}`;

      //The inner html of the column
      //Uses template-literal (notice backtick!)
      col.innerHTML = `
                  <div class="card">
                      <img src="${carousselHats[j].img}" class="card-img-top" alt="${carousselHats[j].name}">
                      <div class="card-body">
                          <h5 class="card-title">${carousselHats[j].name}</h5>
                          <p class="card-text">${carousselHats[j].description}</p>
                          <a class="btn btn-outline-success" href="/pages/product-page.html?id=${carousselHats[j].id}">Show hat<a/>
                      </div>
                  </div>
              `;
      //add column to row
      row.appendChild(col);
    }
    //Add row to carousselItem, and add CarouselItem to the carousel
    carouselItem.appendChild(row);
    container.appendChild(carouselItem);
  }
}
