const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const postRoutes = require('./routes/posts')
//Parsing Images
app.use(bodyParser.json({limit:"30mb",extended:true}));

//Parsing the encoded url
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

app.use(cors());
app.use('/posts',postRoutes);

const CONNECTION_URL = `mongodb+srv://ankitsharma941:Jv1v0pdOgWMncQwl@cluster0.zofu0.mongodb.net/yaadein?retryWrites=true&w=majority`

const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL, connectionParams).then(()=>{
    app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
}).catch((error)=>{
    console.log(error.message);
});

mongoose.set('useFindAndModify',false)




