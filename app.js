const express = require('express');
const mongoose = require('mongoose');
const mydata = require('./json/process');
const myschema = require('./schema');

const app = express();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false })); 
 
// parse application/json
app.use(express.json()); 


const mongourl = 'mongodb://127.0.0.1/hostguest';
mongoose.connect(mongourl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);

myschema.find(function (err, datafromdb) {
    if (err) return console.error(err);
    if(datafromdb.length === 0)
    {
        myschema.insertMany(mydata, function (err, result) {
            if (err) return console.error(err);
            console.log("Data Inserted Successfully")
        });
    }
    else{
        console.log("data alreay extracted")

    }
})

app.get('/api/data', function (req, res) {
    myschema.find(function (err, datafromdb) {
        if (err) return console.error(err);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(datafromdb);
        
    });
});
app.get('/api/singprod/:prodid', function (req, res) {
    console.log(req.params.prodid)
    let prodid = req.params.prodid
    myschema.findById(prodid,function (err, datafromdb) {
        if (err) return console.error(err);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(datafromdb);
        
    });
});



const hostname = "127.0.0.1";
const port = process.env.PORT || 8000;

app.listen(port, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});