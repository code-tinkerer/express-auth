const router = require("express").Router();
const jwt = require("jsonwebtoken");

const models = require("../models");

router.post("/signup", async function(request, response) {
    if (!request.body.firstName)
    {
        return response.status(400).send("First name is required.");
    }

    if (!request.body.lastName)
    {
        return response.status(400).send("Last name is required.");
    }

    if (!request.body.email)
    {
        return response.status(400).send("Email is required.");
    }

    if (!request.body.password)
    {
        return response.status(400).send("Password is required.");
    }

    var user = await models.User.create({
        first_name: request.body.firstName,
        last_name: request.body.lastName,
        email: request.body.email,
        password: request.body.password
    });

    response.status(201).send({user: {firstName: user.first_name, lastName: user.last_name, email: user.email}});
});

router.post("/login", async function(request, response) {
    if (!request.body.email)
    {
        return response.status(400).send("Email is required.");
    }

    if (!request.body.password)
    {
        return response.status(400).send("Password is required.");
    }

    var user = await models.User.findOne({
        where: {
            email: request.body.email,
            password: request.body.password
        }
    });

    if (!user)
    {
        return response.status(401).send("Unauthorized user.");
    }

    var payload = {
        email: user.email,
        password: user.password
    };

    var token = jwt.sign(payload, process.env.AUTH_SECRET, { expiresIn: 180 });

    response.send({token: token, message: `Logged in as ${user.email}`});
});

module.exports = router;
