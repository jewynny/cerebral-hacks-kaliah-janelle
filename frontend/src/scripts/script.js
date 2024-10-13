// JavaScript file to handle button click event

document.addEventListener('DOMContentLoaded', function() {
    // Get the "Products" button element
    var productsButton = document.querySelector('.products-btn');

    // Add a click event listener to the button
    productsButton.addEventListener('click', function() {
        // Navigate to the products.html page when the button is clicked
        window.location.href = 'products.html';
    });
});
