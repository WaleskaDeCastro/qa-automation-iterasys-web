const { expect } = require('@playwright/test');

class CursoPage {
  constructor(page) {
    this.page = page;
  }

  async acessarPlataforma() {
    await this.page.goto('https://iterasys.learnworlds.com/');
  }

  async irParaLogin() {
    await this.page.getByRole('link', { name: 'Entrar' }).click();
  }

  async preencherLogin(email, senha) {
    await this.page.getByRole('textbox', { name: 'Digite seu e-mail:' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Digite sua senha:' }).fill(senha);
    await this.page.getByRole('button', { name: 'Entrar' }).click();
    const meuLocator = this.page.locator(`h2[class="lw-widget-in learnworlds-subheading learnworlds-element learnworlds-subheading-large"]:has-text("Hi, Waleska de Castro Cavalcanti")`);
    
    await meuLocator.waitFor({ state: 'visible', timeout: 15000 });

  }

  async carregarMaisCursos() {
    await expect(this.page.locator('#component_1750969932641_344')).toContainText('Carregar mais');
    await this.page.getByRole('button', { name: 'Carregar mais' }).click();
  }

  async localizarLinkCurso(nomeCurso) {
    const tituloCurso = this.page.getByRole('heading', { name: nomeCurso, exact: true });
    await expect(tituloCurso).toBeVisible({ timeout: 15000 });

    const idTitulo = await tituloCurso.getAttribute('id');
    if (!idTitulo) {
      throw new Error(`O título do curso "${nomeCurso}" não possui um ID para localizar o card.`);
    }

    return this.page.locator(`a[aria-labelledby="${idTitulo}"]`).first();
  }

  async validarCursoDisponivel(nomeCurso) {
    const linkCurso = await this.localizarLinkCurso(nomeCurso);
    await expect(linkCurso).toBeVisible({ timeout: 15000 });
  }

  async abrirCurso(nomeCurso) {
    const linkCurso = await this.localizarLinkCurso(nomeCurso);
    await expect(linkCurso).toBeVisible({ timeout: 15000 });
    await linkCurso.scrollIntoViewIfNeeded();
    await linkCurso.click();
  }

  async validarTituloCurso(nomeCurso) {
    await expect(this.page.getByText(nomeCurso, { exact: true }).first()).toBeVisible();
  }

  async abrirAula(nomeAula) {
    await this.page.getByText(nomeAula).click();
  }

  async validarAulaEOpcoesDeRetorno(nomeCurso, nomeAula) {
    await expect(this.page.locator('h1')).toContainText(nomeCurso);
    await expect(this.page.getByText(nomeAula, { exact: false }).first()).toBeVisible();
    await expect(this.page.locator('#wrapper')).toContainText('Voltar ao programa');
  }

  async voltarAoPrograma() {
    await this.page.getByRole('link', { name: 'Voltar ao programa' }).click();
  }

  async validarProgramaCursoExibido(urlEsperada) {
    await expect(this.page.locator('#el_1748130494432_340')).toContainText('Pro');
    await expect(this.page).toHaveURL(urlEsperada);
  }
}

module.exports = { CursoPage };