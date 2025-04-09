const posts = require('/postdb')

function countUserPost(userid){
    return posts.filter((post)=>post.authorId==userid).length
}

module.exports={countUserPost}
