const express = require('express');
const router = express.Router();

const view = require("../views/AudioView");

router.get("/", view.get);

module.exports = router;