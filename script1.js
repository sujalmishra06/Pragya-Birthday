document
  .getElementById("signupform")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const validUsername = "admin";
    const validPassword = "cutestgirl";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === validUsername && password === validPassword) {
      window.location.href = "main.html";
    } else {
      errorMessage.textContent = "Invalid username or password!";
    }
  });
