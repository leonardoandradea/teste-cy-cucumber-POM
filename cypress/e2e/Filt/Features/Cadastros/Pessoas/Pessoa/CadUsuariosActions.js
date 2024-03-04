
class CadUsuario {
  Login(){
    cy.Login();
  }
  
  MostrarMenus() {
    cy.get('.toolbar-menu')
    .click()
  }

  clicarSubmenuCadastros() {
      // Adicione aqui a lógica para clicar no sub-menu 'Cadastros'
  }

  clicarSubmenuUsuarios() {
      // Adicione aqui a lógica para clicar no sub-menu 'Usuários'
  }

  acessarPaginaUsuario() {
      // Adicione aqui a lógica para acessar a página de Usuários
  }

  clicarBotaoNovo() {
      // Adicione aqui a lógica para clicar no botão 'Novo'
  }

  preencherCampoCPF(cpf) {
      // Adicione aqui a lógica para preencher o campo 'CPF' com o valor 'cpf'
  }

  preencherCampoNome(nome) {
      // Adicione aqui a lógica para preencher o campo 'Nome' com o valor 'nome'
  }

  preencherCampoNomeUsuario(nomeUsuario) {
      // Adicione aqui a lógica para preencher o campo 'Nome de Usuário' com o valor 'nomeUsuario'
  }

  preencherCampoEmail(email) {
      // Adicione aqui a lógica para preencher o campo 'E-mail' com o valor 'email'
  }

  preencherCampoEmailRecuperacaoSenha(email) {
      // Adicione aqui a lógica para preencher o campo 'E-mail Recuperação de Senha' com o valor 'email'
  }

  clicarBotaoSalvar() {
      // Adicione aqui a lógica para clicar no botão 'Salvar'
  }
}
 const CadUsuarioNew= new CadUsuario();
 export default CadUsuarioNew;