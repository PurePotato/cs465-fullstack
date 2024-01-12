var fs = require("fs");
var mealsD = JSON.parse(fs.readFileSync("./data/meals.json", "utf8"));

/*GET travel view */
const meals = (req, res) => {
  res.render("meals", { title: "Travlr Getaways", mealsD });
};

module.exports = {
  meals,
};
