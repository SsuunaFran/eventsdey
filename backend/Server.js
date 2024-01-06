const express= require('express');
const app =express();
const cors =require("cors");
const credentials= require("./key.json")
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const allowedOrigins = ['http://localhost:3000'];

app.use(
    cors({
        origin: allowedOrigins,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    })
);

process.env.GOOGLE_APPLICATION_CREDENTIALS = "./key.json";

initializeApp(cert(credentials))
const db= getFirestore();

app.post('/create',(req,res)=>{

    const {firstName, lastName, email, password}=req.body.user

    const id =email
    const userObj={
        firstName:firstName,
        lastName:lastName,
        password:password,
        email:email
    }

    db.collection("Users").doc(id).set(userObj)
    .then((data)=>{
        console.log("ok")
        console.log(data)
        res.json('DATA SENT KAWAAAAA')
    })
    .catch((err)=>{
        console.log(err)
    })
})

const port=process.env.PORT || 9080;
app.listen(port, (req,res)=>{
    console.log(`Listening at ${port}`)
})
