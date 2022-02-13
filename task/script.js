window.onload = function() {
document.getElementById("toinsert-1").innerHTML += name;
}

// List of Products
let products = [
  {
    id: 0,
    name: "SAMSUNG 870 QVO INTERNAL 1TB SSD",
    description: "1TB SATA 6.35CM 46G (MZ-77Q1T0BW)",
    price: "8,699",
    image: "./product-1.jpg",
    cartCount: 0
  },
  {
    id: 1,
    name: "SAMSUNG GALAXY TAB A8 GRAY WIFI",
    description: "4GB RAM 64GB ROM 10.5INCH (SM-X200NZAEINU)",
    price: "19,999",
    image: "./product-2.jpg",
    cartCount: 0
  },
  {
    id: 2,
    name: "LENEVO Q-SERIES 23.8 INCH FHD IPS 75MHZ",
    description: "ULTRASLIM 2X SPEAKERS HDMI VGA AMD FREESYNC",
    price: "14,849",
    image: "./product-3.png",
    cartCount: 0
  }
];

const list = document.getElementById("products-list");

// Initial Rendering of Product's Array
function renderList() {
  products.forEach((onproduct) => {
    var temp = "Product-" + onproduct.id;
    list.innerHTML += `
    <li class="per-product">
      <div>
        <img src=${onproduct.image} alt=${temp}>
        <p class="product-name">${onproduct.name}</p>
        <hr class="hor-rule">
        <p class="product-desc">${onproduct.description}</p>
        <p class="product-cost">Cost: ₹ ${onproduct.price} /-</p>
        <div class="addtocart">
          <button type="button" class="incr-count" onclick="incrc(${onproduct.id});">+</button>
          <p class="disp-count" id=${onproduct.id}>0</p>
          <button type="button" class="decr-count" onclick="decrc(${onproduct.id});">-</button>
        </div>
      </div>
    </li>
    `;
  });
}

renderList();

// Live Increament & Decreament of Individual & Total Cart Count
var totalc=0;
var totalcart = document.getElementById("toinsert-2");

// Increasing Individual & Total Cart Count
function incrc(key)
{
  totalc++;
  totalcart.innerHTML = totalc;
  var currentc=parseInt(document.getElementById(key.toString()).innerHTML);
  document.getElementById(key.toString()).innerHTML = currentc+1;
}

//Decreasing Individual & Total Cart Count
function decrc(key)
{
  var currentc=parseInt(document.getElementById(key.toString()).innerHTML);
  if (currentc>=1)
  {
    totalc--;
    totalcart.innerHTML = totalc;
    document.getElementById(key.toString()).innerHTML = currentc-1;
  }
  else
  {
    alert("Individual Cart Count is already 0 !!");
  }
}
