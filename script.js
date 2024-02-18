document.getElementById('properties-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    fetch('properties.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });
});

document.querySelectorAll('.city-link').forEach(city => {
    city.addEventListener('click', function () {
        const cityName = this.getAttribute('data-city');
        fetch(`View/properties-${cityName.toLowerCase()}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            });
    });
});

document.getElementById('home-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'http://190.102.40.117:8000/index.php'; // Navigate to the main page
});

document.addEventListener('DOMContentLoaded', function() {
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior
            const propertyId = this.getAttribute('data-property-id');
            fetch(`http://190.102.40.117:8000/property.php?id=${propertyId}`)
                .then(response => response.text())
                .then(data => {
                    document.getElementById('details').innerHTML = data;
                });
        });
    });
});




