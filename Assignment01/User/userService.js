const users  = require('./usersdb')
const postservice=require('../Post/postService')

function getUsers() {
    return users;
}

function getUser(id){
    return users.find((user)=>user.id==id)
}

function getUserSummary(id){
    const postcount= postservice.countUserPost(id)
    let summary = users.find((user)=>user.id==id)
    summary['No of Post'] = postcount
    return summary
}

module.exports={getUsers, getUser, getUserSummary} 