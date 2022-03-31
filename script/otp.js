document.querySelector(".btnnext").addEventListener("click", otpfun);

function otpfun() {
  var otp = document.querySelector(".logintextbox").value;
    if (otp == 1234) {
      alert("SignUp Successfull- Proceed for Login");
    window.location.href = "login.html";
  } else {
    alert("please check the OTP");
  }
}
