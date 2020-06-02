"use strict";
function rule1(){
	document.getElementById("rules9").style.display = "none";
	document.getElementById("rules8").style.display = "none";
	document.getElementById("rules7").style.display = "none";
	document.getElementById("rules6").style.display = "none";
	document.getElementById("rules5").style.display = "none";
	document.getElementById("rules4").style.display = "none";
	document.getElementById("rules1").style.display = "block";
	document.getElementById("rules2").style.display = "none";
	document.getElementById("rules3").style.display = "none";
}
function rule2(){
	document.getElementById("rules9").style.display = "none";
	document.getElementById("rules8").style.display = "none";
	document.getElementById("rules7").style.display = "none";
	document.getElementById("rules6").style.display = "none";
	document.getElementById("rules5").style.display = "none";
	document.getElementById("rules4").style.display = "none";
	document.getElementById("rules2").style.display = "block";
	document.getElementById("rules1").style.display = "none";
	document.getElementById("rules3").style.display = "none";
}
function rule3(){
	document.getElementById("rules9").style.display = "none";
	document.getElementById("rules8").style.display = "none";
	document.getElementById("rules7").style.display = "none";
	document.getElementById("rules6").style.display = "none";
	document.getElementById("rules5").style.display = "none";
	document.getElementById("rules4").style.display = "none";
	document.getElementById("rules3").style.display = "block";
	document.getElementById("rules2").style.display = "none";
	document.getElementById("rules1").style.display = "none";
}
function rule4(){
	document.getElementById("rules9").style.display = "none";
	document.getElementById("rules8").style.display = "none";
	document.getElementById("rules7").style.display = "none";
	document.getElementById("rules6").style.display = "none";
	document.getElementById("rules5").style.display = "none";
	document.getElementById("rules4").style.display = "block";
	document.getElementById("rules3").style.display = "none";
	document.getElementById("rules2").style.display = "none";
	document.getElementById("rules1").style.display = "none";
}
function rule5(){
	document.getElementById("rules9").style.display = "none";
	document.getElementById("rules8").style.display = "none";
	document.getElementById("rules7").style.display = "none";
	document.getElementById("rules6").style.display = "none";
	document.getElementById("rules5").style.display = "block";
	document.getElementById("rules4").style.display = "none";
	document.getElementById("rules3").style.display = "none";
	document.getElementById("rules2").style.display = "none";
	document.getElementById("rules1").style.display = "none";
}
function rule6(){
	document.getElementById("rules9").style.display = "none";
	document.getElementById("rules8").style.display = "none";
	document.getElementById("rules7").style.display = "none";
	document.getElementById("rules6").style.display = "block";
	document.getElementById("rules5").style.display = "none";
	document.getElementById("rules4").style.display = "none";
	document.getElementById("rules3").style.display = "none";
	document.getElementById("rules2").style.display = "none";
	document.getElementById("rules1").style.display = "none";
}
function rule7(){
	document.getElementById("rules9").style.display = "none";
	document.getElementById("rules8").style.display = "none";
	document.getElementById("rules7").style.display = "block";
	document.getElementById("rules6").style.display = "none";
	document.getElementById("rules5").style.display = "none";
	document.getElementById("rules4").style.display = "none";
	document.getElementById("rules3").style.display = "none";
	document.getElementById("rules2").style.display = "none";
	document.getElementById("rules1").style.display = "none";
}
function rule8(){
	document.getElementById("rules9").style.display = "none";
	document.getElementById("rules8").style.display = "block";
	document.getElementById("rules7").style.display = "none";
	document.getElementById("rules6").style.display = "none";
	document.getElementById("rules5").style.display = "none";
	document.getElementById("rules4").style.display = "none";
	document.getElementById("rules3").style.display = "none";
	document.getElementById("rules2").style.display = "none";
	document.getElementById("rules1").style.display = "none";
}
function rule9(){
	document.getElementById("rules9").style.display = "block";
	document.getElementById("rules8").style.display = "none";
	document.getElementById("rules7").style.display = "none";
	document.getElementById("rules6").style.display = "none";
	document.getElementById("rules5").style.display = "none";
	document.getElementById("rules4").style.display = "none";
	document.getElementById("rules3").style.display = "none";
	document.getElementById("rules2").style.display = "none";
	document.getElementById("rules1").style.display = "none";
}
function calc(){
	let weight, height, age, result;
	weight = document.getElementById('woomanWeight').value;
	height = document.getElementById('woomanHeight').value;
	age = document.getElementById('woomanAge').value;
	result = (10*weight)+(6.25*height)-(5*age)-161;
	document.getElementById('res').value=result;                                
}
function mCalc(){
	let weight, height, age, result;
	weight = document.getElementById('manWeight').value;
	height = document.getElementById('manHeight').value;
	age = document.getElementById('manAge').value;
	result = (10*weight)+(6.25*height)-(5*age)+5;
	document.getElementById('resul').value=result;                                
}
