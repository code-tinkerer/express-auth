const router = require("express").Router();

const jwt = require("jsonwebtoken");

router.get("/items", function(request, response) {
    var tokenHeader = request.headers["x-authorization"];
    if (!tokenHeader)
    {
        return response.status(401).send("No token given.");
    }

    var token = request.headers["x-authorization"]
    if (!token)
    {
        return response.status(401).send("Invalid token.");
    }

    var result = jwt.verify(token, process.env.AUTH_SECRET);

    response.send(result);
});

module.exports = router;
