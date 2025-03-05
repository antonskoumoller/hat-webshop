document.addEventListener("DOMContentLoaded", function () {
  // Insert the entire navbar into the #navbar div
  document.getElementById("navbar").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="/images/drippin-hats-logo.png" width="50" height="50">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="px-2">
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link" href="/pages/index.html">Home</a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link" href="/pages/shop-page.html">Shop</a>
                    </li>

                    <li class="nav-item d-flex align-items-center px-2">
                        <a class="nav-link" href="/pages/basket.html">
                        <span class="px-2" id="usernameDisplay">Username</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket"
                            viewBox="0 0 16 16">
                            <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
                        </svg>
                        </a>
                    </li>
                    <li class="nav-item dropdown-lg px-2">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            Login
                        </a>
                        <div class="dropdown-menu dropdown-menu-right p-2">
                            <div class="form-group">
                                <label for="fullName">Full name</label>
                                <input type="fullname" class="form-control" id="fullName" placeholder="Jane Doe">
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="email@example.com">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-primary" onclick="log(); checkIfLoggedIn();">Sign in</button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    `;

  // **Step 2: Highlight Active Page**
  highlightActiveNav();
});

// Function to highlight the active page
function highlightActiveNav() {
  const currentPage = window.location.pathname.split("/").pop(); // Get current filename

  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href").includes(currentPage)) {
      link.parentElement.classList.add("active"); // Add active class to <li>
    } else {
      link.parentElement.classList.remove("active"); // Ensure others are not active
    }
  });
}
