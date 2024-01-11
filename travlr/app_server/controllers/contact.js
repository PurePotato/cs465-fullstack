var fs = require("fs");
var contactsD = JSON.parse(fs.readFileSync("./data/contact.json", "utf8"));

/*GET travel view */
const contact = (req, res) => {
  res.render("contact", { title: "Travlr Getaways", contactsD });
};

module.exports = {
  contact,
};
