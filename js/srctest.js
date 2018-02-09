var count=0;
function myfunction() {
	console.log(count++);
	var txt;
	var person = prompt("Please Enter your name :", "Harry Potter");
	if (person == null || person == "") {
			txt = "User cancelled the prompt.";
			}
	else {
			txt = "Hello "+ person +"! How are you today?";
	}
	document.getElementById("demo").innerHTML = txt;
}
