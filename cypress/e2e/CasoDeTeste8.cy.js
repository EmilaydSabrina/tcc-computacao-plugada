describe('Verificar se ao submeter a resposta correta na fase 2, o usuário será redirecionado para uma tela que contém um vídeo.', () => {
    it('O usuário deve ser redirecionado com sucesso para uma tela que contém um vídeo.', () => {
      cy.visit('https://computacaoplugadaordenacao.netlify.app/')
      cy.get('.home_btn__nm6eR').click();
      cy.get('.levelSelection_title__VjOgI').should('contain', 'Seleção de fase')
      cy.get('.levelSelection_content__6eMNH > :nth-child(3)').click('');
      cy.get('p').should('contain', 'Agora vamos conhecer a ordenação por inserção (Insertion Sort).')
      cy.get('.sc-gEvEer > :nth-child(3)').click();
      cy.get('p').should('contain', 'A ordenação por inserção remove cada objeto de um grupo desordenado e o insere na sua posição correta em uma lista crescente (Veja a figura acima).')
      cy.get('.sc-gEvEer > :nth-child(3)').click();
      cy.get('p').should('contain', 'A cada inserção, o grupo de objetos desordenados diminui e a lista ordenada aumenta até que, finalmente, toda a lista esteja ordenada.')
      cy.get('.sc-gEvEer > :nth-child(3)').click();
      cy.get('ul > :nth-child(2)').click();
      cy.get('ul > :nth-child(4)').click();
      cy.get('li').should('contain', 'Já assisti!')
    })
  })