const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())
var nodemailer=require('nodemailer')
const transporter=nodemailer.createTransport({
    port:465,
    host:'smtp.gmail.com',
    auth:{
        user:'vin.satyam@gmail.com',
        pass:'tstovbnevwmlugra',

    },
    secure:true
})
server.listen(process.env.PORT || 3030);