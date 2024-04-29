document.addEventListener("DOMContentLoaded", function() {
  var loginButton = document.getElementById("loginButton");

  loginButton.addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Do something with the captured username and password
    console.log("Username:", username);
    console.log("Password:", password);
  });
});
