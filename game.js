var numSquares = 6;
var colors = generateColors(numSquares);

var squares = document.querySelectorAll(".square");
var chosenColor = randColor();
var display = document.getElementById("display");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	colors = generateColors(numSquares);
	chosenColor = randColor();
	display.textContent = chosenColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.background = "none";
		}
	}
	message.textContent = "";
})

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares = 6;
	colors = generateColors(numSquares);
	chosenColor = randColor();
	display.textContent = chosenColor;
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].style.background = "block";
	message.textContent = "";
}
})

resetButton.addEventListener("click", function(){
	colors = generateColors(numSquares);
	chosenColor = randColor();
	display.textContent = chosenColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		}
	h1.style.background = "#6EA4BF";
	message.textContent = "";
})

display.textContent = chosenColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor === chosenColor) {
			message.textContent = "Correct"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background= "#331E36";
			message.textContent = "Keep trying";
		}
	});
}

function changeColors(color){
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = color;
	}
}


function randColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateColors(num){
	var array = []
	for (var i = 0; i < num; i++) {
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256); 
		var rand = "rgb(" + r + ", " + g + ", " + b +")";
		array.push(rand);
	}
	return array
}

