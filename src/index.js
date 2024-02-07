const express = require ('express');
const app = express();
const port  =  8001;
const urlRoute = require('./router/url');
const  connectToDB  = require("./models/db");
const urlDb = require("./models/urlmodel")

connectToDB();

app.use(express.json());
app.use('/url',urlRoute );

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.get('/:shortID',async(req,res)=>{
    
    const shortID = req.params.shortID;
    const reurl = await urlDb.findOneAndUpdate({
        shortID :shortID,


    },
    {
        $push:{
            visitTime: {timestamp:Date.now(),}
        }

    },
    )
    res.redirect(reurl.redirectUrl)

})





// listening the port 
app.listen( port, ()=>{
    console.log(`listening to the port ${port}`);
})
