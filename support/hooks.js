const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { Base } = require('./base');
const { CursoPage } = require('../page/cursoPage'); 

setDefaultTimeout(60 * 1000);

Before(async function () {
  this.base = new Base();
  this.page = await this.base.openBrowser();


  this.cursoPage = new CursoPage(this.page);

  // Login unificado automático
  await this.cursoPage.acessarPlataforma();
  await this.cursoPage.irParaLogin();
  await this.cursoPage.preencherLogin(process.env.EMAIL, process.env.PASSWORD);
});

After(async function () {
  await this.base.closeBrowser();
});