var data = [
    {
        MRP: 599,
        type: "DREAMZ",
        dsc: "Printed Dusty Pink Pyjama",
        discount: 1000,
        discountPercentage: 40,
        image_url:
            "https://cdn-images.farfetch-contents.com/17/65/35/69/17653569_37685319_600.jpg",
    },
    {
        MRP: 599,
        type: "DREAMZ",
        dsc: "Printed Dark Blue Pyjamas",
        discount: 1200,
        discountPercentage: 50,
        image_url:
            "https://cdn-images.farfetch-contents.com/17/65/43/59/17654359_37700840_600.jpg",
    },
    {
        MRP: 799,
        type: "DREAMZ",
        dsc: "Printed Pink Nightwear",
        discount: 1000,
        discountPercentage: 20,
        image_url:
            "https://cdn-images.farfetch-contents.com/17/65/35/54/17653554_37684205_600.jpg",
    },
    {
        MRP: 300,
        type: "AJILE",
        dsc: "Solid Red Top",
        discount: 499,
        discountPercentage: 40,
        image_url:
            "https://pantaloons.imgix.net/img/app/product/4/461730-3202111.jpg?w=313.38000000000005&auto=format",
    },
    {
        MRP: 360,
        type: "RANGMANCH",
        dsc: "Solid Brown Pants",
        discount: 799,
        discountPercentage: 55,
        image_url:
            "https://pantaloons.imgix.net/img/app/product/4/439038-2844313.jpg?w=313.38000000000005&auto=format",
    },
    {
        MRP: 330,
        type: "AJILE",
        dsc: "Printed Active Pink Top",
        discount: 599,
        discountPercentage: 45,
        image_url:
            "https://pantaloons.imgix.net/img/app/product/3/357852-1790903.jpg?w=313.38000000000005&auto=format",
    },
    {
        MRP: 300,
        type: "HAY",
        dsc: "Knot glass ornament",
        discount: 599,
        discountPercentage: 50,
        image_url:
            "https://cdn-images.farfetch-contents.com/16/72/59/84/16725984_33736779_1000.jpg",
    },
    {
        MRP: 280,
        type: "AJILE",
        dsc: "Splash glass vase",
        discount: 699,
        discountPercentage: 60,
        image_url:
            "https://cdn-images.farfetch-contents.com/16/72/75/62/16727562_34042772_1000.jpg",
    },
    {
        MRP: 300,
        type: "Balenciaga",
        dsc: "Triple S sneakers",
        discount: 499,
        discountPercentage: 40,
        image_url:
            "https://cdn-images.farfetch-contents.com/15/46/59/53/15465953_28078363_1000.jpg",
    },
    {
        MRP: 240,
        type: "PEOPLE",
        dsc: "Grey Printed T-Shirt",
        discount: 399,
        discountPercentage: 40,
        image_url:
            "https://pantaloons.imgix.net/img/app/product/5/564876-4925899.jpg?w=313.38000000000005&auto=format",
    },
    {
        MRP: 360,
        type: "PEOPLE",
        dsc: "Pink Textured Flat Sandals",
        discount: 599,
        discountPercentage: 40,
        image_url:
            "https://pantaloons.imgix.net/img/app/product/6/617896-5921461.jpg?w=313.38000000000005&auto=format",
    },
    {
        MRP: 220,
        type: "CHIRPIE PIE",
        dsc: "White Frock",
        discount: 399,
        discountPercentage: 45,
        image_url:
            "https://pantaloons.imgix.net/img/app/product/3/312225-1428587.jpg?w=313.38000000000005&auto=format",
    },
    {
        MRP: 275,
        type: "PANTALOONS JUNIOR",
        dsc: "Lace Overlay Pink Dress",
        discount: 499,
        discountPercentage: 45,
        image_url:
            "https://pantaloons.imgix.net/img/app/product/3/391577-2035221.jpg?w=313.38000000000005&auto=format",
    },
    {
        MRP: 200,
        type: "PEOPLE",
        dsc: "Yellow Solid Top",
        discount: 399,
        discountPercentage: 50,
        image_url:
            "https://pantaloons.imgix.net/img/app/product/5/520198-3916635.jpg?w=313.38000000000005&auto=format",
    },
    {
        MRP: 399,
        type: "AKKRITI",
        dsc: "Indigo Printed Top",
        discount: 699,
        discountPercentage: 43,
        image_url:
            "https://pantaloons.imgix.net/img/app/product/5/552793-4523676.jpg?w=313.38000000000005&auto=format",
    },

];

//  var imgDiv = document.createElement("div");
//  imgDiv.setAttribute("id", "img");

showProducts(data)

function sorting() {
    var price = document.querySelector("#filter").value;
    if (price == "lowest") {
        var com = data.sort(function (a, b) {
            return a.MRP - b.MRP
        })
    }
    if (price == "highest") {
        var com = data.sort(function (a, b) {
            return b.MRP - a.MRP
        })
    }

    if (price == "asc") {
        var com = data.sort(function (a, b) {
            return a.type > b.type ? 1 : b.type > a.type ? -1 : 0
        })
    }

    if (price == "des") {
        var com = data.sort(function (a, b) {
            return a.type > b.type ? -1 : b.type > a.type ? 1 : 0
        })
    }


    showProducts(com)
}


var cartarr = JSON.parse(localStorage.getItem("datas")) || []
var favarr = JSON.parse(localStorage.getItem("favdata")) || []
// console.log(cartarr);

function showProducts(productArray) {
    document.querySelector("#rimages").innerHTML = ''
    productArray.map(function (item) {
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

        var btn = document.createElement("button");
        btn.textContent = "Add To Cart";

        var imgDiv = document.createElement("div");
        imgDiv.setAttribute("id", "img");

        var btnsDiv = document.createElement("div");
        btnsDiv.setAttribute("id", "btnsDiv")

        var cart = document.createElement("button");
        cart.addEventListener("click", function () {
            addToCart(item)
        })
        cart.setAttribute("id", "AddToCart")
        cart.textContent = "Add To Cart";

        var btnfav = document.createElement("button")
        btnfav.textContent = "Add to Fav";
        btnfav.setAttribute("id", "favBtn")
        btnfav.addEventListener("click", function () {
            fav(item)
        })

        btnsDiv.append(cart, btnfav);

        imgDiv.append(imgs, type, description, x, btnsDiv);

        document.getElementById("rimages").append(imgDiv);
        // imgDiv.append(x);
    });

    
}

function addToCart(item) {
    if (cartarr.includes(item)) {
        alert("already add to chart")
    }
    else {
        alert("Added");
        window.location.href="cart.html"
    }
    cartarr.push(item)
    localStorage.setItem("datas", JSON.stringify(cartarr))
}


function fav(item) {
    if (favarr.includes(item)) {
        alert("already added to wishlist")
    }
    else {
        alert("Added to wishlist")
    }
    favarr.push(item)
    localStorage.setItem("favdata", JSON.stringify(favarr))
}
