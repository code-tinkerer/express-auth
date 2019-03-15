const router = require("express").Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.use(require("./auth-controller"));
router.use(require("./items-controller"));

module.exports = router;
