const {jsonplaceholder} = require('./baseUrl.config');
const IsValidId = require('./checkInt');
//function that fetch users
const Posts = async (id = null) => {
    const uid = id ? IsValidId(id) : {status : true};
    if(uid?.status){
        const endpoint = id && id ? `posts/${uid?.id}` : 'posts'
        const url = `${jsonplaceholder}/${endpoint}`;
        const response = await fetch(url); // Await the fetch response
        const data = await response.json(); // Await the json parsing
        return data; // Return the data to the caller
    }else{
        return uid;
    }
}

module.exports = Posts;