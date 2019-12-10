const express = require("express");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");
const path = require("path");

const allShows = require("./data/tvShows.json");
const allMovies = require("./data/movies.json");
const config = require("./config.js");

const router = express.Router();

//Check for Authorization
const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUrl: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: [config.AUDIENCE],
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: "RS256"
})

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
    //When app is built, this file will be created. Currently it is not created.
});

router.get("/api/", (req, res) => {
    res.send("API is working");
});

router.get("/api/data/tvshows", (req, res) => {
    res.json(allShows);
});

router.get("/api/data/movies", authCheck, (req, res) => {
    res.json(allMovies);
});

module.exports = router;