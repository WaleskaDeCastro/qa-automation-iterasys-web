const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

When('ele selecionar o curso {string}', async function (nomeCurso) {
  // Clica exatamente no link que corresponde ao nome do curso da linha atual da tabela
  const linkCurso = this.page.getByRole('link', { name: nomeCurso }).first();
  
  await linkCurso.scrollIntoViewIfNeeded();
  await linkCurso.click();
});

Then('o sistema deve exibir a página com o título {string}, a descrição {string} e o módulo {string}', async function (tituloEsperado, descricaoEsperada, moduloEsperado) {
  // 1. Valida se o título esperado está visível na página de detalhes
  await expect(this.page.locator(`text=${tituloEsperado}`).first()).toBeVisible();
  
  // 2. Valida se a descrição técnica do curso está visível
  await expect(this.page.locator(`text=${descricaoEsperada}`).first()).toBeVisible();
  
  // 3. Valida se o módulo esperado está visível na página
  await expect(this.page.locator(`text=${moduloEsperado}`).first()).toBeVisible();
});