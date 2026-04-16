let express = require("express");
let app = new express();

app.set("view engine", "ejs");

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "YOUR-CURRENT-RDS-ENDPOINT",
    user: "admin",
    password: "YOUR-CURRENT-PASSWORD",
    database: "paradise-concerts",
    port: 3306,
  },
});

app.get("/", (req, res) => {
  knex.select().from("venues").then((result) => {
    res.render("index", { aConcerts: result });
  });
});

app.listen(3000);
