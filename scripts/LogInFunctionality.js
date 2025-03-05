function log() {
  let fname = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let pw = document.getElementById("password").value;
  let user = { fullname: fname, email: email, password: pw };
  localStorage.setItem("currentUser", JSON.stringify(user));
}
function checkIfLoggedIn() {
  console.log(localStorage.getItem("currentUser"));
  if (localStorage.getItem("currentUser") == null) {
    document.getElementById("usernameDisplay").innerHTML = "Welcome";
  } else {
    let userJSON = localStorage.getItem("currentUser");
    let user = JSON.parse(userJSON);
    const name = user.fullname;
    document.getElementById("usernameDisplay").innerHTML =
      "Hats off to you, " + name;
  }
}
