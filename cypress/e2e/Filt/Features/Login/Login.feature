#language: pt

Funcionalidade: Quero fazer login no site com dados válidos

    Contexto: Navegar para o Site


    Cenário: Fazer login como novo usuário cadastrado com dados válidos
        Dado acessei a pagina
        Quando preencho com o valor Cpf o campo Cpf
            | Cpf         | 
            | 10470038993 | 
        E preencho com o valor Senha o campo Senha 
            | Senha       | 
            | euamovc1912 | 
        E clico no botão Entrar
        Então a pagina home deverá ser exibida

