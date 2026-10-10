# language: pt
@bug
Funcionalidade: Retornar da aula para o programa do curso
  Como aluno da plataforma
  Quero voltar da aula para o programa do curso
  Para continuar navegando pelo conteúdo do curso

  Esquema do Cenário: Retornar de uma aula para o programa do curso
    Dado que o usuário esteja na página de cursos
    Quando o usuário carregar mais cursos
    Então o curso "<curso>" deve estar disponível
    Quando o usuário abrir o curso "<curso>"
    Então o título do curso "<curso>" deve ser exibido
    Quando o usuário abrir a aula "<aula>"
    Então o conteúdo da aula "<aula>" e a opção de retorno devem ser exibidos no curso "<curso>"
    Quando o usuário clicar no botão de voltar
    Então o curso deve ser exibido novamente na URL "<url_esperada>"

    Exemplos:
      | curso                                     | aula           | url_esperada                                                                    |
      | Formação em Teste de Software - Turma 142 | Apresentação   | https://iterasys.learnworlds.com/course/formacao-em-teste-de-software-turma-142 |
      | Formação em Teste de Software - Turma 141 | Aula Inaugural | https://iterasys.learnworlds.com/course/formacao-em-teste-de-software-turma-141 |
