function pegar_banco(){
	
	for(var i = 0; i < localStorage.length;i++){
		
		var usuario = JSON.parse(localStorage.getItem(i));
		if(usuario != null){
		
			criar_Linha_Tabela(usuario,i);		

		}
	}
}

function criar_Linha_Tabela(usuario,id){

	//Criar elementos
	var linha = document.createElement("tr");
	var campo_Id = document.createElement("td");
	var campo_Nome = document.createElement("td");
	var campo_Telefone = document.createElement("td");
	var campo_Email = document.createElement("td");
	var campo_CPF = document.createElement("td");
	var campo_Editar = document.createElement("button");
	var campo_Remover = document.createElement("button");
	
	//Aplicar estilo
	
	campo_Editar.setAttribute("id",id);
	campo_Editar.setAttribute("value",id);
	campo_Editar.setAttribute('onClick',"editar_Banco(value);");
	campo_Editar.setAttribute("class", "btn btn-primary");
	campo_Remover.setAttribute("id", "0"+id);
	campo_Remover.setAttribute("value",id);
	campo_Remover.setAttribute('onClick',"excluir_Banco(value);");
	campo_Remover.setAttribute("class", "btn btn-primary");
	campo_Id.setAttribute("class", "bold");
	
	//Criar nós
	
	var texto_Id = document.createTextNode(id);
	var texto_Nome = document.createTextNode(usuario.nome);
	var texto_Telefone = document.createTextNode(usuario.telefone);
	var texto_Email = document.createTextNode(usuario.email);
	var texto_CPF = document.createTextNode(usuario.cpf);
	var texto_Editar = document.createTextNode("Editar");
	var texto_Remover = document.createTextNode("Remover");
	
	//Vincular os nós aos elementos
	campo_Id.appendChild(texto_Id);
	campo_Nome.appendChild(texto_Nome);
	campo_Telefone.appendChild(texto_Telefone);
	campo_Email.appendChild(texto_Email);
	campo_CPF.appendChild(texto_CPF);
	campo_Editar.appendChild(texto_Editar);
	campo_Remover.appendChild(texto_Remover);
	
	linha.appendChild(campo_Id);
	linha.appendChild(campo_Nome);
	linha.appendChild(campo_Telefone);
	linha.appendChild(campo_Email);
	linha.appendChild(campo_CPF);
	linha.appendChild(campo_Editar);
	linha.appendChild(campo_Remover);
	
	//Vincular os elementos ao documento
	
	tabelaUsuario.appendChild(linha);
	
	
}