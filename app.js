const express = require('express'); //framework we are calling to create a node server
const app = express();//we are declaring a varibale app for the express

app.get('/',(req,res)=> { //am checking to see if everything is well
    res.send('things are gine')
;})

app.listen(3000,(err)=> {//we teling node to listen to this port
    if(err) {
        console.log(err ,'error starting server') //incase of error it throws this
    }
    console.log('server success');//otherwise if no error it disthis

    //am addiing 