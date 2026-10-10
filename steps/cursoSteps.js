const { When, Then } = require('@cucumber/cucumber');

When('o usuário carregar mais cursos', async function () {
  await this.cursoPage.carregarMaisCursos();
});

Then('o curso {string} deve estar disponível', async function (nomeCurso) {
  await this.cursoPage.validarCursoDisponivel(nomeCurso);
});

When('o usuário abrir o curso {string}', async function (nomeCurso) {
  await this.cursoPage.abrirCurso(nomeCurso);
});

Then('o título do curso {string} deve ser exibido', async function (nomeCurso) {
  await this.cursoPage.validarTituloCurso(nomeCurso);
});

When('o usuário abrir a aula {string}', async function (nomeAula) {
  await this.cursoPage.abrirAula(nomeAula);
});

Then('o conteúdo da aula {string} e a opção de retorno devem ser exibidos no curso {string}', async function (nomeAula, nomeCurso) {
  await this.cursoPage.validarAulaEOpcoesDeRetorno(nomeCurso, nomeAula);
});

When('o usuário clicar no botão de voltar', async function () {
  await this.cursoPage.voltar();
});

Then('o curso deve ser exibido novamente na URL {string}', async function (urlEsperada) {
  await this.cursoPage.validarUrlCursoExibido(urlEsperada);
});