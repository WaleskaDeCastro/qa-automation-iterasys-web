const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Given('que o usuário esteja logado na plataforma Iterasys', async function () {
  await this.page.getByRole('link', { name: 'Cursos' }).click();
});

Given('que o usuário esteja na página de cursos', async function () {
  await this.page.getByRole('link', { name: 'Cursos' }).click();
  await expect(this.page.locator('#el_1750969932646_351')).toContainText('Cursos');
});

When('ele preencher a busca com {string}', async function (termoBusca) {
  const inputBusca = this.page.getByRole('textbox', { name: 'Pesquisar cursos' });
  await inputBusca.click();
  await inputBusca.fill(termoBusca);
  
  // Clica no botão de busca (ícone de lupa/botão sem texto mapeado no codegen)
  await this.page.getByRole('button').filter({ hasText: /^$/ }).click();
});

Then('o sistema deve exibir o resultado esperado {string}, do tipo {string}', async function (resultadoEsperado, tipoResultado) {
  if (tipoResultado === 'sucesso') {
    // Em vez de usar um ID fixo que muda, procuramos por um elemento que contenha o texto do curso na tela
    await expect(this.page.locator(`text=${resultadoEsperado}`)).toBeVisible();
  } else if (tipoResultado === 'vazio') {
    await expect(this.page.locator('#component_1750969932640_343')).toContainText(resultadoEsperado);
  }
});