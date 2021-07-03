const os = require("os")
//console.log(os.networkInterfaces());
const dotenv = require("dotenv");

const http = require("http");
const port = process.env.PORT || 8996;

const msg = require("./custom/newModule");

//var bodyParser = require('body-parser');
const express = require("express");

//const router = express.Router();
const path = require("path");

var fs = require('fs');

const app = express();

app.use('/', express.static('/'));
app.use('/images', express.static('images'));

// Set 'views' directory for any views 
// being rendered res.render()
//app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Welcome to : " + msg.massege + "<br>");
    res.write("The date and time are currently: " + msg.myDateTime() + "<br>");
    res.write("add 3 and 4 values : " + msg.add(3, 4));

    res.end();
})

app.get('/', async (req, res) => {
    // const filePath =  path.join(__dirname, "/custom/newModule.js");
    // res.status(200).sendFile(filePath);

    res.status(200);
    const directoryPath = path.join('C:/');
    //var fileNames = [];
    fs.readdir(directoryPath, function (err, files) {

        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        
        files.forEach(function (data) {
            console.log(data);
            if(data.includes(".txt")){
                console.log(data);
                res.write('<div style="display:flex; align-items:center;"><img src ="./images/sys.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
            }
            else if(data.includes('.sys')){
                res.write('<div style="display:flex; align-items:center;"><img src ="./images/sys.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
            }
            else{
                res.write('<div style="display:flex; align-items:center;"><img src ="./images/folderIcon.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
            }
        });
        //console.log(files);
        //var name = 'hello';
        //res.render('index.html', {name:name});
        //res.send(fileNames);
    });

})

//server.listen(port, () => console.log(`::: server is 🚀 on port ${port}`));

app.listen(port, () => console.log(`::: server is 🚀 on port ${port}`));