// this generate short url 
const urlDb = require("../models/urlmodel")

import ShortUniqueId from 'short-unique-id';
import { connectToDB } from '../models/db';


// this returns an id  of type string 
const generateShortUrl = async(req,res)=>{

    if(!req.body){
        return res.status(400).json("the body is empty/ the nody is not a string");
    }
    const uuid = new ShortUniqueId({length:5});
    try {
        await connectToDB();
        await urlDb.create({
            shortID: uuid,
        },
        {
            redirectUrl: req.body,
        }
        )
    
        return res.status(200).json({id:uuid });
        
    } catch (error) {
        console.log(error,"the database connection failed ");

        
    }
   
    
   

}
module.exports= {
    generateShortUrl,
}