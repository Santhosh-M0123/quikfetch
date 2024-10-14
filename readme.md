
# quikfetch

**quikfetch** is a simple and lightweight package that helps you fetch users, posts, and comments from an API with minimal setup. It wraps common fetch requests for user, post, and comment data into easy-to-use functions.

## Features

- Fetch all users or a specific user by ID.
- Fetch all posts or a specific post by ID.
- Fetch all comments or a specific comment by ID.
- Simple validation to ensure the correct ID format.

## Installation

You can install `quikfetch` via npm:

```bash
npm install quikfetch
```

## Usage

After installing, you can use the package in your project by requiring the functions to fetch users, posts, and comments. Here’s how to use them:

### Fetch Users

The `Users` function allows you to fetch all users or a specific user by their ID.

```javascript
const { Users } = require('quikfetch');

(async () => {
    // Fetch all users
    const allUsers = await Users();
    console.log(allUsers);

    // Fetch a specific user by ID
    const singleUser = await Users(1);
    console.log(singleUser);
})();
```

### Fetch Posts

The `Posts` function allows you to fetch all posts or a specific post by its ID.

```javascript
const { Posts } = require('quikfetch');

(async () => {
    // Fetch all posts
    const allPosts = await Posts();
    console.log(allPosts);

    // Fetch a specific post by ID
    const singlePost = await Posts(1);
    console.log(singlePost);
})();
```

### Fetch Comments

The `Comments` function allows you to fetch all comments or a specific comment by its ID.

```javascript
const { Comments } = require('quikfetch');

(async () => {
    // Fetch all comments
    const allComments = await Comments();
    console.log(allComments);

    // Fetch a specific comment by ID
    const singleComment = await Comments(1);
    console.log(singleComment);
})();
```

## API Reference

### `Users(id = null)`

- **id** (optional): A number representing the user ID. If omitted, all users will be fetched.

Returns a `Promise` that resolves to the user data or a specific user’s data.

### `Posts(id = null)`

- **id** (optional): A number representing the post ID. If omitted, all posts will be fetched.

Returns a `Promise` that resolves to the post data or a specific post’s data.

### `Comments(id = null)`

- **id** (optional): A number representing the comment ID. If omitted, all comments will be fetched.

Returns a `Promise` that resolves to the comment data or a specific comment’s data.

## Validation

Each function internally validates the `id` to ensure it is a valid integer. If the `id` is not valid, the function will return an error response.
