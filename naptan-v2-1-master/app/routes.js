const express = require('express')
const router = express.Router()


var fs = require("fs");

// Get content from file
 var region_json = JSON.parse(fs.readFileSync("regions.json"));
// Define to JSON type
 var la_json = JSON.parse(fs.readFileSync("lageojson.json"));

router.get('/get_region_json', function (req, res) {

 res.json(region_json);
});

router.get('/get_la_json', function (req, res) {

 res.json(la_json);
});

module.exports = router;
