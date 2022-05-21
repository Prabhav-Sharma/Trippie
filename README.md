# [Trippie](https://trippies.netlify.app/)
A social media platform built using ReactJS

The platform enables you to connect with people, follow/unfollow them, create new posts, add comments, bookmarks posts, edit profile and edit posts/comments.

## Screens
![chrome-capture-2022-4-21](https://user-images.githubusercontent.com/88072012/169647382-f3311ae0-4b3d-40f2-8efe-a76ec85b5a14.gif)

## State Management
- Global state has been managed using redux toolkit library

## Features
### Authentication 
- Authentication allows the user to login/signup into the app to unlock personalized features.
- Redirects user to login page, if an attempt is made to navigate to protected pages which requires the user to be authenticated
- Authentication is achieved by using an encoded token so as to not publicize user data.

### Home
- The user can like, bookmark, and comment on posts. They can view all the posts of the users they're following as well as their own posts.
- The user can add new posts.

### Bookmarks
- All the posts that the user has bookmarked will be easily accessible from here.
- The user can perform all post operations on the bookmarked posts.

### Explore
- The user can view all the posts including the ones from users whom they're not following. 

### Posts
- The posts allow few simple operations on them such as like, comment, and bookmark.
- The users can also navigate to the profile page of the author of the post by clicking on the profile image, or username.
- On clicking the post, the user is taken to the post's page, where they can perform post operations, and add comments.

### Profile Page
- The profile page lists the information of the user such as their full name, username, profile image, about section, portfolio link, and stats such as following, followers and total posts.
- All the posts that user are shown here and post operations can also be performed.
- The user can be followed/unfollowed from here.

### My Profile Page
- Similar to the profile page above, here the data is shown of the currently logged-in user
- Instead of a follow button, this page has an edit button that allow the user to edit their details such as profile image, full name, about section and portfolio URL.
- All of the posts of the current user are shown.
- The user can add new posts.

### Edit
- The user is redirected to the edit page whenever they need to edit their post or comment. It uses the same component used for adding the comment or post in the first place.
- They can save the changes to the post/comment by clicking on the edit button.
- Once, the changes are updated the user is redirected back to the place where they initiated the edit operation.

## Key Components
### Feed
- The feed components renders a list of all posts/comments that are passed to it. 
- It adds an observer on the loading... tag to load more posts when the user scrolls near it. The idea of an infinite scroll and paginated data. On initial render only a few posts are loaded from the backend so as to reduce fetching time and optimize performance, if the user scrolls, new posts are fetched and added to the UI.
- Currently, the data is not paginated as mockbee backend returned all posts at once but the app simulates the experience nonetheless
- Sort By: The feed can be sorted in 3 ways, latest, oldest and trending 
- Used across the app for rendering comments/posts.

### Search
- The components allows the user to search for other users across all present on the platform.
- It checks both the username and the full name of all the users.

### CreateContent
- This component is used across the app wherever a new content has to be added or edited. Such as comment, post, editing post/comment

### ProfileEditModal
- A modal that shows the user data such as full name, profile picture, about section, and portfolio link. 
- The data can be edited and saved from here, on successfully saving data, the modal will close on it's own.

