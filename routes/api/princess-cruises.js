const express = require("express");
const router = require("express").Router();
const bodyParser = require("body-parser");
const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require("mongoose");
const cruisesController = require("../../controllers/cruisesController");
const app = express();

// A GET route for scraping the Times website
router.get("/scrape", function (req, res) {
  // First, we grab the body of the html with request
  axios.get("https://www.princess.com/find/searchResults.do?trade=F").then(function (response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);
    var resultsPrincess = [];

    // Now, we grab every h2 within an article tag, and do the following:
    $("div.search-content-page0").each(function (i, element) {
      // Save an empty result object
      var resultPrincess = {};

      // Add the text and href of every link, and save them as properties of the result object
      resultPrincess.name = $(this).children().children().find("div.cruise-info.col-xs-12.col-xs-pad-0.col-lg-6.col-md-5.top-spacing-10.bottom-spacing-10").text();
      resultPrincess.price = $(this).children().children().children().children().children().children().children().find("div.farePrice").text();
      resultPrincess.date = $(this).children().children().children().find("h2.resultHeading").find("ul.resultOverview").children().text().split(' , ');
      // result.summary = $(this).children().children().children().find("noscript").text().slice(165, 400).split("alt=");

      console.log("resultPrincess", resultPrincess);

      // Create a new Article using the `result` object built from scraping
      $(".cruise-container").empty();


      // db is not defined
      // Try using your cruiseController 

      router.route("/")
        .get(cruisesController.findAllPrincess)
        .post(cruisesController.createPrincess);

      // db.Cruise.create(result)
      //   .then(function (dbCruise) {
      //     // View the added result in the console
      //     console.log("database" + dbCruise)
      //     results.push(dbCruise);
      //   })
      //   .catch(function (err) {
      //     // If an error occurred, send it to the client
      //     return res.json(err);
      //   });
    

    // If we were able to successfully scrape and save an Article, 
    // render a message to the client on a splash page which informs them of the status of the scrape
    res.json(resultPrincess);
  });
  });
});

// // Matches with "/api/books"
// router.route("/")
//   .get(cruisesController.findAll)
//   .post(cruisesController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;