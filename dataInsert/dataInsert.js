const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

const articleSchema=new mongoose.Schema({
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: Date
});
const Article=mongoose.model('Article', articleSchema);

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Connected to MongoDB');
    fs.readFile("data.json",'utf-8',(err,data)=>{
        if(err){
            console.error('Error reading JSON file:', err);
            process.exit(1);
        }
        const articles=JSON.parse(data);
        Article.insertMany(articles)
            .then(()=>{
                console.log('Data successfully inserted!');
                mongoose.connection.close();
            })
            .catch((err)=>{
                console.error('Error inserting data:', err);
                mongoose.connection.close();
            })
    });
})
.catch(err=>{
    console.error("Error at connecting to MongoDB: ", err)
})

