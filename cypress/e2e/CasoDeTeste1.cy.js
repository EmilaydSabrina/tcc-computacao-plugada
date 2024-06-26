
import selectors from './selectors.js';

  beforeEach(() => {
    cy.visit('https://computacaoplugadaordenacao.netlify.app/');
  });

  describe('Testes combinados', () => {
    
  it('[CT-01] Verificar se Botão “Iniciar” na Tela Inicial do Sistema leva à Tela de Fases', () => {
    cy.get(selectors.homeButton).click();
    cy.get(selectors.levelTitle).should('contain', 'Seleção de fase');
  })

  it('[CT-02] Verificar se ao submeter a resposta correta na fase 1, será exibida uma mensagem para informar a conclusão da fase.', () => {
    cy.get(selectors.homeButton).click();
    cy.get(`${selectors.levelContent} > :nth-child(2)`).click();
    cy.get(selectors.listItemThree).click();
    cy.get(selectors.listItemThree).click();
    cy.get(selectors.listItemFirst).click();
    cy.get(selectors.successMessage).should('contain', 'Você concluiu a FASE 1 do Computação Plugada Ordenação!');
})

it('[CT-03] Verificar se ao submeter a resposta incorreta na fase 1, o sistema não avança para a próxima fase.', () => {
    cy.get(selectors.homeButton).click();
    cy.get(`${selectors.levelContent} > :nth-child(2)`).click();
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemSecond).click();
    cy.get(selectors.tryAgainMessage).should('contain', 'Tente outra vez.')
  })

  
  it('[CT-04] Verificar se ao clicar no botão Home após finalizar a fase 1, o usuário será redirecionado para a tela de seleção de fases.', () => {
    cy.get(selectors.homeButton).click();
    cy.get(`${selectors.levelContent} > :nth-child(2)`).click();
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemFirst).click();
    cy.get(`${selectors.levelSelectionLink} > ${selectors.navButton} > ${selectors.containerButton}`).click();
    cy.get(selectors.levelTitle).should('contain', 'Seleção de fase')
  })

  it('[CT-05] Verificar se ao clicar no botão de ícone Reload, após finalizar a fase 1, o usuário será redirecionado para a tela de informações da fase.', () => {
    cy.get(selectors.homeButton).click();
    cy.get(`${selectors.levelContent} > :nth-child(2)`).click();
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemFirst).click();
    cy.get(`${selectors.levelSelectionLink} > ${selectors.navButton} > ${selectors.containerButton}`).click();
    cy.get(selectors.strongElement).should('contain', 'FASE 1')
  })

  it('[CT-06] Verificar se ao clicar no botão com ícone de Seta, após finalizar a fase 1, o usuário será redirecionado automaticamente para próxima fase.', () => {
    cy.get(selectors.homeButton).click();
    cy.get(`${selectors.levelContent} > :nth-child(2)`).click();
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemFirst).click();
    cy.get(selectors.successMessage).should('contain', 'Você concluiu a FASE 1 do Computação Plugada Ordenação!')
  })

  it('[CT-08] Verificar se ao submeter a resposta correta na fase 2, o usuário será redirecionado para uma tela que contém um vídeo.', () => {
    cy.get(selectors.homeButton).click();
    cy.get(`${selectors.levelContent} > :nth-child(3)`).click('');
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemSecond).click();
    cy.get(selectors.listItemFourth).should('be.visible').click();
    cy.get(selectors.listItemGeneral).should('be.visible', 'Já assisti!')
  })

  it('[CT-10] Verificar se ao clicar no botão “Já assisti!” após finalizar a fase 2, será exibida uma mensagem para informar a conclusão da fase.', () => {
    cy.get(selectors.homeButton).click();
    cy.get(`${selectors.levelContent} > :nth-child(3)`).click('');
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemSecond).click();
    cy.wait(1000)
    cy.get(selectors.listItemFourth).click();
    cy.wait(1000)
    cy.get(selectors.listItemGeneral).click();
    cy.get(selectors.successMessage).should('contain', 'Você concluiu a FASE 2 do Computação Plugada Ordenação!')
  })

  it('[CT-11] Verificar se ao submeter a resposta incorreta na fase 2, o sistema não avança para a próxima fase.', () => {
    cy.get(selectors.homeButton).click();
    cy.get(`${selectors.levelContent} > :nth-child(3)`).click('');
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemFirst).click();
    cy.get(selectors.tryAgainMessage).should('contain', 'Tente outra vez.');
})

it('[CT-12] Verificar se ao clicar no botão Home após finalizar a fase 2, o usuário será redirecionado para a tela de seleção de fases.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(`${selectors.levelContent} > :nth-child(3)`).click('');
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemSecond).click();
  cy.wait(1000)
  cy.get(selectors.listItemFourth).click();
  cy.contains('Já assisti!').click();
  cy.get(`${selectors.levelSelectionLink} > ${selectors.navButton} > ${selectors.containerButton}`).click();
  cy.get(selectors.levelTitle).should('contain', 'Seleção de fase')
})

it('[CT-13] Verificar se ao clicar no botão de ícone Reload, após finalizar a fase 2, o usuário será redirecionado para a tela de informações da fase.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(`${selectors.levelContent} > :nth-child(3)`).click('');
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemSecond).click();
  cy.wait(1000)
  cy.get(selectors.listItemFourth).click();
  cy.contains('Já assisti!').click();
  cy.get(`${selectors.levelSelectionLink} > ${selectors.navButton} > ${selectors.containerButton}`).click();
  cy.contains( 'FASE 2')
})

it('[CT-14] Verificar se ao clicar no botão com ícone de Seta, após finalizar a fase 2, o usuário será redirecionado automaticamente para próxima fase.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(`${selectors.levelContent} > :nth-child(3)`).click('');
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemSecond).click();
  cy.wait(1000)
  cy.get(selectors.listItemFourth).click();
  cy.contains('Já assisti!').click();
  cy.get(`${selectors.levelSelectionLink} > ${selectors.navButton} > ${selectors.containerButton}`).click();
  cy.contains( 'FASE 3')
  })

  it('[CT-15] Verificar se ao submeter a resposta correta na fase 3, o usuário será redirecionado para uma tela que contém um vídeo.', () => {
    cy.get(selectors.homeButton).click();
    cy.get(selectors.levelContent + ' > :nth-child(4)').click();
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemThree).click()
    cy.get(selectors.listItemFirst).click();
    cy.contains('Próximo').click();
    cy.wait(1000);
    cy.contains('Próximo').click();
    cy.wait(1000);
    cy.get(selectors.listItemFirst).click();
    cy.contains('Próximo').click();
    cy.wait(1000);
    cy.contains('Próximo').click();
    cy.wait(1000);
    cy.get(selectors.listItemGeneral + ':nth-child(3)').click();
    cy.contains('Próximo').click();
    cy.wait(1000);
    cy.contains('Próximo').click();
    cy.wait(1000);
    cy.get(selectors.listItemFirst).click();
    cy.contains('Próximo').click();
    cy.should('contain', 'Próximo');
  });
 
it('[CT-17] Verificar se ao clicar no botão “Já assisti!” após finalizar a fase 3, será exibida uma mensagem para informar a conclusão da fase.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(selectors.levelContent + ' > :nth-child(4)').click();
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemFirst).click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemGeneral + ':nth-child(3)').click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.get(selectors.successMessage).should('contain', 'Você concluiu a FASE 3 do Computação Plugada Ordenação!')
})

it('[CT-18] Verificar se ao submeter a resposta incorreta na fase 3, o sistema não avança para a próxima fase.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(selectors.levelContent + ' > :nth-child(4)').click();
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemSecond).click();
  cy.get(selectors.tryAgainMessage).should('contain', 'Tente outra vez.');
})

it('[CT-19] Verificar se ao clicar no botão Home após finalizar a fase 3, o usuário será redirecionado para a tela de seleção de fases.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(selectors.levelContent + ' > :nth-child(4)').click();
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemFirst).click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemGeneral + ':nth-child(3)').click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.get(`${selectors.levelSelectionLink} > ${selectors.navButton} > ${selectors.containerButton}`).click();
  cy.get(selectors.levelTitle).should('contain', 'Seleção de fase')
})

it('[CT-20] Verificar se ao clicar no botão de ícone Reload, após finalizar a fase 3, o usuário será redirecionado para a tela de informações da fase.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(selectors.levelContent + ' > :nth-child(4)').click();
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemFirst).click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemGeneral + ':nth-child(3)').click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.get(`${selectors.levelSelectionLink} > ${selectors.navButton} > ${selectors.containerButton}`).click();
  cy.contains( 'FASE 3')
})

it('[CT-21] Verificar se ao clicar no botão com ícone de Seta, após finalizar a fase 3, o usuário será redirecionado automaticamente para próxima fase.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(selectors.levelContent + ' > :nth-child(4)').click();
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemThree).click()
  cy.get(selectors.listItemFirst).click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemGeneral + ':nth-child(3)').click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.get(`${selectors.levelSelectionLink} > ${selectors.navButton} > ${selectors.containerButton}`).click();
  cy.contains( 'FASE 4')
})

it('[CT-22] Verificar se ao submeter a resposta correta na fase 4, será exibida uma mensagem para informar a conclusão da fase.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(selectors.levelContent + ' > :nth-child(5)').click();
  cy.get(selectors.listItemThree).click()
  cy.contains('Já assisti!').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.wait(1000);
  cy.get(selectors.listItemSecond).click();;
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.get(selectors.successMessage).should('contain', 'Você concluiu a FASE 4 do Computação Plugada Ordenação!')
})

it('[CT-24] Verificar se ao submeter a resposta incorreta na fase 4, o sistema não avança para a próxima fase.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(selectors.levelContent + ' > :nth-child(5)').click();
  cy.get(selectors.listItemThree).click()
  cy.contains('Já assisti!').click();
  cy.get(selectors.listItemSecond).click();
  cy.get(selectors.tryAgainMessage).should('contain', 'Tente outra vez.');
})

it('[CT-25] Verificar se ao clicar no botão Home após finalizar a fase 4, o usuário será redirecionado para a tela de seleção de fases.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(selectors.levelContent + ' > :nth-child(5)').click();
  cy.get(selectors.listItemThree).click()
  cy.contains('Já assisti!').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.wait(1000);
  cy.get(selectors.listItemSecond).click();;
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get('ul > :nth-child(1)').click();
  cy.get(`${selectors.levelSelectionLink} > ${selectors.navButton} > ${selectors.containerButton}`).click();
  cy.get(selectors.levelTitle).should('contain', 'Seleção de fase')
})

it('[CT-26] Verificar se ao clicar no botão de ícone Reload, após finalizar a fase 4, o usuário será redirecionado para a tela de informações da fase.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(selectors.levelContent + ' > :nth-child(5)').click();
  cy.get(selectors.listItemThree).click()
  cy.contains('Já assisti!').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.wait(1000);
  cy.get(selectors.listItemSecond).click();;
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get('ul > :nth-child(1)').click();
  cy.get(`${selectors.levelSelectionLink} > ${selectors.navButton} > ${selectors.containerButton}`).click();
  cy.contains( 'FASE 4')
})

it('[CT-27] Verificar se ao clicar no botão com ícone de Seta, após finalizar a fase 4, o usuário será redirecionado automaticamente para tela de seleção de fases.', () => {
  cy.get(selectors.homeButton).click();
  cy.get(selectors.levelContent + ' > :nth-child(5)').click();
  cy.get(selectors.listItemThree).click()
  cy.contains('Já assisti!').click();
  cy.wait(1000);
  cy.get(selectors.listItemFirst).click();
  cy.wait(1000);
  cy.get(selectors.listItemSecond).click();;
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.contains('Próximo').click();
  cy.wait(1000);
  cy.get('ul > :nth-child(1)').click();
  cy.get(`${selectors.levelSelectionLink} > ${selectors.navButton} > ${selectors.containerButton}`).click();
  cy.get(selectors.levelTitle).should('contain', 'Seleção de fase')
})

})



  

