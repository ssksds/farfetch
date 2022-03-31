var womensData = [
    {
      image_url:"https://cdn-images.farfetch-contents.com/18/21/21/58/18212158_38796832_600.jpg",
      name: "New season",
      brand: "Prada",
      info:"faded leather jacket",
      price: "$2,360",
     
    },
    {
        image_url:"https://cdn-images.farfetch-contents.com/18/19/46/22/18194622_38667516_600.jpg",
        name: "New season",
        brand:'valentlno garavnl',
        info:'stut sing shoulder bag',
        price: "$2,678",
       
      },
      {
        image_url:"https://cdn-images.farfetch-contents.com/17/90/23/45/17902345_38774506_600.jpg",
        name: "New season",
        brand:'parada',
        info:'jacqline belted mini shorts',
        price: "$2,060",
       
      },
      {
        image_url:"https://cdn-images.farfetch-contents.com/18/19/68/56/18196856_38863600_600.jpg",
        name: "New season",
        brand:'verse',
        info:'tripled starappy 160m sandle',
        price: "$2,001",
       
      },
      {
        image_url:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3413050/data/dc078df2fcfa22dd33f4d2d7e3a4eceb.jpg?ratio=3x4_three-columns&minWidth=395",
        name: "PRADA",
        brand:'EMPTY',
        info:'Experssion double-brasted blazer',
        price: "$1,333",
       
      },
      {
        image_url:"https://cdn-images.farfetch-contents.com/18/19/68/56/18196856_38863600_600.jpg",
        name: "New season",
        brand:'verse',
        info:'tripled starappy 160m sandle',
        price: "$2,001",
       
      },
      {
        image_url:"https://cdn-images.farfetch-contents.com/17/06/44/28/17064428_37867713_1000.jpg",
        name: "new season",
        brand:'ahuluwalla',
        info:'Burrow Zipped pouch',
        price: "$1,712",
       
      },
      {
        image_url:"https://cdn-images.farfetch-contents.com/17/59/05/02/17590502_38415214_1000.jpg",
        name: "new season",
        brand:'trending noe',
        info:'throwback looks your love',
        price: "$3,222",
       
      },
      {
        image_url:"https://cdn-images.farfetch-contents.com/17/59/05/02/17590502_38415212_1000.jpg",
        name: "new season",
        brand:'Ahullawall',
        info:'Expressed double',
        price: "$1,243",
       
      },
      {
        image_url:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3413064/data/0efa6c0ca51bb6a7e38b215294832129.jpg?ratio=3x4_three-columns&minWidth=395",
        name: "new season",
        brand:'off-white',
        info:'burrow Zipped ',
        price: "$2,646",
       
      },
      {
        image_url:"https://cdn-images.farfetch-contents.com/18/19/68/56/18196856_38863600_600.jpg",
        name: "New season",
        brand:'verse',
        info:'tripled starappy 160m sandle',
        price: "$2,001",
       
      },
      {
        image_url:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3413078/data/0a2eb2cecba88d16130c72585828c1fe.jpg?ratio=3x4_three-columns&minWidth=395",
        name: "new season",
        brand:'Ahulla',
        info:'what u want u have',
        price: "$678",
       
      },
      {
        image_url:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3413108/data/f7cac6c34b463bc0d9a7c455601948f5.jpg?ratio=3x4_three-columns&minWidth=395",
        name: "new season",
        brand:'bhaaja',
        info:'Expression tailored',
        price: "$873",
       
      },
      {
        image_url:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3413132/data/915007d43269c1aabe0cef81276dac03.jpg?ratio=3x4_three-columns&minWidth=395",
        name: "new season",
        brand:'offf=white',
        info:'alien-metalic',
        price: "$678",
       
      },
      {
        image_url:"https://cdn-images.farfetch-contents.com/18/19/68/56/18196856_38863600_600.jpg",
        name: "New season",
        brand:'verse',
        info:'tripled starappy 160m sandle',
        price: "$2,001",
       
      },
      {
        image_url:"https://cdn-static.farfetch-contents.com/cms-cm/in/media/3413156/data/ebaca262032e9891eba59808e1ac3b8b.jpg?ratio=3x4_three-columns&minWidth=395",
        name: "new season",
        brand:'offf=white',
        info:'alien-metalic',
        price: "$678",
       
      },

    ];
      womensData.map(function (elem) {
        var box = document.createElement("div");
    
        var img = document.createElement("img");
        img.src = elem.image_url;
    
        var name = document.createElement("p");
        name.textContent = elem.name;
         
        var brand = document.createElement("p");
        brand.textContent = elem.brand;

        var info = document.createElement("p");
        info.textContent = elem.info;
    
        var price = document.createElement("p");
        price.innerText = elem.price;
    
        box.append(img, name,brand,info,price);
    
        document.querySelector("#container22").append(box);
      });
    