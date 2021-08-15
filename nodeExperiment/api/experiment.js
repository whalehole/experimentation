const express = require('express');
const app = express();
const cors = require('cors')

const corsOptions = {
    origin: "http://localhost:80",
    credentials: true,
    allowHeaders: ['Content-Type', 'Authorization']
}

app.use(express.json())

app.get('/name', cors(corsOptions), (req,res)=>{
    console.log("a request has been made.")
    res.send("YongSan")
})

app.listen(8000, () => {
    console.log("Listening on port 8000. Go to http://localhost:8000");
})