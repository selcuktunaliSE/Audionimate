const express = require('express');
const router = express.Router();

const view = require("../views/SketchView");

router.get("/", view.get);

module.exports = router;