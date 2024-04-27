const express = require("express")
const router = require("./Routes/index")
require('./dB')
const app = express()   
app.use(express.json())
app.use("/api", router)
app.listen(8000 , ()=>{
    console.log(`Port running on http://localhost:8000`);
})