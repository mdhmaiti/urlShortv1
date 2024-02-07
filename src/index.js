const express = require ('express');
const app = express();
const port  =  8001;

app.get('/',(req,res)=>{
    res.send("hello express")
});

// listening the port 
app.listen( port, ()=>{
    console.log(`listening to the port ${port}`);
})
