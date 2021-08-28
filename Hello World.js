var x = 0

function changeColor(){
	if (x==0) {
		document.getElementById("main").style.color = "blue"
		x = 1
	}
	else {
		document.getElementById("main").style.color = "red"
		x = 0
	}
}

function findColor(colorAbrv) {
	if (colorAbrv.toLowerCase() == 'b') {
		return 'blue'
	}
	else if (colorAbrv.toLowerCase() == 'y') {
		return 'yellow'
	}
	else if (colorAbrv.toLowerCase() == 'g') {
		return 'green'
	}
	else if (colorAbrv.toLowerCase() == 'r') {
		return 'red'
	}
	else if (colorAbrv.toLowerCase() == 'p') {
		return 'purple'
	}
	else if (colorAbrv.toLowerCase() == 'o') {
		return 'orange'
	}


}

function changeTextColor(obj){
	var textEntry = document.getElementById(obj).value
	var lastChar = textEntry.slice(-1);

	document.getElementById(obj).style.color = findColor(lastChar)
}

function submit(){
	console.log("Sumitted")
}

function populatePantryList(){
	console.log("Populated")
}

















