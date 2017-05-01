var colors = [
"rgb(255, 0, 0)",
"rgb(0, 255, 0)",
"rgb(0, 0, 255)",
"rgb(255, 255, 0)",
"rgb(0, 255, 255)",
"rgb(255, 0, 255)",]

var squares = document.querySelectorAll(".square");
var chosenColor = colors[1];
var display = document.getElementById("display");
display.textContent = chosenColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor === chosenColor) {
			alert("Correct");
		} else {
			this.style.background= "#331E36";
		}
	});
}

