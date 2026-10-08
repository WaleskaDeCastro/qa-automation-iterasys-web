const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('ele selecionar o filtro {string}', async function (filtro) {
  // Clica no botão/aba do filtro correspondente (ex: "Meu", "Mais novo", "gratuito")
  await this.page.getByText(filtro, { exact: true }).click();
});

Then('o sistema deve exibir o resultado esperado contendo {string} ou a mensagem de sem resultados', async function (resultadoEsperado) {
  if (resultadoEsperado === 'Sem resultados') {
    await expect(this.page.locator('#component_1750969932640_343')).toContainText('Sem resultados');
  } else {
    // Valida se o card do curso correspondente está visível na tela
    await expect(this.page.locator(`text=${resultadoEsperado}`)).toBeVisible();
  }
});