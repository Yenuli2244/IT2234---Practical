const comments = require('./Commentsdb')
const users = require('../Users/Usersdb')

function getComments(id)
{
    let result = []

    comments.forEach(comment => {
        if (comment.postId === id)
        {
            let commentator = users.find(user => user.id === comment.userId)
            result.push({
                comment: comment.content,
                commentator: commentator.fullName

            })
        }
    })

    return result;
}

module.exports = { getComments }