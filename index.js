const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

const category = require('./data/categories.json')
const courses = require('./data/courses.json')

app.get('/category', (req , res)=>{
    res.send(category)
})
app.get('/courses',(req , res)=>{
    res.send(courses)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});