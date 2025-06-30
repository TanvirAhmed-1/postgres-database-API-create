const express = require('express');
const port=process.env.PORT || 5000
const app=express()


app.use(express.json())


app.get("/products",async(req,res)=>{
    try {
      res.status(200).send({message:`all products show`}) 
    } catch (error) {
       res.send({ error: "error.message" });
    }
})

app.post("/products",async(req,res)=>{
    try {
       const {name, price}=req.body

        res.status(200).send({message:`the product name ${name} and ${price}`})
    } catch (error) {
     res.send({ error: "error.message" });  
    }
})


app.get("/products/:id",async(req,res)=>{
    try {
        const id=req.params.id

        res.status(200).send({message:`the product id ${id}`})
    } catch (error) {
      res.send({ error: "error.message" }); 
    }
})

app.put("/products/:id",async(req,res)=>{
    try {
        const id=req.params.id
          const {name, price}=req.body
        res.status(200).send({message:`the product  ${name} and ${price} ${id}`})
    } catch (error) {
      res.send({ error: "error.message" }); 
    }
})

app.delete("/products/:id",async(req,res)=>{
    try {
        const id=req.params.id

        res.status(200).send({message:`the delete product id ${id}`})
    } catch (error) {
      res.send({ error: "error.message" });  
    }
})


app.get("/", (req,res)=>{
    res.send("server is Running")
})
app.listen(port,()=>{
    console.log(`the server is Running port ${port}`)
})