var disclaimer = document.querySelector(".disclamer");

window.addEventListener('load', function() {
  // Select the disclaimer section
  if (disclaimer) {
    // Show the disclaimer section
    disclaimer.style.display = 'flex';

    // Set a timeout to hide the disclaimer section after 5 seconds
    setTimeout(function() {
      disclaimer.style.display = 'none';
    }, 4000); // 5000 milliseconds = 5 seconds
  }
});
