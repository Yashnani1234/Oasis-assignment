const users = {};


const registrationUsername = document.getElementById("registrationUsername");
const registrationPassword = document.getElementById("registrationPassword");

const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");

const loginPage = document.getElementById("loginPage");
const homePage = document.getElementById("homePage");
const registrationPage = document.getElementById("registrationPage");

function registerUser() {
  if (registrationUsername.value in users) {
    alert("Username already exists. Please choose a different one.");
  } else {
    users[registrationUsername.value] = registrationPassword.value;
    alert("Registration successful!");
    showLogin()
    
    registrationUsername.value = "";
    registrationPassword.value = "";
  }
}

function loginUser() {
  if (loginUsername.value in users && users[loginUsername.value] === loginPassword.value) {
    loginPage.style.display = "none";
    homePage.style.display = "block";
  } else {
    alert("Incorrect username or password. Please try again.");
  }

  loginUsername.value = "";
  loginPassword.value = "";
}

function showLogin() {
  registrationPage.style.display = "none";
  loginPage.style.display = "block";
}

function showRegistration() {
  loginPage.style.display = "none";
  registrationPage.style.display = "block";
}

function logoutUser() {
  loginUsername.value = "";
  loginPassword.value = "";

  // Hide the secured page and show the login page
  homePage.style.display = "none";
  loginPage.style.display = "block";
}
