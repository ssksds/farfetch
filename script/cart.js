var cart = JSON.parse(localStorage.getItem("datas"));
showProducts(cart);

function showProducts(event) {
  document.getElementById("images").innerHTML = "";
  event.map(function (item) {
    var imgs = document.createElement("img");
    imgs.setAttribute("src", item.image_url);
    imgs.setAttribute("id", "imageSizing");

    var type = document.createElement("p");
    type.textContent = item.type;
    type.setAttribute("class", "paraStyle");

    var description = document.createElement("p");
    description.textContent = item.dsc;
    description.setAttribute("class", "paraStyle1");

    var x = document.createElement("div");
    x.setAttribute("id", "x");

    var price = document.createElement("span");
    price.textContent = "$" + item.MRP;
    price.setAttribute("class", "pricing");

    var disc = document.createElement("span");
    disc.textContent = "$" + item.discount;
    disc.setAttribute("id", "discStyle");

    var discPer = document.createElement("span");
    discPer.textContent = item.discountPercentage + "% OFF";
    discPer.setAttribute("id", "discPerStyle");

    x.append(price, disc, discPer);

    var imgDiv = document.createElement("div");
    imgDiv.setAttribute("id", "img");

    var btn = document.createElement("button");
    btn.setAttribute("class", "btnremove");
    btn.textContent = "Remove";
    btn.addEventListener("click", function () {
      remove(item);
    });

    imgDiv.append(imgs, type, description, x, btn);

    document.getElementById("images").append(imgDiv);
    // imgDiv.append(x);
  });
}

var total = cart.reduce(function (acc, c) {
  return acc + Number(c.MRP);
}, 0);
console.log(total);
document.querySelector(
  ".details"
).innerHTML = `<h4 class="ordersum">Summary</h4><table class="cartsec">
<tr><td>Subtotal</td>
<td>$${Math.floor(total)}</td>
</tr>
<tr>
    <td>Delievery</td>
    <td><span class="underline">$100</span><span class="free"></span></td></tr>
    <tr><td class="line">ORDER TOTAL</td>
      <td class="line">$${Math.floor(total)}</td></tr></table>
      <p class="text">Order in time for 25 December  Find final shipping dates plus extended returns info here</p>
      <button class="btnc">Go To Checkout > </button>`;
//console.log(cart)
function remove(item) {
  cart.splice(cart.indexOf(item), 1);
  localStorage.setItem("datas", JSON.stringify(cart));
  window.location.reload(true);
}

document.querySelector("#apply").addEventListener("click", discount);
function discount() {
  var dis = document.querySelector("#val").value;
  if (dis == "masai30") {
    document.querySelector(
      ".details"
    ).innerHTML = `<h4 class="ordersum">ORDER SUMMARY</h4><table class="cartsec">
<tr><td>Order value</td>
<td>₹${total}</td>
</tr>
<tr>
    <td>Shipping</td>
    <td><span class="underline">₹100 </span><span class="free">Free</span></td></tr>
    <tr><td class="line">ORDER TOTAL</td>
      <td class="line">₹${Math.floor(
        total - (total / 100) * 30
      )}</td></tr></table>
      <p class="you">YOU HAVE SAVED 30% ON THIS ORDER</p>
      <p class="text">90 DAYS RETURN EXCLUSIVELY FOR GREENCARD MEMBER</p>
      <button class="btnc">continue</button>`;
  } else {
    alert("Not vaild Coupon Code");
  }
  document.querySelector("#val").value = "";
  document.querySelector(".btnc").addEventListener("click", function () {
    window.location.href = "address.html";
  });
}

document.querySelector(".btnc").addEventListener("click", function () {
  window.location.href = "address.html";
});
