var fs = require('fs');
var meals = JSON.parse(fs.readFileSync('./data/meals.json',
'utf8'));

/*GET travel view */
const meal = (req, res) => {
    res.render('meal', {title: 'Travlr Getaways', meals})
};

module.exports = {
    meal
};