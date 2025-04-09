const express = require('express')
const router = express.Router()
const UsersService = require("./UsersService")


router.get('/:id', (req, res) => {
    try {
        const id = req.params.id
        const result = UsersService.getUser(id)

        if (result) {
            res.status(200).json(result)
        }
        else {
            res.status(404).send("User not found")
        }

    }
    catch (err) {
        res.status(500).send("Internal Error")
    }

})

module.exports = router