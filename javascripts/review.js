let howmanyBeans = 6;
let howmanyCows = 2;

$("#resultBtn").click( () => {
	resultFunction(howmanyBeans, howmanyCows);
});

function resultFunction(a, b){
	let result = a * b;
	$("#result-1").html(result);
}

// $("#scaryBtn").click( () => {
// 	$("dd").hide();
// });

// $("#scaryBtn").click( () => {
// 	$("dd").toggle();
// });

// $("#scaryBtn").click( () => {
// 	$("dd").toggle();
// 	console.log("ishidden", $("dd").is(":hidden"));
// });

// conditional ternary operator = 3 part conditional:
$("#scaryBtn").click( () => {
	$("dd").toggle();
	console.log("ishidden", $("dd").is(":hidden"));
	$("dd").is(":hidden") ? $("#scaryBtn").html("Show") : $("#scaryBtn").html("Too Scary");
});
// 1. before ? = conditional to check for boolean true or false
// 2. if it's true, button should say "Show"
// 3. if it's false, button should say "Too Scary"

let storyItems = $(".story");
// this targets the paragraphs with the "story" class
// this gives you an array b/c that's what jquery does

for (let i = 0; i < storyItems.length; i++) {
	storyItems[i].onmouseover = over;
	storyItems[i].onmouseout = out;
}

// gave each paragraph their own ID so she could come back & target with THIS
// actually you DON'T need to add an ID in order to use THIS
// but the console.log this.id shows you can show the ID, too
function over() {
	console.log("over", this.id);
	this.style.backgroundColor = "#cc0000";
}

function out() {
	console.log("out", this.id);
	this.style.backgroundColor = "#fff";
}
// individual paragraph is the this 

// HOW TO APPEND in your HTML:
$(".inner").append(`, <strong>Chief</strong>`);

$("#holiday").click( () => {
	doSomething($("#holiday"));
});

// function doSomething(obj){
// 	console.log("this obj", obj, obj[0], event);
// }

// EVERY EVENT has this object built into it

function doSomething(obj){
	console.log("this obj", obj, obj[0], event);
	// obj[0].style.backgroundColor = "orange";
	// THESE TWO LINES DO THE SAME THING
	event.target.style.backgroundColor = "orange";
}