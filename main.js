require("dotenv").config();

const app = require("./app");

app.listen(3000, function() {
    console.log("Application running.");
});
