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

  async selecionarCursoEular(nomeCurso, nomeAula) {
    // 1. Vai para a página geral de cursos/catálogo
    await this.page.goto('https://iterasys.learnworlds.com/courses');
    await this.page.waitForLoadState('networkidle');

    // 2. Localiza e clica no card da turma específica
    const linkCurso = this.page.locator(`text=${nomeCurso}`).first();
    await linkCurso.scrollIntoViewIfNeeded();
    await linkCurso.click();
    await this.page.waitForLoadState('networkidle');

    // 3. Localiza e clica na aula específica dentro da página do curso
    const aulaLocator = this.page.locator(`span[data-testid="course-contents-unit-title"]:has-text("${nomeAula}")`).first();
    
    await aulaLocator.waitFor({ state: 'visible', timeout: 15000 });
    await aulaLocator.scrollIntoViewIfNeeded();
    await aulaLocator.click();
    
    await this.page.waitForLoadState('networkidle');
  }

  async interagirComConteudoVideo() {
    const iframeLocator = this.page.locator('iframe[title="Conteúdo da unidade"]');
    await iframeLocator.waitFor({ state: 'visible', timeout: 20000 });

    const frame = iframeLocator.contentFrame();
    
    // Tenta clicar no botão de reprodução ou na barra diretamente sem travar se o overlay estiver oculto
    try {
      const overlay = frame.locator('.overlayState');
      if (await overlay.isVisible()) {
        await overlay.click();
      }
    } catch (e) {
      // Ignora se não houver overlay visível
    }

    try {
      const playBtn = frame.getByRole('button', { name: 'Reproduzir' });
      if (await playBtn.isVisible()) {
        await playBtn.click();
      }
    } catch (e) {
      // Ignora se o botão não estiver visível
    }

    // Clica na barra de reprodução (slider) para registrar o progresso de visualização da aula
    const barraReproducao = frame.getByRole('slider', { name: 'Barra de reprodução' });
    await barraReproducao.waitFor({ state: 'visible', timeout: 10000 });
    await barraReproducao.click();
    
    // Aguarda alguns segundos para o sistema persistir o progresso no banco da plataforma
    await this.page.waitForTimeout(3000);
  }

  async voltarAoCurso() {
    const botaoVoltarPrograma = this.page.locator('a:has-text("Voltar ao programa")');
    
    await botaoVoltarPrograma.waitFor({ state: 'visible', timeout: 5000 });
    await botaoVoltarPrograma.click();
  }

  async validarUrlCurso() {
    // Valida se a URL atual corresponde à página do curso esperado
    const urlAtual = this.page.url();
    const urlEsperada = 'https://iterasys.learnworlds.com/course/formacao-em-teste-de-software-turma-142';
    await expect(urlAtual).toBe(urlEsperada);
  }
}

module.exports = { CursoPage };