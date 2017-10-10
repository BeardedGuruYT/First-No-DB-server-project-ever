const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const port = 4747
const cors = require('cors')


      
      app.use(bodyParser.json())
      app.use(cors())
      
      app.get('/api/weather/:city', (req,res) =>{
axios.get(`http://api.openweathermap.org/data/2.5/weather?APPID=095421a61653c7ecd895479ed2aad5fc&q=${req.params.city}`)
.then(response => {
    res.status(200).send(response.data)
})
      })


// app.post
// app.








      app.listen(port, () => console.log(`im listening ${port}`))