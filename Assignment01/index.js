const express = require("express");
const app = express()
const port = 8080


const UsersRoute = require('./Users/UsersRoute')
const CommentsRoute = require('./Comments/CommentsRoute')


app.use(express.json())
app.use('/Users', UsersRoute)
app.use('/Posts', CommentsRoute)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})