const router = require("express").Router();
// const beerController = require("../../controllers/beer_controller");
const axios = require("axios");



router.get("/:name", (req, res) => {
	console.log("testing===========");

  axios
    .get("http://api.brewerydb.com/v2/beers?key=b269c222a8599122e8f011edb23e3bbb&name="+req.params.name)
    .then(({data}) => {
    	console.log("++++++++++++++++++++++++++++")
    	console.log(data)
    	return res.json(data)
    })
    .catch(err => res.status(422).json(err));
});



module.exports = router;













// const router = require("express").Router();
// const request = require("request");

// // Matches with "/api/ratebeer"
// router.post("/", (req, res) => {

//   var headers = {
//     "content-type": "application/json",
//     "accept": "application/json",
//     "x-api-key": process.env.RATE_BEER
//   };

//   var dataString = '';

//   var options = {
//     url: "http://api.brewerydb.com/v2/beers?key=b269c222a8599122e8f011edb23e3bbb&name=lagunitas ipa",
//     method: "POST",
//     headers: headers,
//     body: dataString
//   };

//   request(options, (req, res) => {
//     console.log(res.body);
//   });

// });


// module.exports = router;
















// const router = require("express").Router();
// // const beerController = require("../../controllers/beer_controller");
// const axios = require("axios");



// router.get("/", (req, res) => {
//   axios
//     .get("http://api.brewerydb.com/v2/beers?key=b269c222a8599122e8f011edb23e3bbb&name=lagunitas ipa")
//     .then(({data}) => {
//     	console.log("++++++++++++++++++++++++++++")
//     	console.log(data)
//     	return res.json(data)
//     })
//     .catch(err => res.status(422).json(err));
// });



// module.exports = router;




// // Matches with "/api/saved"
// router.route("/")
//   // .get(beerController.findAll)
//   .post(beerController.create);

// // Matches with "/api/saved/:id"
// // router.route("/:id").delete(beerController.remove);

// module.exports = router;