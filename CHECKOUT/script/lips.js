document.addEventListener('DOMContentLoaded', function() {
    var productImages = document.querySelectorAll('.product-image');
  
    productImages.forEach(function(image) {
      image.addEventListener('mouseover', function() {
        this.classList.add('hover');
      });
  
      image.addEventListener('mouseout', function() {
        this.classList.remove('hover');
      });
    });
  });