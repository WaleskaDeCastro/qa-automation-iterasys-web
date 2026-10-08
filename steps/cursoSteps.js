const { When, Then } = require('@cucumber/cucumber');

When('clica em iniciar o curso e seleciona a aula {string}', async function (aula) {
  // Chama o método atualizado na Page Object passando a turma e a aula correspondente
  await this.cursoPage.selecionarCursoEular("Formação em Teste e QA com IA - Turma 148", aula);
});

When('clica em iniciar o conteúdo para registrar o progresso', async function () {
  await this.cursoPage.interagirComConteudoVideo();
});

When('tenta retornar ao curso utilizando o botão de voltar específico da aula', async function () {
  await this.cursoPage.voltarAoCurso();
});

Then('o sistema deve exibir a página do curso mas o teste falha por fluxo de navegação incorreto, registrando o bug', async function () {
  await this.cursoPage.validarUrlCurso();
});