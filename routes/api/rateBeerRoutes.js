const router = require("express").Router();
const request = require("request");

// Matches with "/api/ratebeer"
router.post("/", (req, res) => {

  const headers = {
    "content-type": "application/json",
    "accept": "application/json",
    "x-api-key": process.env.RATE_BEER
  };

  let dataString = {
    query: 'query { beerSearch(query: "' + req.body.beerName + '") { items { id name }}}'
  };

  const options = {
    url: "https://api.r8.beer/v1/api/graphql/",
    method: "POST",
    headers: headers,
    body: JSON.stringify(dataString)
  };

  request(options, (req, res) => {
    console.log("--------------");
    console.log(res.body);
  });

});


module.exports = router;