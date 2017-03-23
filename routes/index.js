var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'iLoveMyCity', headline: 'Incredible Indian Cities' });
});




router.get('/:city', function(req,res, next){
	var cityName=req.params.city;
	var title,heading;
	var imageCount=4;

	if(cityName === 'mumbai') {
		title="Mumbai";
		heading="I love my Mumbai";
	}
	else if(cityName === 'kolkatta'){
		title='Kolkatta';
		heading='The great hawra bridge';
	}
	else if(cityName === 'chennai'){
		title='Chennai';
		heading='Chennai';
	}
	else if(cityName === 'delhi'){
		title='Delhi';
		heading='Delhi';
	}
res.render('city', { title: title, headline: heading, city: cityName, numberOfImages: imageCount});
});

module.exports = router;
