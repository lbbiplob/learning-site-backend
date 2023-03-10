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

app.get('/course/:id',(req, res)=>{
    const id = req.params.id;
    const course = courses.find(course=> course.id === id)
    res.send(course)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});