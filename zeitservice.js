const axios = require("axios"); 
const express = require("express"); 
const app = express();

const port = 4000;

app.listen(port, () => {
  console.log("Listening at port:" + port);
});

app.get("/api/timezone/", function(req, res) {
  const timezone = req.query.tz;
  const requestURL = "https://api.ipgeolocation.io/timezone?apiKey=59149b3287fd4d55b0d992b9cf2924ea&tz=" + timezone;

  var config = {
    method: 'get',
    url: requestURL,
    headers: {}
  };
  
  axios(config)
  .then(function (response) {
    res.send(response.data); // we just forward the entire .json
  })
  .catch(function (error) {
    if (error.response) {
      res.status(404).send("Error occurred! Reason: " + error.response.data)
    }
    else {
      res.status(404).send("Unknown error occurred!")
    }
  });
});