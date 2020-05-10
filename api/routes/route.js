const { Router } = require("express");
const router = new Router();

let Example = require('../controllers/controller')

router.get('/example', Example.controller)

module.exports = router;
