window.onload = function () {
  var products = document.getElementsByClassName('product');

  var smallImagesArray = [
      ['./ASSETS/images/71UHKb48rVL._SL1500_-removebg-preview.png', 'small_image_2_product_1.jpg', 'small_image_3_product_1.jpg'],
      ['./ASSETS/images/mac_ripened_001_product-removebg-preview.png', './ASSETS/images/midtonebluepink.avif', './ASSETS/images/lightcognac.avif', './ASSETS/images/brightbloodorange.avif', './ASSETS/images/blackenedchocobrown.avif'],
      // Add more arrays for each product as needed
  ];

  for (var i = 0; i < products.length; i++) {
      products[i].addEventListener('click', (function (i) {
          return function () {
              var productName = this.getElementsByClassName('product-name')[0].innerText;
              var productDescription = this.getElementsByClassName('product-description')[0].innerText;
              var productPrice = this.getElementsByClassName('product-price')[0].innerText;
              var productImage = this.getElementsByClassName('product-image')[0].src;
              var productRating = this.getElementsByClassName('product-rating')[0].innerText;
              var productReviews = this.getElementsByClassName('product-reviews')[0].innerText;

              // Quantity widget HTML
              var quantityWidgetHTML = `
              <h6 class="quantity-title">Quantity:</h6>
                  <div class="quantity-widget">
                  
                      <button class="quantity-minus">-</button>
                      <input type="number" class="quantity-input" value="1" min="1">
                      <button class="quantity-plus">+</button>
                  </div>
              `;

              var newWindow = window.open("", "_blank");
              newWindow.document.write(`
                  <html>
                      <head>
                          <title>${productName}</title>
                          <meta charset="UTF-8">
                          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                          <title>Eyes Category</title>
                          <link rel="stylesheet" href="./ASSETS/CSS/styles.css">
                          <link rel="stylesheet" href="./ASSETS/CSS/face.css">
                          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
                          <!-- Bootstrap JS and jQuery (necessary for the navbar toggler) -->
                          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
                          </head>
                          <body>
                          <header>
                          <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                              <a class="navbar-brand" href="../HOMEPAGE/index.html"><img src="pola.png" id="brand"></a>
                              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                              </button>
                              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                  <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="../HOMEPAGE/index.html">Home</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link" href="../ABOUTUS/index.html">About Us</a>
                                  </li>
                                  <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Products
                                    </a>
                                    <ul class="dropdown-menu">
                                      <li><a class="dropdown-item" href="index.html">Categories</a></li>
                                      <li><a class="dropdown-item" href="eyes.html">Eyes</a></li>
                                      <li><a class="dropdown-item" href="face.html">Face</a></li>
                                      <li><a class="dropdown-item" href="lips.html">Lips</a></li>
                                    </ul>
                                  </li>
                                </ul>
                                <form class="d-flex" role="search">
                                  <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
                                  <button class="btn btn-outline-success" type="submit">
                                    <img src="./ASSETS/images/serds-removebg-preview.png" alt="Search"> 
                                  </button>
                                </form>
                                <div class="user-options">
                                  <button onclick="location.href='../CHECKOUT/index.html'"><img src="./ASSETS/images/hurt-removebg-preview.png" alt="Favorites"></button> 
                                  <button onclick="location.href='../CHECKOUT/index.html'"><img src="./ASSETS/images/add2-removebg-preview.png" alt="Add to Cart"></button>
                                  <button onclick="location.href='../index.html'"><img src="./ASSETS/images/pro-removebg-preview.png" alt="Profile"></button>
                                </div>
                              </div>
                            </div>
                          </nav>
                        </header>
                          <div class="container">
                              <div class="left">
                                  <img src="${productImage}" alt="${productName}" class="main-image">
                                  <div class="small-images">
                                      <!-- Small images would go here -->
                                  </div>
                              </div>
                              <div class="right">
                                  <h1>${productName}</h1>
                                  <p>${productDescription}</p>                                   
                                  <div class="rating">
                                      <span class="stars">${'★'.repeat(Math.floor(productRating))}${'☆'.repeat(5 - Math.floor(productRating))}</span>
                                      <span class="rating-text">(${productRating}) ${productReviews} reviews</span>
                                  </div>
                                  <h6>Price: ${productPrice}</h6>                                  
                                  ${quantityWidgetHTML}
                                  <h6>Shades:</h6>                            
                              </div>
                          </div>
                          <script src="./ASSETS/JS/script.js"></script>
                          <script>
                              var smallImagesArray = ${JSON.stringify(smallImagesArray)};
                              var productIndex = ${i};
                              var smallImagesContainer = document.querySelector('.small-images');
                              var mainImage = document.querySelector('.main-image');

                              for (var j = 0; j < smallImagesArray[productIndex].length; j++) {
                                  var smallImage = document.createElement('img');
                                  smallImage.src = smallImagesArray[productIndex][j];
                                  smallImage.alt = 'Small Image ' + (j + 1);
                                  smallImage.classList.add('small-image');

                                  smallImage.addEventListener('click', function () {
                                      mainImage.src = this.src;
                                      mainImage.classList.remove('reduced-brightness');

                                      // Reset brightness for all small images
                                      var smallImages = document.querySelectorAll('.small-image');
                                      smallImages.forEach(function (image) {
                                          image.classList.add('reduced-brightness');
                                      });

                                      // Add full brightness to the clicked small image
                                      this.classList.remove('reduced-brightness');
                                  });

                                  smallImagesContainer.appendChild(smallImage);
                              }
                          </script>
                          <script>
                              // Add the dropdown box HTML
                              var dropdownHTML = \`
                                  <select class="shade-dropdown">
                                      <!-- Options for shades would go here -->
                                  </select>
                              \`;

                              // Insert dropdown HTML into the document
                              document.querySelector('.right').insertAdjacentHTML('beforeend', dropdownHTML);

                              // Get reference to the dropdown element
                              var shadeDropdown = document.querySelector('.shade-dropdown');

                              // Define shade names array for each product
                              var shadeNamesArray = [
                                  ["Light Rose", "Old Rose", "Deep Rose"], // Shade names for product 1
                                  ["Soft Midtone Mauve", "Midtone Blue Pink", "Light Cognac", "Bright Blood Orange", "Blackened Choco Brown"] // Shade names for product 2
                                  // Add more arrays for additional products as needed
                              ];

                              // Populate dropdown with shade options
                              for (var j = 0; j < smallImagesArray[productIndex].length; j++) {
                                  var option = document.createElement('option');
                                  option.text = shadeNamesArray[productIndex][j];
                                  option.value = smallImagesArray[productIndex][j];
                                  shadeDropdown.add(option);
                              }

                              // Event listener for dropdown change
                              shadeDropdown.addEventListener('change', function () {
                                  var selectedImage = this.value;
                                  mainImage.src = selectedImage;
                                  mainImage.classList.remove('reduced-brightness');

                                  // Reset brightness for all small images
                                  var smallImages = document.querySelectorAll('.small-image');
                                  smallImages.forEach(function (image) {
                                      image.classList.add('reduced-brightness');
                                  });

                                  // Add full brightness to the corresponding small image
                                  var selectedIndex = Array.from(this.options).findIndex(option => option.value === selectedImage);
                                  smallImages[selectedIndex].classList.remove('reduced-brightness');
                              });

                              var buttonsHTML = \`
                                  <div class="buttons-options">
                                      <button class="heart-button" onclick="location.href='../CHECKOUT/index.html'"><img src="./ASSETS/images/hurt-removebg-preview.png" alt="Favorites"></button>
                                      <button class="add-to-cart-button" onclick="location.href='../CHECKOUT/index.html'">Add to Cart</button>
                                      <button class="buy-now-button" onclick="location.href='../CHECKOUT/index.html'">Buy Now</button>
                                  </div>
                              \`;

                              document.querySelector('.right').insertAdjacentHTML('beforeend', buttonsHTML);
                          </script>
                          <script>
                              var quantityInput = document.querySelector('.quantity-input');
                              var quantityMinus = document.querySelector('.quantity-minus');
                              var quantityPlus = document.querySelector('.quantity-plus');

                              quantityMinus.addEventListener('click', function () {
                                  if (parseInt(quantityInput.value) > 1) {
                                      quantityInput.value = parseInt(quantityInput.value) - 1;
                                      console.log('Quantity:', quantityInput.value);
                                  }
                              });

                              quantityPlus.addEventListener('click', function () {
                                  quantityInput.value = parseInt(quantityInput.value) + 1;
                                  console.log('Quantity:', quantityInput.value);
                              });
                          </script>
                      </body>
                  </html>
              `);
          };
      })(i));
  }
};
