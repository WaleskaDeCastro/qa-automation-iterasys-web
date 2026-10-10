# language: pt
@busca
Funcionalidade: Busca de cursos na Iterasys
  Como um aluno logado na plataforma
  Quero buscar por cursos existentes ou inexistentes
  Para encontrar o conteúdo desejado rapidamente

  Contexto:
    Dado que o usuário esteja logado na plataforma Iterasys

  Esquema do Cenário: Buscar cursos com diferentes termos
    Dado que o usuário esteja na página de cursos
    Quando ele preencher a busca com "<termo_busca>"
    Então o sistema deve exibir o resultado esperado "<resultado_esperado>", do tipo "<tipo_resultado>"

    Exemplos:
      | termo_busca             | resultado_esperado                                                                | tipo_resultado |
      | Formação em Teste e QA  | Formação em Teste e QA com IA - Turma 148                                         | sucesso        |
      | Inglês                  | O proprietário da escola está trabalhando duro para preparar os cursos para você. | vazio          |