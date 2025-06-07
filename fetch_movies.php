<?php
// Example: Fetch movie data from an API or database
// This is a placeholder and needs to be implemented based on actual data sources

header('Content-Type: application/json');

$movies = [
  [
    "title" => "Segawena Kirilliyo",
    "image" => "https://www.lankaflix.com/path-to-segawena-kirilliyo.jpg"
  ],
  [
    "title" => "Suhada Koka",
    "image" => "https://www.lankaflix.com/path-to-suhada-koka.jpg"
  ]
  // Add more movies as needed
];

echo json_encode($movies);
?>
