function percurarGithub(usuariou) { // referenciada no onclick do nome do arquivo do usuário
	var ajax = new XMLHttpRequest();
	ajax.open("POST", "./pesquisa.php", true);// Seta tipo de requisição: Post e a URL da API
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// Seta paramêtros da requisição e envia a requisição
	ajax.send(`usuariou=${usuariou}`);
	// Cria um evento para receber o retorno.
	ajax.onreadystatechange = function() {
	  // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
		if (ajax.readyState == 4 && ajax.status == 200) {
			var data = ajax.responseText;
			document.getElementById("resultado").innerHTML = data;
		}
	}
}
document.getElementById("pesquisa").addEventListener("keyup", ()=>{
    percurarGithub(document.getElementById("pesquisa").value);
    console.log(document.getElementById("pesquisa").value)
});