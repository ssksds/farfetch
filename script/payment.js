document.querySelector(".gotp").addEventListener("click", check);

function check() {
  var card = document.querySelector(".card").value;
  var cvv = document.querySelector(".cvv").value;
  var expiery = document.querySelector(".expiery").value;
  var phone = document.querySelector(".phone").value;

  if (card.length == 16) {
  } else {
    alert("Wrong Card Number");
  }
  if (cvv.length == 3) {
  } else {
    alert("Wrong CVV");
  }
  if (expiery.length == 6) {
  } else {
    alert("Wrong Expiry Month Details");
  }
  if (phone.length == 10) {
  } else {
    alert("Wrong Phone Number");
  }
  if (
    card.length == 16 &&
    cvv.length == 3 &&
    expiery.length == 6 &&
    phone.length == 10
  ) {
    window.location.href = "paymentotp.html";
  }
}

document.querySelector(".cod").addEventListener("click", function () {
  alert("Order Placed Successfully");
  window.location.href = "delivery.html";
});
