function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id"); // Get the 'id' parameter from URL
}

function displayProduct(id) {
    let hats = JSON.parse(localStorage.getItem("allHats")) || [];
    
    let myHat = hats.find(hat => String(hat.id) === id);

    if(!myHat) {
        console.error("Product not found!");
        document.getElementById("product-container").innerHTML = "<p>Product not found!</p>";
        return;    
    }

    let imageContainer = document.createElement("div");
    imageContainer.className = "col-sm-6";

    // Populate the page with product details
    document.getElementById("productImage").src = myHat.img;
    document.getElementById("productName").textContent = myHat.name;
    document.getElementById("productCategory").textContent = `Category: ${myHat.category}`;
    document.getElementById("productDescription").textContent = myHat.description;
    document.getElementById("productPrice").textContent = `Price: ${myHat.price} $`;

}

// Run when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const productId = new URLSearchParams(window.location.search).get("id");
    if (productId) {
        displayProduct(productId);
    }
});