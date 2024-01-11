var fs = require("fs");
var aboutD = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

/*GET travel view */
const about = (req, res) => {
  res.render("about", { title: "Travlr Getaways", aboutD });
};

module.exports = {
  about,
};
