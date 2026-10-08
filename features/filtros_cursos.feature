# language: pt
@filtros
Funcionalidade: Filtros de cursos na Iterasys
  Como um aluno logado na plataforma
  Quero filtrar os cursos por diferentes categorias
  Para visualizar apenas os conteúdos desejados

  Esquema do Cenário: Aplicar diferentes filtros no catálogo de cursos
    Dado que o usuário esteja na página de cursos
    Quando ele selecionar o filtro "<filtro>"
    Então o sistema deve exibir o resultado esperado contendo "<resultado_esperado>" ou a mensagem de sem resultados

    Exemplos:
      | filtro    | resultado_esperado                        | tipo_resultado |
      | Meu       | Formação em Teste e QA - Turma 147        | sucesso        |
      | Mais novo | Preparatório CT-AI                        | sucesso        |
      | gratuito  | Sem resultados                            | vazio          |