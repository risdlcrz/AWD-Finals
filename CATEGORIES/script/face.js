document.addEventListener('DOMContentLoaded', function() {
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
  
    // Get the categories
    const categories = document.querySelectorAll('.category');
  
    // Loop through each category
    categories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            category.querySelector('.category-image').style.transform = 'scale(1.1)';
        });
  
        category.addEventListener('mouseleave', () => {
            category.querySelector('.category-image').style.transform = 'scale(1)';
        });
    });
  });
  
  window.onload = function() {
      var images = document.querySelectorAll('.category-image');
      images.forEach(function(img) {
        var originalSrc = img.src;
        var hoverSrc = img.getAttribute('data-hover');
        img.onmouseover = function() {
          img.src = hoverSrc;
        };
        img.onmouseout = function() {
          img.src = originalSrc;
        };
      });
    };