//pseudo code
//player should guess a number
//there will be four crystals displayed on the page. that will generat a  random number 1-12
//when crystals clicked they will add a specific amount of points
//player when total score == randomnumber 
var wins = 0;//number of wins
var losses = 0;//number of loses
var addNumber = 0;// this will be the number created by all the crystals added to gether.
// lets create a random number that will generate betwen 19 & 120. this will be guessed by the player.
var random = Math.floor((Math.random()* 100) + 19);
$("#random").html(random);// this pushs our random number to our html
// console.log(randomNumber);

//lets create a random number that will be generated by the crystals
var blue = Math.floor((Math.random()* 12) + 1);// create a random number for blue crystal
// console.log(blue);
var green = Math.floor((Math.random()* 12) + 1);// create a random number for green  crystal
// console.log(green);
var red = Math.floor((Math.random()* 12) + 1);// create a random number for red  crystal
// console.log(blue);
var yellow = Math.floor((Math.random()* 12) + 1);// create a random number for yellow crystal

function initalizeGame (){
	random = Math.floor((Math.random()* 100) + 19);
	$("#random").html(random);
	blue = Math.floor(Math.random()*12+1);
	green = Math.floor(Math.random()*12+1);
	red= Math.floor(Math.random()*12+1);
	yellow= Math.floor(Math.random()*12+1);
	addNumber = 0;

	}// ends the initalize game function 

	// lets create a function that will update the wins and losses
	function result(){
		if (addNumber == random){
			wins++;
			$("#won").html(wins);
			initalizeGame();    
		} else if (addNumber > random){
			losses++;
			$("#los").html(losses);
			console.log(losses)
			initalizeGame();
		 } 
	}

	$(document).ready(function(){
		$("#blue").on("click", function(){
			addNumber = addNumber + blue;//this adds the number creared with the value genreated by blue
			$("#addNumber").html(addNumber);
			result();
			
	})

		$("#red").on("click", function(){
			addNumber = addNumber + red;
			$("#addNumber").html(addNumber);
			result();

	})

		$("#yellow").on("click", function(){
			addNumber = addNumber + yellow;	
			$("#addNumber").html(addNumber);
			result();
			

	})

		$("#green").on("click", function(){
			addNumber = addNumber + yellow;	
			$("#addNumber").html(addNumber);
			result();



		})


	});








