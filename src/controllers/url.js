// this generate short url
const urlDb = require("../models/urlmodel");

const ShortUniqueId = require("short-unique-id");
const  connectToDB  = require("../models/db");

// this returns an id  of type string
const generateShortUrl = async (req, res) => {
  const {url} = req.body;
  if (!url) {
    return res.status(400).json("the body is empty/ the nody is not a string");
  }
  const uuid = new ShortUniqueId();
  const id = uuid.rnd()
  try {
    await connectToDB();
    await urlDb.create({
      shortID: id,
      redirectUrl: url,
      visitTime: [],
    });

    return res.status(200).json({ id: id });
  } catch (error) {
    console.log(error, "the database connection failed ");
  }
};
module.exports = {
  generateShortUrl,
};
