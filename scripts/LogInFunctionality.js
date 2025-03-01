function logIn(fname, email, pw) {
    let user = {fullname: fname, email: email, password: pw};
    localStorage.setItem("currentUser", JSON.stringify(user));
};