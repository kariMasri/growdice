document.addEventListener("DOMContentLoaded", function() {
  var loginButton = document.getElementById("button1");

  loginButton.addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Send login request to the server
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => {
      if (response.ok) {
        // Handle successful login response
        console.log("Login successful");
      } else {
        // Handle login error
        console.error("Login failed");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });
});
