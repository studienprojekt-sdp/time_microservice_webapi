const axios = require("axios"); // using axios to handle the http request
const express = require("express"); // express for building the web app
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log("Listening at http://localhost:" + port);
});

app.get("/api/timezone/tz=:timezone(*)", function(req, res) { // the (*) is important, otherwise express will think "/" in the timezone (e.g. in Europe/Berlin) is another route
  const timezone = req.params.timezone; // the timezone that is passed via the URL
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