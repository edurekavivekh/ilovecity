exports.home=function(req, res) {
  res.render('home', { title: 'iLoveMyCity', headline: 'Incredible India' });
};


exports.city=function(req,res){
var cityName=req.params.city;
	var title,heading;
	var imageCount=4;

	if(cityName === 'mumbai') {
		title="Mumbai";
		heading="More dreams are realised and extinguished in Mumbai than any other place in India.";
	}
	else if(cityName === 'kolkatta'){
		title='Kolkatta';
		heading='Mysterious, respectful, enterprising, enthusiastic, and amazing food. These are some of the words which are seldom linked to Kolkata.';
	}
	else if(cityName === 'chennai'){
		title='Chennai';
		heading='Chennai is such a beautiful place to perform in. The city is lovely, and the people, even more so';
	}
	else if(cityName === 'delhi'){
		title='Delhi';
		heading='I asked my soul: What is Delhi? she replied: The worlk is the body and delhi its life.';
	}
res.render('city', { title: title, headline: heading, city: cityName, numberOfImages: imageCount});
};