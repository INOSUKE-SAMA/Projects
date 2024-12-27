import express, { urlencoded } from 'express'
import cors from 'cors'
import axios from 'axios'

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req,res,next)=>{
    console.log("This is middleware")
    next()
})

app.get('/',(req,res)=>{
    res.send("Welcome")
})

app.get("/profile/:username/:id",(req,res,next)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write(`<h1>ID:$(req.params.id</h1>)`)
    
    if(req.params.username=="chirag"){
        res.write("Hello Chirag")
    }

    else{
        res.write("access denied")
    }
    next()
    res.end()
})



app.listen(4000)
