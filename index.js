const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

const category = require('./data/categories.json')

app.get('/category', (req , res)=>{
    res.send(category)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});