describe('Verificar se Botão “Iniciar” na Tela Inicial do Sistema leva à Tela de Fases', () => {
  it('A navegação deve ser corretamente direcionada para a Tela de Fases.', () => {
    cy.visit('https://computacaoplugadaordenacao.netlify.app/')
    cy.wait(2000);
    cy.get('.home_btn__nm6eR').click();
    cy.get('.levelSelection_title__VjOgI').should('contain', 'Seleção de fase')
  })
})