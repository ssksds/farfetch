document.querySelector("#login").addEventListener("click", login);
function login() {
  window.location.href = "login.html";
}

function profile() {
  var ans = document.querySelector("#navprofile").value;
  console.log(ans);
  if (ans == "account") {
    window.location.href = "myaccount.html";
  }
}
  //  SignUp

  document.querySelector("form").addEventListener("submit", loginUser);
  var regdUsers = JSON.parse(localStorage.getItem("userCreds"));
  //console.log(regdUsers);

  function loginUser() {
    event.preventDefault();
    var enteredEmail = document.querySelector("#email").value;
    var enteredPass = document.querySelector("#phone").value;
    //console.log(email, pass);

    for (var i = 0; i < regdUsers.length; i++) {
      console.log(regdUsers[i]);
      if (
        regdUsers[i].email == enteredEmail &&
        regdUsers[i].password == enteredPass
      ) {
        alert("login success");
        window.location.href = "";
        break;
      } else {
        console.log("login failed");
        alert("Login failed");
      }
    }
  }