import express from "express";

const server = express()
server.use(express.json())

server.listen(3000, () => {
    console.log("Started server at port 3000...")
})

server.get('/', (req, res) => {
    // console.log(req)
    res.status(200).send(req.body)
})