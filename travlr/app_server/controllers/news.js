var fs = require('fs');
var newsData = JSON.parse(fs.readFileSync('./data/news.json',
'utf8'));
//var latestNewsTitle = newsData.latestNews.title;
//var vacationTipsTitle = newsData.vacationTips.title;

/*GET travel view */
const news = (req, res) => {
    res.render('news', {title: 'Travlr Getaways', newsData})
};

module.exports = {
    news
};