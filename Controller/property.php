<?php
function fetchPropertyDetails($propertyId) {
    // Your code to fetch property details from a database or other source
    $propertyDetails = [
        'title' => 'Property Title',
        'description' => 'Property Description',
        // Add more details as needed
    ];
    return $propertyDetails;
}

$propertyId = $_GET['id'];
// Fetch property details based on $propertyId
$propertyDetails = fetchPropertyDetails($propertyId);
// Generate HTML content for property details
//echo "<h2>{$propertyDetails['title']}</h2>";
//echo "<p>{$propertyDetails['description']}</p>";
// Add more details as needed
include 'header.php';
include "../View/property-{$propertyId}.html";