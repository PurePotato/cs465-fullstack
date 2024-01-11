var fs = require("fs");
var roomsD = JSON.parse(fs.readFileSync("./data/rooms.json", "utf8"));

/*GET travel view */
const rooms = (req, res) => {
  res.render("rooms", { title: "Travlr Getaways", roomsD });
};

module.exports = {
  rooms,
};
