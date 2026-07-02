let express = require('express');
let app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const contactRoute = require("./routes/contactRoute")

let funcTest = (req, res) => {
    res.send('Hello World');
}

//Krijimi i nje API
app.use("/", funcTest);
//Krijimi i lidhjes me databazen
mongoose.connect("mongodb://xhenisa2:xhenisa1234@ac-ojtz2ib-shard-00-00.au5mvpr.mongodb.net:27017,ac-ojtz2ib-shard-00-01.au5mvpr.mongodb.net:27017,ac-ojtz2ib-shard-00-02.au5mvpr.mongodb.net:27017/xhenisa2?ssl=true&replicaSet=atlas-gdgp62-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
    console.log('Database is connected');
} )  
.catch((err)=> {
    console.log('Error in database connection', err);
    })

    //therritja e routerave//
    app.use(contactRoute)

// Krijimi iserverit
app.listen(5000, 'localhost', () => { console.log('Server is created on port 5000') });


