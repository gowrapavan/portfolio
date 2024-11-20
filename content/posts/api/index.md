---
title: "api"
date: 2024-09-13T10:00:00+06:00
description: "Movies by Gowra Pavan Kumar."
menu:
  sidebar:
    name: "api"
    identifier: "api"
    weight: 10
tags: ["api", "Downloads"]
categories: ["api", "Downloads"]
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Search</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f4f4f4;
            color: #333;
        }
        h1 {
            color: #444;
        }
        input[type="text"] {
            padding: 10px;
            width: 300px;
            margin-right: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            padding: 10px 15px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        #results {
            margin-top: 20px;
            padding: 15px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .summary {
            width: 100%;
        }
        .details-container {
            display: flex;
            margin-top: 10px;
        }
        .poster {
            flex: 0 0 auto;
            margin-right: 20px;
        }
        img {
            max-width: 200px;
            height: auto;
        }
        .details {
            flex: 1;
            font-size: 14px;
            color: #555;
        }
        .extra-details p {
            margin: 5px 0;
        }
        /* Styles for iframe */
        #videoFrame {
            display: none; /* Hide the iframe initially */
            width: 100%;
            height: 616px;
            border: 1px solid #ccc; /* Add a border */
            margin-top: 20px; /* Space above the iframe */
            border-radius: 5px; /* Rounded corners */
        }
        /* Loading dots */
        .dots-container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
            margin-top: 20px;
        }
        .dot {
            height: 20px;
            width: 20px;
            margin-right: 10px;
            border-radius: 10px;
            background-color: #b3d4fc;
            animation: pulse 1.5s infinite ease-in-out;
        }
        .dot:last-child {
            margin-right: 0;
        }
        .dot:nth-child(1) {
            animation-delay: -0.3s;
        }
        .dot:nth-child(2) {
            animation-delay: -0.1s;
        }
        .dot:nth-child(3) {
            animation-delay: 0.1s;
        }
        @keyframes pulse {
            0% {
                transform: scale(0.8);
                background-color: #b3d4fc;
                box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
            }
            50% {
                transform: scale(1.2);
                background-color: #6793fb;
                box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);
            }
            100% {
                transform: scale(0.8);
                background-color: #b3d4fc;
                box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
            }
        }
        /* Media Queries for Mobile View */
        @media (max-width: 600px) {
            .details-container {
                flex-direction: column; /* Stack poster and details vertically */
                align-items: center; /* Center align items */
            }
            .poster {
                margin-right: 0; /* Remove right margin on small screens */
                margin-bottom: 10px; /* Add space below the poster */
            }
        }
    </style>
</head>
<body>
    <h1>Search for Movie Ratings</h1>
    <p>Use the search bar below to find IMDb ratings and other details about your favorite movies!</p>
    <input type="text" id="movieInput" placeholder="Enter movie title...">
    <button id="searchBtn">Search</button>
    
   <div id="videoContainer">
        <iframe id="videoFrame" src="" scrolling="no" allow="autoplay" allowfullscreen></iframe>
    </div>
    
   <div id="results"></div>

   <script>
        document.getElementById('searchBtn').addEventListener('click', function() {
            const movieTitle = document.getElementById('movieInput').value;
            if (!movieTitle) {
                alert("Please enter a movie title.");
                return;
            }
            const apiKey = 'd547b285'; // Replace with your OMDb API key
            const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

            // Show loading state
            document.getElementById('results').innerHTML = `
                <div class="dots-container">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            `;
            document.getElementById('videoFrame').style.display = 'none'; // Hide iframe initially

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const resultsDiv = document.getElementById('results');

                    if (data.Response === "True") {
                        resultsDiv.innerHTML = `
                            <div class="summary">
                                <h2>${data.Title} (${data.Year}) Streaming</h2>
                                <p>${data.Plot}</p>
                            </div>
                            <div class="details-container">
                                <div class="poster">
                                    <img src="${data.Poster}" alt="${data.Title} poster">
                                </div>
                                <div class="details extra-details movie-info">
                                    <p><strong>Views:</strong> 1073</p>
                                    <p><strong>Genre:</strong> ${data.Genre}</p>
                                    <p><strong>Director:</strong> ${data.Director}</p>
                                    <p><strong>Actors:</strong> ${data.Actors}</p>
                                    <p><strong>Country:</strong> ${data.Country}</p>
                                    <p><strong>Duration:</strong> ${data.Runtime.replace(' min', '')} min</p>
                                    <p><strong>Quality:</strong> HD</p>
                                    <p><strong>Release:</strong> ${data.Year}</p>
                                    <p><strong>IMDb:</strong> ${data.imdbRating}</p>
                                </div>
                            </div>
                        `;

                        // Set the iframe source and show it
                        const imdbId = data.imdbID; // Use IMDb ID for iframe
                        document.getElementById('videoFrame').src = `https://www.2embed.cc/embed/${imdbId}?autoplay=1&mute=1&cc_load_policy=1`;
                        document.getElementById('videoFrame').style.display = 'block'; // Show iframe
                    } else {
                        resultsDiv.innerHTML = `<p>Movie not found. Please try another title.</p>`;
                        document.getElementById('videoFrame').style.display = 'none'; // Hide iframe
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    document.getElementById('results').innerHTML = `<p>An error occurred while fetching movie data. Please try again later.</p>`;
                    document.getElementById('videoFrame').style.display = 'none'; // Hide iframe
                });
        });
    </script>
</body>
</html>
