// This piece of code installs the packages which you required
import express from "express";
import mongoose from "mongoose";
import Products from "./product.js";


const app = express();
//This piece of code allots you a 5000 port no and in case if 5000 port is busy it will allots you another port
const port = process.env.PORT || 5000;


//This is a database address which i have stored in a variable called db
const db = "mongodb+srv://admin:admin123@cluster0.xfuxbmt.mongodb.net/?retryWrites=true&w=majority"

//middlewares
app.use(express.json());

//This piece of code helps you to connext your database
mongoose.connect(db)



//Api endpoints
//This is simple api endpoint for homepage where you will get the hello world message
app.get('/', (req,res) => {
    res.send("hello world i am from the backend");
})



//This is a api endpoints for products where user can post their products
app.post('/product', (req,res) => {
    const dbProducts = req.body;
    Products.create(dbProducts, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    });
});



//This piece of code helps user to display the code 

app.get('/product', (req,res) => {
    const dbProducts = req.body;
    Products.find(dbProducts, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    });

});



//This piece of code listen on the port

app.listen(port, (req,res) => {
    console.log(`i am lisetening on port ${port}`)
});