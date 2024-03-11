#language: pt

Funcionalidade: Cadastro de Usuario

Contexto: 

Dado acessei o sistema
Quando clico no menu 'Cadastros'
E clico no submenu 'Pessoas'
E clico no SubSubMenu 'Pessoa'

Cenário: Inclusão de Usuário
Dado acessei a pagina de Inclusão de pessoa 
Quando clico no botão 'Novo' 
E preencho com o valor 'Leo bom de papo' o campo 'Nome' 
E seleciono o valor 'ARGENTINA' no campo 'Pais'
E preencho com o valor '011.934.220-00' o campo 'Identificação'
E preencho com o valor '01/07/2005' o campo 'Data de Nascimento'
E preencho com o valor 'EmailValido' o campo 'E-mail Recuperação de Senha'
# E clico no botão 'Salvar'
# Então ainda n sei 


