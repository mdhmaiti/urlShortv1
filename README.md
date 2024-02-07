# url shortener  backend using the node js, express js, mongo db ( do not use chat gpt or stack over flow )
Design a url shortener service that takes a valid url and then return a shortened url, redirection the user to the original url 

## problem statement 
 Routes 
 1. post / url - Generates a new short url and retturns the short url and returns the short url in the format  example.com/ random-id.
 2. Get / :id - redirects the user to the original Url 
 3. get/ url / analytics returns the clicks for the provided short id 

## steps 

1. init the npm install the express and mongoose 
2. check the express if it is working fine , 
3. create the schema for the database 
4. write the controllers
4. // statements:
    * generate a short unique id 
    * take the input from the users 
    * pass both of them in the db 