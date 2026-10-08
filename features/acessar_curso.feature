# language: pt
@acesso
Funcionalidade: Acessar detalhes do curso na Iterasys
  Como um aluno logado na plataforma
  Quero selecionar um curso disponível no catálogo
  Para visualizar suas informações detalhadas, descrição e conteúdo programático

  Esquema do Cenário: Acessar diferentes cursos e validar suas informações
    Dado que o usuário esteja na página de cursos
    Quando ele selecionar o curso "<nome_curso>"
    Então o sistema deve exibir a página com o título "<titulo_esperado>", a descrição "<descricao_esperada>" e o módulo "<modulo_esperado>"

    Exemplos:
      | nome_curso                         | titulo_esperado                    | descricao_esperada                                                                      | modulo_esperado        |
      | Formação em Teste e QA com IA      | Formação em Teste e QA - Turma 148 | Automação de Teste em JavaScript (Playwright e Postman) + IA                            | Conceitos Fundamentais |
      | Formação em Teste e QA - Turma 147 | Formação em Teste e QA             | Automação de Teste em JavaScript (Playwright, Webdriver.io, Appium, Postman e Supertest) | Planejamento           |