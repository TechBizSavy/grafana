import express from "express"
import responseTime from "response-time"
import doSomeHeavytask from "../grafana/delay"
import client, { register } from "prom-client"
const app = express()
const PORT = 8000



const collectDefaultMetrics = client.collectDefaultMetrics
collectDefaultMetrics({register : client.register})

const reqResTime = new client.Histogram({
    name : "http_express_req_res",
    help : "This shows how much time is taken by req and res"
})

app.use(responseTime(res, req, time)=>{
    
})

app.get('/' , (req , res) => {
 res.json({msg : "heloo bun "})
})


app.get("/metrics" , async(req , res) => {
  res.setHeader("Content-type" , client.register.contentType)  
  const metrics = await client.register.metrics()
  res.send(metrics)
})

app.get('/slow' , async (req , res) => {
    try {
        const timeTaken = await doSomeHeavytask()
        res.json({
        status : "Sucess",
        msg : `Task completed ${timeTaken} ms`
       })
    } catch (error) {
        res.status(500).json({
            status: "Errorr"
        })
    }
})


app.listen(PORT , () => {
 console.log("Server started") 
})