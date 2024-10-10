const mainBalance = document.querySelector(".balance-value");
// main section
const depositInput = document.querySelector(".deposit-input input"); //Depsit
const depositBtn = document.querySelector(".deposit-button");

// Withdraw

const withdrawInput = document.querySelector(".withdraw-input input");
const withdrawBtn = document.querySelector(".withdraw-button");

// login
const userLoginInput = document.querySelector(".user-login");
const userPinInput = document.querySelector(".user-pin");
const loginBtn = document.querySelector(".login-btn");

//user
const user = "krupali";
const pin = 1234;
const hidden = document.querySelector(".hidden");
const userBalance = document.querySelector(".balance-value");
const welcome = document.querySelector(".welcome");

// Log Out Button

const logOutButton = document.querySelector(".logOutBtn");

let currentBalance = parseFloat(mainBalance.textContent.replace("$", ""));

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const userLogin = userLoginInput.value;
  const userPin = parseInt(userPinInput.value);

  if (userLogin === user && userPin === pin) {
    alert("Login successful!");
    userLoginInput.value = "";
    userPinInput.value = "";

    hidden.classList.remove("hidden");
    currentBalance = 1000;
    mainBalance.textContent = `$${currentBalance.toFixed(2)}`;

    welcome.textContent = `Welcome ${userLogin}!`;

    depositBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const depositAmount = parseFloat(depositInput.value);

      if (!isNaN(depositAmount) && depositAmount > 0) {
        currentBalance += depositAmount;
        mainBalance.textContent = `$${currentBalance.toFixed(2)}`;
        depositInput.value = "";
      } else {
        alert("Please enter a valid deposit amount!");
      }
    });

    withdrawBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const withdrawAmount = parseFloat(withdrawInput.value);

      if (
        !isNaN(withdrawAmount) &&
        withdrawAmount > 0 &&
        withdrawAmount <= currentBalance
      ) {
        currentBalance -= withdrawAmount;
        mainBalance.textContent = `$${currentBalance.toFixed(2)}`;
        withdrawInput.value = "";
      } else {
        alert("Please enter a valid amount!");
      }
    });
  } else {
    alert("Please Enter Valid Details");
  }
});

logOutButton.addEventListener("click", function (e) {
  e.preventDefault();

  hidden.classList.add("hidden");
  welcome.textContent = "Log in to get started!";
});
