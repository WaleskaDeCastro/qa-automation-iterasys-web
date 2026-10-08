# language: pt
@bug 
Funcionalidade: Validação de Bug - Ausência de retorno direto da aula para o curso
  Como usuário da plataforma
  Quero retornar para a página do curso ao sair da aula
  Para evitar ser jogado de volta para o catálogo geral

  Esquema do Cenário: Validar falha de usabilidade na ausência do botão de retorno para o curso
    Dado que o usuário esteja na página de cursos 
    Quando clica em iniciar o curso e seleciona a aula "<aula>"
    E clica em iniciar o conteúdo para registrar o progresso
    E tenta retornar ao curso utilizando o botão de voltar específico da aula
    Então o sistema deve exibir a página do curso mas o teste falha por fluxo de navegação incorreto, registrando o bug
    Exemplos:
    | aula         |
    | Aula Inaugural |