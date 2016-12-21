var somstring = "";
var getalstring = "";
var somarrayteller = 0;
var somarray = [];

document.getElementById("een").setAttribute("onClick", "javascript:getal('1');");
document.getElementById("twee").setAttribute("onClick", "javascript:getal('2');");
document.getElementById("drie").setAttribute("onClick", "javascript:getal('3');");
document.getElementById("vier").setAttribute("onClick", "javascript:getal('4');");
document.getElementById("vijf").setAttribute("onClick", "javascript:getal('5');");
document.getElementById("zes").setAttribute("onClick", "javascript:getal('6');");
document.getElementById("zeven").setAttribute("onClick", "javascript:getal('7');");
document.getElementById("acht").setAttribute("onClick", "javascript:getal('8');");
document.getElementById("negen").setAttribute("onClick", "javascript:getal('9');");
document.getElementById("nul").setAttribute("onClick", "javascript:getal('0');");
document.getElementById("punt").setAttribute("onClick", "javascript:getal('.');");
document.getElementById("is").setAttribute("onClick", "javascript:resultaat('=');");
document.getElementById("keer").setAttribute("onClick", "javascript:bewerking('x');");
document.getElementById("plus").setAttribute("onClick", "javascript:bewerking('+');");
document.getElementById("min").setAttribute("onClick", "javascript:bewerking('-');");
document.getElementById("gedeeld").setAttribute("onClick", "javascript:bewerking('/');");
document.getElementById("c").setAttribute("onClick", "javascript:reset();");

function getal(cijfer){
	getalstring = getalstring+cijfer;
	somstring = somstring+cijfer;
	document.getElementById("som").setAttribute("value", somstring);
}
function bewerking(teken){
	somstring = somstring+teken;
	somarray[somarrayteller]= getalstring;
	somarrayteller +=1;
	somarray[somarrayteller]=teken;
	somarrayteller +=1;
	getalstring = "";
	document.getElementById("som").setAttribute("value", somstring);
}
function reset(){
	somstring = "";
	getalstring= "";
	somarray= [];
	somarrayteller = 0;
	document.getElementById("som").setAttribute("value", somstring);
	document.getElementById("resultaat").setAttribute("value", somstring);
}
function resultaat(){
	bewerking('');
	for (somarrayteller =  0; somarrayteller <somarray.length; somarrayteller++ ) {
		alert(somarray[somarrayteller])
	}
}
