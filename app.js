const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { ObjectID } = require("mongodb");

class App {

    constructor() {
        this.server = express();
        this.server.use(bodyParser.json());
        this.server.use(bodyParser.urlencoded({ extended: true }));
        this.server.use(cors({ credentials: true }));

        const mongoose = require("mongoose");
        let db_string = "";
        mongoose.connect(db_string, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.Promise = global.Promise;
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "MongoDB connection error:"));

        this.middlewares();
        this.routes();
    }

    middlewares() {

    }

    routes() {

    }

}

module.exports = new App().server