document.querySelector("button").addEventListener("click", singup);

var arr = JSON.parse(localStorage.getItem("details")) || [];

function singup() {
  var name = document.getElementById("email").value;
  var password = document.getElementById("pass").value;
  var mobile = document.getElementById("mobile").value;

  var details = {
    itemname: name,
    itempassword: password,
    itemmobile: mobile,
  };
  arr.push(details);
  console.log(arr);
  localStorage.setItem("details", JSON.stringify(arr));

  alert("Check For OTP");
  window.location.href = "otp.html";
}
// function store(){
//   localstorage.setItem('name',email.value)
//   localstorage.setItem('itempassword',pass.value)
// }