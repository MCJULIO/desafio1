/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

/* Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"*/

function encriptar(){
	var texto = document.getElementById("inputTexto").value.toLowerCase();

	var textoCifrado = texto.replace(/e/igm, "enter");
	var textoCifrado = textoCifrado.replace(/i/igm, "imes");
	var textoCifrado = textoCifrado.replace(/a/igm, "ai");
	var textoCifrado = textoCifrado.replace(/o/igm, "ober");
	var textoCifrado = textoCifrado.replace(/u/igm, "ufat");

	document.getElementById("imagen").style.display = "none";
	document.getElementById("h2msg").style.display = "none";
	document.getElementById("txt").innerHTML = textoCifrado
	document.getElementById("buttonCopiar").style.display = "show";
	document.getElementById("buttonCopiar").style.display = "inherit";
}

function desencriptar(){
	var texto = document.getElementById("inputTexto").value.toLowerCase();

	var textoCifrado = texto.replace(/enter/igm, "e");
	var textoCifrado = textoCifrado.replace(/imes/igm, "i");
	var textoCifrado = textoCifrado.replace(/ai/igm, "a");
	var textoCifrado = textoCifrado.replace(/ober/igm, "o");
	var textoCifrado = textoCifrado.replace(/ufat/igm, "u");

	document.getElementById("imagen").style.display = "none";
	document.getElementById("h2msg").style.display = "none";
	document.getElementById("txt").innerHTML = textoCifrado
	document.getElementById("buttonCopiar").style.display = "show";
	document.getElementById("buttonCopiar").style.display = "inherit";
}

function copiar(){
	var contenido = document.querySelector("#txt");
	contenido.select();
	document.execCommand("copy")
	alert("Su mensaje fue copiado")
}


