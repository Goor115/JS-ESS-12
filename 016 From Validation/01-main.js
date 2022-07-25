const form = document.forms[0];
form.addEventListener("submit", function (e) {
    let login = form.login.value;
    // let password = form.login.password;
    let password = form.password.value;
    alert(login + " " + password);

});

form.login.addEventListener("focus", function () {
    document.querySelector("#loginHint").style.display = "inline";
});

form.login.addEventListener("blur", function () {
    document.querySelector("#loginHint").style.display = "none";
});

form.password.addEventListener("focus", function () {
    document.querySelector("#passwordHint").style.display = "inline";
});

form.password.addEventListener("blur", function () {
    document.querySelector("#passwordHint").style.display = "none";
});