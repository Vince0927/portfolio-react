// Create express for server, mongoose for db
const express = require('express');
const express_app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

express_app.use(express.json());

// ensure database connection

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("from mongoose.connection = DB Connected successfully");
});


// set up environment variable

require("dotenv/config");


// Middlewares / functions
express_app.use(express.json());    //previous body-parser to json() is deprecated
express_app.use(cors());


// Import routes from another folder

const postsRoute = require('./routes/posts');

// Apply use function
// you can use multiple routes eg /posts, /users etc
express_app.use('/posts', postsRoute);




//ROUTES

express_app.get('/', (req,res) => {
    res.send('This is the home route');
});


// express_app.get('/posts', (req,res) => {
//     res.send('We are on post route');
// });


// CONNECT TO DATABASE SECOND CHECK

// mongoose.connect('mongodb+srv://rest:rest143@cluster0.w0hrq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
//     console.log('Connected to rest user database');
// });


mongoose.connect(process.env.CONFIG_ENV_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, 
  () => console.log('from mongoose.connect = This is connected to mongodb database!')
);

// START LISTENING TO THE SERVER


//HEROKU DEPLOYMENT
// Server static assets if in production
if(process.env.NODE_ENV === 'production'){
  // set static folder
  express_app.use(express.static('my-react-app/build'));

  express_app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'my-react-app', 'build', 'index.html'));
  })
}





var my_port = 5000;
express_app.listen(my_port, () => {
    console.log(`Server is running at port: ${my_port}`)
});


