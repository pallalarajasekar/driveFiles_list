const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 9090;

app.use('/', express.static('/'));
app.use('/images', express.static('images'));

const data = fs.readdirSync('c:/',err =>err);

const iterator = data.map((data,i) =>{
    return data ;
})

app.get('/',(req, res) =>{
    iterator.forEach(data=>{
 
        if(data.includes(".txt")){
            res.write('<div style="display:flex; align-items:center;"><img src ="./images/sys.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
        }
        else if(data.includes('.sys')){
            res.write('<div style="display:flex; align-items:center;"><img src ="./images/sys.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
        }
        else{
            res.write('<div style="display:flex; align-items:center;"><img src ="./images/folderIcon.png" width="20px"/><p style="padding-left:5px">'+data+'</p></div>');
        }

        
    })
})

app.listen(port,()=>{
    console.log("server started");
})