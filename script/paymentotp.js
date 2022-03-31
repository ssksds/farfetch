document.querySelector(".btnnext").addEventListener("click", otpfun);

function otpfun() {
  var otp = document.querySelector(".logintextbox").value;
  if (otp == 1234) {
    alert("Payment Successfull");

    window.location.href = "delivery.html";
  } else {
    alert("please check the OTP");
  }
  document.querySelector(".logintextbox").value = "";
}
