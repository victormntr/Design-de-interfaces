//Classe criada para adicionar usuário na tabela

window.addEventListener("load", function () {

	
var nome = document.getElementById("nome");
var telefone = document.getElementById("telefone");
var email = document.getElementById("email");
var cpf = document.getElementById("cpf");
passar_p_Banco();


document.getElementById("btnsalvar").addEventListener("click",function(){
	
	event.preventDefault(stop);
	
    var usuario = {
      nome		:nome.value,
      email		:email.value,
      telefone	:telefone.value,
      cpf		:cpf.value,
      modificado:false
  }
  GuardarDados(usuario);
    
});


document.getElementById("btnlistar").addEventListener("click",function(){
	
	for(var i = 0; i < localStorage.length;i++){
		
		var usuario = JSON.parse(localStorage.getItem(i));
		if(usuario != null && usuario.modificado === true){
			alert(usuario.modificado);
		
		 usuario.modificado = false;
		 localStorage.setItem(i,JSON.stringify(usuario));

		}
	}location.href= "usuarios.jsp";
	
});

});

function passar_p_Banco(){
	

	for(var i = 0; i < localStorage.length;i++){
		
		var usuario = JSON.parse(localStorage.getItem(i));
		
		if(usuario != null && usuario.modificado === true){
			
			nome.value = usuario.nome;
			telefone.value = usuario.telefone;
			email.value = usuario.email;
			cpf.value = usuario.cpf

		}
	}
}

function GuardarDados(usuario){
	var validarEmail = true;
	var Modificar = true;	
	for(var i = 0; i < localStorage.length;i++){
		
		var comparar = JSON.parse(localStorage.getItem(i));
		
		if(comparar != null){
		
			if(comparar.modificado != true){
			
				if(comparar.email == usuario.email){
				
					validarEmail = false;
					Modificar = false;
			}
		  }else{
					localStorage.setItem(i,JSON.stringify(usuario));
					Modificar = true;
					validarEmail = false;
				}
		}
	}

	if(validarEmail){
		
		localStorage.setItem(localStorage.length,JSON.stringify(usuario));
		
		alert("Usuario cadastrado com sucesso!");
        
		location.href= "usuarios.jsp";
    
	}else if(Modificar){
		
		alert("Alterações feita com êxito!");
		
		location.href= "usuarios.jsp";
		
	}else{
		
		alert("EMAIL JÁ CADASTRADO, TENTE NOVAMENTE!");
	}
}