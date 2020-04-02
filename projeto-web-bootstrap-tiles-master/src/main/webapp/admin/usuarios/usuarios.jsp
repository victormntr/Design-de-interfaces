<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" isELIgnored="false"%>

<%@ taglib prefix="mt" tagdir="/WEB-INF/tags"%>

<script src="${pageContext.request.contextPath}/assets/admin/js/Criador_tabela.js"></script>

<mt:admin_tamplate title="Projeto" breadcrumb="Usuários">

	<jsp:attribute name="content">
	
	<section class="content">
			
		  <section class="content-header">
		  <p class="h4 mb-4 text-center border border-light p-5">Listagem de Usuários</p>
	     </section>
     	
     	<table id="tblUsuario" class="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nome</th>
      <th scope="col">Telefone</th>
      <th scope="col">Email</th>
      <th scope="col">CPF</th>
      <th scope="col">Remover / Editar</th>
    </tr>
  </thead>
  <tbody id="tblUsuario">
    
  </tbody>
  
</table>
     	
   	 <section>
     	 <br />
	      <div align="center">
	      <a href="${pageContext.request.contextPath}/admin/usuarios/add_usuario.jsp"  class="btn btn-primary" type="submit">Cadastrar Usuário</a>
	      </div>
	     </section>
     	
     </section>



<style>
	.bold{font-weight: bold; }
</style>
<script type="text/javascript" defer>
var tabelaUsuario = document.querySelector("tbody");

pegar_banco();

function excluir_Banco(value){
	var id = document.getElementById(value).value;
	for(var i = 0; i < localStorage.length;i++){
		var usuario = JSON.parse(localStorage.getItem(i));
		if(id != null && id == i){
			alert("Deseja realmente excluir o usuário?");
			localStorage.removeItem(i);
		}
	}
	window.location.reload()	
}
function editar_Banco(value){
	var id = document.getElementById(value).value;
	for(var i = 0; i < localStorage.length;i++){
		var usuario = JSON.parse(localStorage.getItem(i));
		if(id != null && id == i){
			var usuario = JSON.parse(localStorage.getItem(i));
			usuario.modificado = true;
			localStorage.setItem(i,JSON.stringify(usuario));
			window.location.assign("add_usuario.jsp");
		}
	}
}
</script>
</jsp:attribute>

</mt:admin_tamplate>