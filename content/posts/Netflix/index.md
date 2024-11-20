---
title: "Gowra Stream - Project Documentation"
date: 2024-11-19T10:00:00+06:00
description: "Comprehensive project documentation for Gowra Stream, a modern streaming platform inspired by Netflix."
menu:
  sidebar:
    name: "Gowra Stream Documentation"
    identifier: "gowra-stream-docs"
    weight: 10
tags: ["Streaming Platform", "Documentation", "Gowra Stream"]
categories: ["Projects", "Documentation"]
---

# Gowra Stream - Streaming Section Documentation

*This project was developed by Gowra Pavan with the help of AI to create a seamless movie and TV streaming experience.*

---

## Objective

The Streaming Section of **Gowra Stream** aims to provide a robust and intuitive platform for users to browse, search, and stream movies and TV shows. It includes manual slots, search functionality, embedding mechanisms, and user watch history.

---

## Manual Movie Slots

1. **Normal Movies**:
   - General collection of movies available for streaming.

2. **Trending Movies**:
   - Highlighted movies displayed at the top of the streaming page for better visibility.

---

## Movie Embedding Mechanism

Movies are embedded using **2embed.cc** to provide high-quality video playback.

### Embed Format:
```plaintext
https://www.2embed.cc/embed/{IMDb_ID}?autoplay=1&mute=1&cc_load_policy=1
```

### Implementation:
- Replace `{IMDb_ID}` with the actual IMDb ID of the movie.
- Example: For IMDb ID `tt0848228` (The Avengers), the embed link would be:
  ```plaintext
  https://www.2embed.cc/embed/tt0848228?autoplay=1&mute=1&cc_load_policy=1
  ```

---

## Search Functionality

Search movies using the **OMDb API** by their title.

### Search API Format:
```plaintext
http://www.omdbapi.com/?t={Movie_Title}&apikey={API_Key}
```

### Parameters:
- **t**: Movie title (e.g., "The Avengers").
- **apikey**: Your OMDb API key.

### Example API Call:
```plaintext
http://www.omdbapi.com/?t=The+Avengers&apikey=your_api_key
```

### Example Response:
```json
{
  "Title": "The Avengers",
  "Year": "2012",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "Joss Whedon",
  "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
  "Plot": "Nick Fury of S.H.I.E.L.D. assembles a team of superheroes...",
  "Poster": "(link unavailable)",
  "Rating": "8.1/10",
  "Runtime": "143 min",
  "Type": "movie"
}
```

---

## Movie Grid/Tile Display

### Features:
- Display movie details in a **grid layout**:
  - **Image**: Poster with alt text as the title.
  - **Details**: Title, year, genre, director, actors, rating, runtime, and plot.
- Include **related movies** for broader suggestions.
  - Example: Searching for "The Avengers" displays related movies like "Age of Ultron" or "Infinity War."

---

## User Last Seen/Recent Movie Section

### Functionality:
- Display movies recently watched by the user on the homepage.
- Store the user's watch history in the database.

---

## Technical Requirements

1. **OMDb API Integration**:
   - Retrieve movie details including IMDb ID.

2. **IMDb ID Retrieval and Usage**:
   - Utilize IMDb IDs for embedding movies.

3. **Database Storage**:
   - Store user watch history and movie details for faster access.

4. **Watch History**:
   - Track and display user's recently watched movies.

---

## Acceptance Criteria

1. **Streaming Section**:
   - Displays both normal and trending movie slots correctly.

2. **Search Functionality**:
   - Returns accurate and relevant results.

3. **Movie Grid/Tile Display**:
   - Displays related movies in addition to exact matches.

4. **User Last Seen**:
   - Displays the user’s watch history on the homepage.

5. **Embedding**:
   - Movie playback via embed links works seamlessly.

---

## User Interface Requirements

1. **Responsive Design**:
   - Works across all screen sizes and devices.

2. **Intuitive Navigation**:
   - Easy access to movie slots and search functionality.

3. **Clear Movie Information**:
   - Display detailed movie data in an organized manner.

---

## Performance Requirements

1. **Fast Loading Times**:
   - Optimize API calls and data fetching.

2. **Smooth Playback**:
   - Ensure video streaming is uninterrupted.

3. **Efficient Search**:
   - Debounced search inputs and caching for frequent queries.

---

## Security Requirements

1. **User Data Protection**:
   - Securely store user data and watch history in the database.

2. **Input Validation**:
   - Sanitize user inputs for search queries.

3. **Vulnerability Protection**:
   - Implement security best practices to prevent attacks.

---

## Movie Details to Display

1. **Image**: Movie poster.
2. **Title**: Movie title.
3. **Details**:
   - Year of release.
   - Genre.
   - Director.
   - Actors.
   - Plot summary.
   - IMDb rating.
   - Runtime.
   - Type (Movie/TV series).

---

## Additional Requirements

1. **Error Handling**:
   - Validate API responses for missing or incomplete data.

2. **Caching**:
   - Cache frequently searched results to reduce API calls.

3. **Fallbacks**:
   - Handle cases where data is missing with default placeholders.

---

## Example Display

```html
<div class="movie-card">
  <img src="{Poster_URL}" alt="{Movie_Title}" class="movie-poster" />
  <h3>{Movie_Title}</h3>
  <p><strong>Year:</strong> {Year}</p>
  <p><strong>Genre:</strong> {Genre}</p>
  <p><strong>Director:</strong> {Director}</p>
  <p><strong>Actors:</strong> {Actors}</p>
  <p><strong>Plot:</strong> {Plot}</p>
  <p><strong>Rating:</strong> {Rating}</p>
  <p><strong>Runtime:</strong> {Runtime}</p>
</div>
```

---

## OMDb API Integration

### API Endpoint:
```plaintext
http://www.omdbapi.com/?t={Movie_Title}&apikey={API_Key}
```

### Parameters:
- **t**: Movie title.
- **i**: IMDb ID (optional).
- **apikey**: Your API key.

---

## Conclusion

This documentation outlines the features, requirements, and implementation details for the Streaming Section of Gowra Stream. By leveraging modern APIs, embedding mechanisms, and secure practices, the platform ensures a seamless streaming experience.














# demo cloud connection for mngo

Here’s a step-by-step process for setting up a user authentication system with MongoDB and MongoDB Realm for profile storage, and using cloud storage for profile pictures. We'll break it down into two main parts: **User Authentication and Profile Management** and **Media (Profile Picture) Storage**.

### **Part 1: User Authentication and Profile Management with MongoDB Realm**

MongoDB Realm is a backend-as-a-service platform that integrates with MongoDB Atlas, and provides features like user authentication, triggers, and more.

#### Step 1: Create a MongoDB Atlas Cluster

1. **Go to MongoDB Atlas**:
   - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create an account if you don't have one.
   
2. **Create a Cluster**:
   - After logging in, click on **Build a New Cluster**.
   - Choose a **Cloud Provider** (AWS, Google Cloud, or Azure) and select a **Region**.
   - Select the free tier option if you're just testing, which gives you a 512 MB cluster.
   
3. **Create a Database**:
   - After the cluster is created, go to **Clusters** in the left sidebar.
   - Click on your cluster, then on the **Database** tab.
   - Create a new database and collection (e.g., `users` for storing user profiles).

#### Step 2: Set Up MongoDB Realm

1. **Create a MongoDB Realm App**:
   - Visit [MongoDB Realm Console](https://realm.mongodb.com/) and click **Create a New App**.
   - Choose your MongoDB Atlas cluster (the one you created earlier).
   - Name your Realm app (e.g., `NetflixCloneApp`).

2. **Enable Email/Password Authentication**:
   - In the MongoDB Realm console, navigate to **Authentication**.
   - Enable **Email/Password Authentication** to allow users to sign up and log in using their email and password.
   
3. **Set Up MongoDB Rules**:
   - In MongoDB Realm, go to the **Rules** tab and create a **Read/Write** rule for the `users` collection.
   - Ensure that only authenticated users can access their own profile data by using the `user.id` reference:
     ```json
     {
       "read": {
         "%%user.id": "%%user.id"
       },
       "write": {
         "%%user.id": "%%user.id"
       }
     }
     ```

4. **Enable Triggers** (Optional):
   - If needed, you can set up triggers in Realm to run backend logic whenever certain database changes occur (e.g., updating the profile picture).

#### Step 3: Integrate MongoDB Realm SDK with Your Frontend

1. **Install MongoDB Realm SDK**:
   - In your frontend application (React, for example), install the MongoDB Realm SDK via npm:
     ```bash
     npm install realm-web
     ```

2. **Set Up MongoDB Realm SDK in Your App**:
   - Create a **Realm App** object in your frontend code:
     ```javascript
     import { App } from 'realm-web';

     const app = new App({ id: '<your-realm-app-id>' });
     ```

3. **User Authentication**:
   - Implement sign-up, login, and logout functions using the Realm SDK:
     ```javascript
     const credentials = Realm.Credentials.emailPassword(email, password);
     const user = await app.logIn(credentials);
     ```
   
4. **Store Profile Information in MongoDB**:
   - After logging in, use MongoDB to store user profile information:
     ```javascript
     const mongo = app.currentUser.mongoClient("mongodb-atlas");
     const usersCollection = mongo.db("your-database-name").collection("users");

     // Create or update the user profile in the database
     const profile = {
       email: user.profile.email,
       displayName: "John Doe",
       wishlist: [],
       profilePicUrl: "",  // Placeholder for profile pic URL
     };

     await usersCollection.updateOne(
       { _id: user.id },
       { $set: profile },
       { upsert: true } // Create if not exists
     );
     ```

#### Step 4: Store and Update User Data

- When the user updates their profile (e.g., name, bio, etc.), update their document in MongoDB.
- If you allow users to update their display name or wishlist, you can run similar queries to update the database.

---

### **Part 2: Media (Profile Picture) Storage using Cloud Storage**

To store profile pictures, you should not store them directly in MongoDB but use cloud storage and save the URL in MongoDB. Here’s how you can do that:

#### Step 1: Choose a Cloud Storage Provider

For media storage, you can use **Google Cloud Storage**, **Amazon S3**, or **any cloud provider**. Alternatively, if you already have a **500 MB cloud storage plan**, you can use that (e.g., Google Drive, OneDrive).

For this example, we’ll assume you're using **Google Drive**, but the steps will be similar for other services.

1. **Create a Google Drive API project**:
   - Visit the [Google Developers Console](https://console.developers.google.com/).
   - Create a new project and enable the **Google Drive API**.
   - Create **OAuth 2.0 credentials** and download the `credentials.json` file.

2. **Set up Google Drive SDK (Frontend)**:
   - To interact with Google Drive via API, you’ll need to use the **Google API Client Library** in your frontend.
   - Install the client library:
     ```bash
     npm install googleapis
     ```

3. **Integrate Google Drive Upload in Your App**:
   - Implement a function to upload the profile picture to Google Drive:
     ```javascript
     import { google } from 'googleapis';

     const uploadProfilePic = async (file) => {
       const drive = google.drive({ version: 'v3', auth: 'YOUR_OAUTH2_CLIENT' });

       const fileMetadata = {
         name: 'profile_pic.jpg',
       };
       const media = {
         mimeType: 'image/jpeg',
         body: file,  // the file object from the file input
       };

       const res = await drive.files.create({
         resource: fileMetadata,
         media: media,
         fields: 'id',
       });

       return `https://drive.google.com/uc?export=view&id=${res.data.id}`;
     };
     ```

4. **Upload Profile Picture**:
   - When the user uploads a profile picture, upload the image to Google Drive and get the URL:
     ```javascript
     const imageUrl = await uploadProfilePic(file);
     ```

5. **Save the URL to MongoDB**:
   - After uploading the image, save the URL in the user’s profile document in MongoDB:
     ```javascript
     await usersCollection.updateOne(
       { _id: user.id },
       { $set: { profilePicUrl: imageUrl } }
     );
     ```

#### Step 2: Display the Profile Picture

- In your frontend, you can now fetch the **profilePicUrl** from MongoDB and display the profile picture:
  ```javascript
  const profile = await usersCollection.findOne({ _id: user.id });
  const profilePicUrl = profile.profilePicUrl;
  ```

- Use this URL in an `<img>` tag to show the profile picture:
  ```html
  <img src={profilePicUrl} alt="Profile" />
  ```

---

### **Final Notes:**

- **MongoDB Realm** provides you with a backend for handling authentication, and MongoDB Atlas is where your user data (profile, wishlist, etc.) is stored.
- **Cloud Storage** (like Google Drive) is used for media files like profile pictures.
- **MongoDB** stores the metadata (like URLs for images) and structured data (wishlist, preferences, etc.).
  
This approach is scalable, secure, and allows you to manage user profiles effectively while also storing large media files (like images) in an efficient manner.

Let me know if you need further details or help on any specific step!