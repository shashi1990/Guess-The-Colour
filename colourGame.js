var count=6;
var colour=randomColour(count);
var squares= document.querySelectorAll(".square");

var pickedColour=selectRandom();
var span=document.getElementById("displayColour");
span.textContent=pickedColour;
var displayText = document.getElementById("displayText");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var easy=document.getElementById("easy");
var hard=document.getElementById("hard");

easy.addEventListener("click",function(){
	this.classList.add("selected");
	hard.classList.remove("selected");
	count=3;
	colour=randomColour(count);
	pickedColour=selectRandom();
	span.textContent=pickedColour;
	displayText.textContent="";
	h1.style.background="#00E5EE";
	for(var i=0;i<count;i++){
		squares[i].style.background=colour[i];
	}
	for(var i=count;i<squares.length;i++){
		squares[i].style.display ="none";
	}

});
hard.addEventListener("click",function(){
	this.classList.add("selected");
	easy.classList.remove("selected");
	count=6;
	colour=randomColour(count);
	pickedColour=selectRandom();
	span.textContent=pickedColour;
	displayText.textContent="";
	h1.style.background="#00E5EE";
	for(var i=0;i<squares.length;i++){
		squares[i].style.display ="block";
		squares[i].style.background=colour[i];
	}
});
reset.addEventListener("click",function(){
	colour=randomColour(count);
	pickedColour=selectRandom();
	span.textContent=pickedColour;
	displayText.textContent="";
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colour[i];
	}
	this.textContent="New colours";
	h1.style.background="#00E5EE";


});
for(var i=0;i<squares.length;i++){

	squares[i].style.background=colour[i];
	squares[i].addEventListener("click",function(){
		if(this.style.background===pickedColour){
			displayText.textContent="Correct!!!!";
			makesame(pickedColour);
			h1.style.background=pickedColour;
			reset.textContent="Play again";

		}else{
			displayText.textContent="Incorrect!!!!";
			this.style.background="#232323";
		}
	});
}

function randomColour(num){
	var arr=[];
	for (var i = 0; i < num; i++) {
		arr[i]=randomSingleColour();
	}
	
	return arr;

}
function randomSingleColour(){

	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}
function makesame( pickedColour){
	for(var i=0;i<count;i++){
		squares[i].style.background=pickedColour;
	}
}

function selectRandom(){

	var index= Math.floor(Math.random()*colour.length);
	return colour[index];
}