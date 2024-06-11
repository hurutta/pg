document.addEventListener("DOMContentLoaded", function() {
    const url = 'https://example.com'; // Replace with the URL of the target webpage
    fetch(url)
       .then(response => response.text()) // Convert the response to text
       .then(html => {
            document.querySelector('#content').innerHTML = html; // Insert the HTML content into the div
        })
       .catch(error => console.error('Error fetching the target page:', error));
});
