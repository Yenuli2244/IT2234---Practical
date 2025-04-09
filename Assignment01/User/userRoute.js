const express=require('express')
const router=express.Router()
const userService=require('./userService')

router.get('/', (req,res)=>{
    try{
        const results = userService.getUsers()
        
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No data Found !")
        }

    } catch(error){
        console.error(err);
        res.status(500).send("Server Error!")
    }

})

router.get('/:id',(req,res)=>{
    const id = req.params.id
    const results = userService.getUser(id)
    if(results){
        res.status(200).json(results)
    }else{
        res.status(404).send("Sorry, No data Found !")
    }
})

router.get('summary/:id',(req,res)=>{
    try{
        const id = req.params.id
        const results = userService.getUserSummary(id)
        
        if(results){
            res.status(200).json(results)
        }else{
            res.status(404).send("Sorry, No data Found !")
        }

    } catch(error){
        console.error(err);
        res.status(500).send("Server Error!")
    }
})


module.exports=router

