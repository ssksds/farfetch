document.querySelector(".singup").addEventListener("click", singuppage);

function singuppage() {
  window.location.href = "signup.html";
}

document.querySelector(".btnnext").addEventListener("click", loginpage);

var arr = JSON.parse(localStorage.getItem("details"));
function loginpage() {
  var mail = document.querySelector(".logintextbox").value;
  var pass = document.querySelector(".password").value;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].itemname == mail && arr[i].itempassword == pass) {
      alert("Login Successfull");
      window.location.href = "index.html";
      break;
    }
    if (arr[i].itemname != mail && arr[i].itempassword != pass) {
      document.querySelector(
        ".dis"
      ).innerHTML = `<h1>Invalid userID or Password</h1>`;
    }
  }
  document.querySelector(".logintextbox").value = "";
  document.querySelector(".password").value = "";
}
console.log(arr);
