describe('Verificar se ao submeter a resposta correta na fase 1, será exibida uma mensagem para informar a conclusão da fase.', () => {
  it('Uma mensagem deve ser exibida para indicar que a ação foi realizada corretamente.', () => {
    cy.visit('https://computacaoplugadaordenacao.netlify.app/')
    cy.get('.home_btn__nm6eR').click();
    cy.get('.levelSelection_title__VjOgI').should('contain', 'Seleção de fase')
    cy.get('.levelSelection_content__6eMNH > :nth-child(2)').click();
    cy.get('p').should('contain', 'Você sabia que os computadores são muitas vezes utilizados para colocar coisas em algum tipo de ordem? Por exemplo, podem colocar nomes em ordem alfabética, e-mails por data, ou itens em ordem numérica.')
    cy.get('.sc-gEvEer > :nth-child(3)').click();
    cy.get('p').should('contain', 'Classificar listas de itens como livros nos ajuda a encontrar as coisas rapidamente, e também facilita a identificação de itens específicos de cada lista.')
    cy.get('.sc-gEvEer > :nth-child(3)').click();
    cy.get('ul > :nth-child(1)').click();
    cy.get('span').should('contain', 'Você concluiu a FASE 1 do Computação Plugada Ordenação!')
  })
})