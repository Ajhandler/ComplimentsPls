$(document).ready(function(){
// Blink Blink
$("input:text:visible:first").focus();
// Handles intro box animations on pageload
$(".instructions").delay(2000).animate({"top": "-1000px" },function(){
	$(this).remove();
})
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
	compliments[32]    = "Your skin is nice."
	compliments[33]    = "Say, aren't you that famous model from TV?"
	compliments[34]    = "I would love to visit you, but I live on the Internet."
	compliments[35]    = "I love the way you click."
	compliments[36]    = "If I freeze, it's not a computer virus.  I was just stunned by your beauty."
	compliments[37]    = "You could go longer without a shower than most people."
	compliments[38]    = "I heard you make really good French Toast."
	compliments[39]    = "Well played."
	compliments[40]    = "You could totally get away with a fedora."
	compliments[41]    = " I think about you while I'm on the toilet."
	compliments[42]    = "Your body fat percentage is perfectly suited for your height."
	compliments[43]    = "If you broke your arm, I would carry your books for you."
	compliments[44]    = "I could hangout with you for a few hours and not be annoyed!"
	compliments[45]    = "I would trust my children with you."
	compliments[46]    = "You have a perfectly symmetrical face."
	compliments[47]    = "The Force is strong with you."
	compliments[48]    = "My camera isn't worthy to take your picture."
	compliments[49]    = "I'd like to kiss you. Often."
	compliments[50]    = "You are more fun than a Japanese steakhouse."
	// Binds enter to submit button. Prevents form submission.
	$(document).keypress(function(event) {
        if (event.keyCode == 13) {  
           complimentPls();
           return false;
        }
    });

	$("#submit").click(function() {
		complimentPls();
	});

	// Bread and butter
	function complimentPls(){
		// find what char code user value is.
		var $charname = $("#name").val().charCodeAt();
		//get value of user input
		var $name = $("#name").val();
		// if the user enters nothing, or a number .Noname is showed and run
		if ($name == "" || $charname >= 47 && $charname <= 57) {
			// deals with animation of .Noname
			$(".Noname").show().animate({"top": "190px"},function(){
				$(this).delay(1000).animate({"top": "-2000px"},function(){
				});
			});
					}else{
			// if user input is good write the greeting + name
			$("#hi h1").replaceWith("<h1>Hi, "  + $name  )
			// animates the greeting + name
			$("#hi h1").animate({'left':'0px'},function(){
				/// animates the compliment
				$("#compliment h2").animate({'bottom': '0px'})
			})
			//takes the length of compliments array calls a random index and rounds down.
			var myRandom = Math.floor(Math.random()*compliments.length);
			//pull from random list of compliments, add compliment after user name
			$("#compliment h2").replaceWith("<h2>" + compliments[myRandom]);
		};
	}





});