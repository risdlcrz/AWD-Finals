var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click',function(){
  var node;
  for (var i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
})

window.onclick = function(e) {
  console.log(e.target.tagName)
  console.log('dropdown');
  console.log(activeDropdown)
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Visa';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}

// JavaScript (script.js)

// Function to show the rating box
function showRatingBox() {
    var ratingBox = document.createElement('div');
    ratingBox.classList.add('rating-box');

    var title = document.createElement('h3');
    title.textContent = 'Rate Your Experience';
    ratingBox.appendChild(title);

    var description = document.createElement('p');
    description.textContent = 'Please rate your experience from 1 to 5 stars:';
    ratingBox.appendChild(description);

    var starsContainer = document.createElement('div');
    starsContainer.classList.add('stars-container');
    for (var i = 1; i <= 5; i++) {
        var star = document.createElement('span');
        star.classList.add('star');
        star.textContent = '★'; // Display star symbol
        star.setAttribute('data-rating', i);
        starsContainer.appendChild(star);
    }
    ratingBox.appendChild(starsContainer);

    document.body.appendChild(ratingBox);

    // Add event listeners to stars
    var stars = document.querySelectorAll('.star');
    stars.forEach(function(star) {
        star.addEventListener('mouseenter', function() {
            var rating = parseInt(this.getAttribute('data-rating'));
            for (var j = 0; j < rating; j++) {
                stars[j].classList.add('filled');
            }
        });

        star.addEventListener('mouseleave', function() {
            var rating = parseInt(this.getAttribute('data-rating'));
            for (var j = 0; j < rating; j++) {
                stars[j].classList.remove('filled');
            }
        });

        star.addEventListener('click', function() {
            var rating = parseInt(this.getAttribute('data-rating'));
            alert('You rated ' + rating + ' stars!');
            // You can send the rating to the server for further processing if needed
            // Here you can make an AJAX request to send the rating data to the server
            // Example: sendRatingToServer(rating);
            // Then you can close the rating box
            document.body.removeChild(ratingBox);
        });
    });
}

// Add event listener to the checkout button
var checkoutButton = document.querySelector('.pay-btn');
checkoutButton.addEventListener('click', function() {
    showRatingBox();
});
