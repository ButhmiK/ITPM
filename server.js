const express = require('express')
const app = express()
const mongoose= require('mongoose')
const bodyParser = require('body-parser')
//const cors = require('cors');




//import route
const r_RatingsRoutes = require('./routes/r_Ratings')

//app middle ware
app.use(bodyParser.json());
app.use(r_RatingsRoutes);




const PORT =8000;
const DB_URL = 'mongodb+srv://vdr:vdr123@vdroom.n2pzweq.mongodb.net/'
mongoose.connect(DB_URL)
    .then(() =>{
        console.log('DB Connected');
    })
    .catch((err) => console.log('DB connection error',err));
    
app.listen(PORT, () =>{
    console.log('App running ${PORT}');
});


