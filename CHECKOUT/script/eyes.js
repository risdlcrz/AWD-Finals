function updateSmallImages() {
  var mainImageSrc = document.getElementById('main-image').src;
  var smallImages = document.querySelectorAll('.small-image');
  smallImages.forEach(function(smallImage) {
      if (smallImage.src === mainImageSrc) {
          smallImage.style.filter = 'brightness(100%)';
      } else{
          smallImage.style.filter = 'brightness(50%)';
      }
  });
}

function showProductDetails(title, mainImage, description, images) {
  var imagesHTML = images.map((image, index) => `<img class="small-image" src="${image}" onclick="updateMainImage(${index}); updateSmallImages();">`).join('');

  document.body.innerHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="pola.png" id="brand"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="eyes.html">Eyes</a></li>
                <li><a class="dropdown-item" href="face.html">Face</a></li>
                <li><a class="dropdown-item" href="lips.html">Lips</a></li>
              </ul>
            </li></ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
            <button class="btn btn-outline-success" type="submit">
              <img src="./images/serds-removebg-preview.png" alt="Search">
            </button>
          </form>
          <div class="user-options">
            <button><img src="./images/hurt-removebg-preview.png" alt="Favorites"></button>
            <button><img src="./images/add2-removebg-preview.png" alt="Add to Cart"></button>
            <button><img src="./images/pro-removebg-preview.png" alt="Log In"></button>
          </div>
        </div>
      </div>
    </nav>
    
      <div class="product-details">
          <button onclick="location.reload();" style="position: absolute; top: 20px; left: 20px;">Home</button>
          <div style="flex: 1; display: flex; flex-direction: column;">
            <img id="main-image" src="${mainImage}" alt="${title}" style="max-width: 100%;">
            <div class="small-images">${imagesHTML}</div>
          </div>
          <div style="flex: 1;">
              <h2>${title}</h2>
              <p>${description}</p>
              <div class="stars">
                  <span class="star" id="star1" onclick="setStar(1)">&#9733;</span>
                  <span class="star" id="star2" onclick="setStar(2)">&#9733;</span>
                  <span class="star" id="star3" onclick="setStar(3)">&#9733;</span>
                  <span class="star" id="star4" onclick="setStar(4)">&#9733;</span>
                  <span class="star" id="star5" onclick="setStar(5)">&#9733;</span>
              </div>
              <div id="quantity">
                  <button onclick="decreaseQuantity()">-</button>
                  <input type="number" id="quantity-input" value="1">
                  <button onclick="increaseQuantity()">+</button>
              </div>
              <div class="shades">
                 ${images.map(shade => `<div class="shade" style="background-color: ${shade};"></div>`).join('')}
              </div>
              <button onclick="addToCart()">Add to cart</button>
          </div>
      </div>
  `;

  updateSmallImages();
}

var products = [
  { id: 'product1', title: 'Product 1', mainImage: 'mainImage1.jpg', description: 'Description of Product 1', images: ['image1_1.jpg', 'image1_2.jpg', 'image1_3.jpg'] },
  { id: 'product2', title: 'Product 2', mainImage: 'mainImage2.jpg', description: 'Description of Product 2', images: ['image2_1.jpg', 'image2_2.jpg', 'image2_3.jpg'] },
  // Add more products as needed
];

products.forEach(product => {
  document.getElementById(product.id).addEventListener('click', function() {
      showProductDetails(product.title, product.mainImage, product.description, product.images);
  });
});

// Function to update the main image when a small image is clicked
function updateMainImage(index) {
  var mainImage = document.getElementById('main-image');
  var smallImages = document.querySelectorAll('.small-image');
  mainImage.src = smallImages[index].src;
}

// Function to toggle wishlist button color
function toggleWishlist(button) {
  button.classList.toggle('added');
}

// Function to decrease quantity
function decreaseQuantity() {
  var quantityInput = document.getElementById('quantity-input');
  if (parseInt(quantityInput.value) > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
  }
}

// Function to increase quantity
function increaseQuantity() {
  var quantityInput = document.getElementById('quantity-input');
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

// Function to add product to cart
function addToCart() {
var title = document.querySelector('.product-details h2').textContent;
  var quantity = document.getElementById('quantity-input').value;
  console.log(`Added ${quantity} ${title} to cart`);
}

// Star Rating
var rating = 0;

function setStar(starNum) {
  rating = starNum;
  for (var i = 1; i <= 5; i++) {
    var star = document.getElementById('star' + i);
    star.classList.remove('rated');
    if (i <= starNum) {
      star.classList.add('rated');
    }
  }
}

//Rating


var rating = 0;

function setStar(starNum) {
  rating = starNum;
  for (var i = 1; i <= 5; i++) {
    var star = document.getElementById('star' + i);
    star.classList.remove('rated');
    if (i <= starNum) {
      star.classList.add('rated');
    }
  }
}