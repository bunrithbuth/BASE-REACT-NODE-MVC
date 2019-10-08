
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./routes")
const Sequelize = require('sequelize');

app.use(routes)

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
