const dotenv=require('dotenv')
dotenv.config()
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch=require('node-fetch')
const bodyParser = require('body-parser')
const cors=require('cors')
var FormData = require('form-data');
const app = express()
app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// app.use(express.json({extended:false}))
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
app.post("/test", async(req,res) => {
  // source:https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/dev-tools
    const formData = new FormData();
    formData.append("key", process.env['API_KEY']);
    formData.append("txt", req.body.text);
    formData.append("lang", "en"); 

    const requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow'
      };
      
      const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        .then(response => 
          response.json()
        )
        .then(body => res.json(body))
        .catch(error => console.log('error', error));
})

