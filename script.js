document.addEventListener("DOMContentLoaded", function() {
    // Get the navigation menu items
    var aboutLink = document.querySelector("#about-link");
    var addressLink = document.querySelector("#address-link");
    var paymentLink = document.querySelector("#payment-link");

    // Add click event listeners to the navigation menu items
    aboutLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        window.location.href = "#about"; // Redirect to the "About" section
    });

    addressLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        window.location.href = "#address"; // Redirect to the "Address" section
    });

    paymentLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        window.location.href = "#payment"; // Redirect to the "Information on Payment" section
    });
});
