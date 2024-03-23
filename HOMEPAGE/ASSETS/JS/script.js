// Get the navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Loop through each navigation link
navLinks.forEach(link => {
  // Add event listener for mouseover event
  link.addEventListener('mouseover', () => {
    // Change the color to a different color when hovered over
    link.style.color = '#B99976'; // You can replace '#FF5733' with any color you prefer
  });

  // Add event listener for mouseout event
  link.addEventListener('mouseout', () => {
    // Change the color back to the original color when not hovered over
    link.style.color = '#74503E'; // You can replace '#74503E' with the original color
  });
});
// Get the "Buy Now" button
const buyNowBtn = document.querySelector('.buy-now-btn');

// Add event listener for mouseover event on "Buy Now" button
buyNowBtn.addEventListener('mouseover', () => {
  // Smoothly increase the button's padding on hover
  buyNowBtn.style.transition = 'padding 0.3s ease';
  buyNowBtn.style.padding = '15px 25px'; // Adjust padding as needed
});

// Add event listener for mouseout event on "Buy Now" button
buyNowBtn.addEventListener('mouseout', () => {
  // Smoothly revert the button's padding back to its original state
  buyNowBtn.style.transition = 'padding 0.3s ease';
  buyNowBtn.style.padding = '10px 20px'; // Adjust padding as needed
});

// Code to change the background color when the carousel changes
var body = document.querySelector('body');
var carousel = document.querySelector('#carouselExampleIndicators');
var hasSwitched = false; // Flag to check if the carousel has been switched

carousel.addEventListener('slid.bs.carousel', function () {
  if (hasSwitched) {
    var activeItem = document.querySelector('.carousel-item.active');
    var imgSrc = activeItem.querySelector('img').src;
    body.style.backgroundImage = 'url(' + imgSrc + ')';
  } else {
    hasSwitched = true;
  }
});
