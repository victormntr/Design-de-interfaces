<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false"%>

<%@ taglib prefix="mt" tagdir="/WEB-INF/tags"%>

<script src="${pageContext.request.contextPath}/assets/admin/js/newUsuario.js"></script>

<mt:admin_tamplate title="Projeto" breadcrumb="Cadastrar Usuario">

	<jsp:attribute name="content">
	
	<section class="content">
			
		  <section class="content-header">
			<form class="text-center border border-light p-5" action="#!">
			
			    <p class="h4 mb-4">Novo Usuario</p>
				
				<div class="form-group">
				    <!-- Nome -->
				    <input name="nome" type="text" id="nome" class="form-control mb-4" placeholder="Nome" required autofocus="autofocus">
			    </div>
			
				<div class="form-group">
				    <!-- Telefone -->
				    <input name="email" type="number" id="telefone" class="form-control mb-4" placeholder="Telefone" required>
			    </div>
			    
			    <div class="form-group">
				     <!-- Email -->
				    <input name="email" type="email" id="email" class="form-control mb-4" placeholder="Email" required>
			    </div>
				
				<div class="form-group">
				     <!-- CPF -->
				    <input name="cpf" type="cpf" id="cpf" class="form-control mb-4" placeholder="CPF" required>
			    </div>
			
			    <!-- Enviar -->
			    <button id="btnsalvar" class="btn btn-info btn-sm" type="submit">Salvar</button>
			    <!-- Listar -->
			    <button id="btnlistar" class="btn btn-info btn-sm" type="button">Usuarios</button>
			
			</form>
	     </section>
     
     </section>

</jsp:attribute>

</mt:admin_tamplate>