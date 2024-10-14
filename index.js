//main modules to fetch the response
const Users = require('./fetchUsers');
const Posts = require('./fetchPosts');
const Comments = require('./fetchComments');


module.exports = {
    Users,
    Posts, 
    Comments
}