require("dotenv").config()
const {runWhatsappClient, qrValue, sendMessage} = require("wa-api-with-personnal-assistant")
const express = require("express");
const app = express();
//active : code for actived personal asisstan example : AI!
//nonActive : code for nonActive personal asisstan example : AIX!
//apiKey : ure use gorq-ai for get apikey 
//system about your system ai example :  My Name is Jarvis
// your phone number with code example : +628626367

runWhatsappClient(process.env.ACTIVE_AI, process.env.NON_ACTIVE_AI, process.env.GORQ_API, process.env.SYSTEM_PERSONAL,  process.env.NAME_PERSONAL, process.env.PHONE_NUMBER);
app.use(express.json())

app.post("/message", async (req, res)=>{
     const sendMessages = await sendMessage(req.body.phone, req.body.message);
    res.send({
        status : "success",
        statusCode : 200,
        message : sendMessages,
    })
})

app.listen(4000, ()=>console.log(`Running on port ${4000}`))