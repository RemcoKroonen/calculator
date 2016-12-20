document.getElementById("een").setAttribute("onClick", "javascript:getal(1);");
document.getElementById("twee").setAttribute("onClick", "javascript:getal(2);");
document.getElementById("drie").setAttribute("onClick", "javascript:getal(3);");
document.getElementById("vier").setAttribute("onClick", "javascript:getal(4);");
document.getElementById("vijf").setAttribute("onClick", "javascript:getal(5);");
document.getElementById("zes").setAttribute("onClick", "javascript:getal(6);");
document.getElementById("zeven").setAttribute("onClick", "javascript:getal(7);");
document.getElementById("acht").setAttribute("onClick", "javascript:getal(8);");
document.getElementById("negen").setAttribute("onClick", "javascript:getal(9);");
document.getElementById("nul").setAttribute("onClick", "javascript:getal(0);");
document.getElementById("punt").setAttribute("onClick", "javascript:('.');");
document.getElementById("is").setAttribute("onClick", "javascript:('=');");
document.getElementById("keer").setAttribute("onClick", "javascript:('x');");
document.getElementById("plus").setAttribute("onClick", "javascript:('+');");
document.getElementById("min").setAttribute("onClick", "javascript:('-');");
document.getElementById("gedeeld").setAttribute("onClick", "javascript:('/');");
document.getElementById("c").setAttribute("onClick", "javascript:('c');");

function getal(cijfer){
document.getElementById("som").setAttribute("value", cijfer);
}