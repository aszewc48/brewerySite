const router = require("express").Router();
const axios = require('axios');
const { response } = require("express");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/getAllBrew', (req,res,next) => {
  axios.get(`https://api.openbrewerydb.org/breweries?per_page=50`)
  .then(response => {
    console.log('Brewery data:', response)
    res.render('allBrews.hbs', { breweries: response.data})
  })
  .catch(err => console.log('Error getting brewery:', err))
})

router.get('/getRandomBrew', (req,res,next) => {
  axios.get(`https://api.openbrewerydb.org/breweries/random`)
  .then(ranResponse => {
    console.log('Random brewery data:', ranResponse.data)
    res.render('randomBrew.hbs', { ranBreweries: ranResponse.data[0]})
  })
  .catch(err => console.log('Error getting random brewery:', err))

})

router.get('/brewLibrary/:name', (req,res,next) => {
  axios.get(`https://api.openbrewerydb.org/breweries?by_name=${req.params.name}&per_page=50`)
  .then(libData => {
    console.log('Data for searching library:', libData)
    res.render('BreweryLibrary.hbs', {breweries: libData.data})
  })
  .catch(err => console.log('Error looking through library:', err))
})

module.exports = router;
