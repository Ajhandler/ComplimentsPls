$(document).ready(function(){

// An array of all the very nice compliments
	var compliments = new Array;
	compliments[0] = "You're just swell";
	compliments[1] = "You are the nicest person i've ever met";
	compliments[2] = "One day I hope to be just like you";
	compliments[3] = "here is another compliment";
	compliments[4] = "You have very smooth hair.";
	compliments[5] = "You deserve a promotion";
	compliments[6] = "You are like a spring flower; beautiful and vivacious";
	compliments[7]  = "I like your Facebook status";
	compliments[8]  = "I like your shoes more than mine";
	compliments[9]  = "Nice motor control!";
	compliments[10]  = "That was a killer tweet you made that one time.";
	compliments[11]  = "You have perfect bone structure";
	compliments[12]  = "I disagree with anyone who disagrees with you";
	compliments[13]  = "You have a good web-surfing stance.";
	compliments[14]  = "You should be a poster child for poster children.";
	compliments[15]  = "I enjoy spending time with you.";
	compliments[16]  = " I'm jealous of the other websites you visit, because I enjoy seeing you so much!";
	compliments[17]  = " I would enjoy a roadtrip with you.";
	compliments[18]  = "Your voice is more soothing than Morgan Freeman's.";
	compliments[19]  = " I wish I could move your furniture.";
	compliments[20]  = "You're nicer than a day on the beach.";
	compliments[21]  = "I find you very relevant.";
	compliments[22]  = "I would do your taxes any day.";
	compliments[23]  = "My mom always asks me why I can't be more like you.";
	compliments[24]  = "I wish I could choose your handwriting as a font.";
	compliments[25]  = "Your name is fun to say.";
	compliments[26]  = "Don't worry. You'll do great.";
	compliments[27]  = "I would volunteer to take your place in the Hunger Games.";
	compliments[28]  = "You have very nice teeth.";
	compliments[29]  = "I bet you could take a punch from Mike Tyson.";
	compliments[30]  = " You're cooler than ice on the rocks.";
	compliments[31]  = "If you really wanted to, you could probably get a bird to land on your shoulder and hang out with you.";

	$("#submit").click(function() {
		// take the users name and add it to page with "hi --username"
		var $name = $("#name").val();
		$("#hi h1").replaceWith("<h1>Hi "  + $name  )
		//pull from random list of compliments, add compliment after user name
		var myRandom = Math.floor(Math.random()*compliments.length);
		$("#compliment h2").replaceWith("<h2>" + compliments[myRandom]);
		console.log(compliments[myRandom]);

	});



});