Cypress.Commands.add('dragAndDrop', (dragSelector, dropSelector) => {
    cy.get(dragSelector)
      .trigger('dragstart', {
        dataTransfer: new DataTransfer(),
      })
    cy.get(dropSelector)
      .trigger('drop', {
        dataTransfer: new DataTransfer(),
      })
    cy.get(dragSelector)
      .trigger('dragend')
  })

  Cypress.Commands.add('exists', (selector) => {
    cy.get(selector).should('exist')
  })
  
  Cypress.Commands.add('isVisible', (selector) => {
    cy.get(selector).should('be.visible')
  })

  Cypress.Commands.add('hasText', (selector, text) => {
    cy.get(selector).should('contain', text)
  })

  Cypress.Commands.add('clickByTestId', (testId) => {
    cy.get(`[data-testid="${testId}"]`).click()
  })
  
  Cypress.Commands.add('verifyQuizState', (state) => {
    switch(state) {
      case 'initial':
        cy.get('[data-testid="draggable-cards-container"]').should('be.visible')
        cy.get('[data-testid="drop-zones-container"]').should('be.visible')
        break
      case 'completed':
        cy.get('[data-testid="success-view"]').should('be.visible')
        break
      case 'reset':
        cy.get('[data-testid="drop-zone-placeholder"]').should('be.visible')
        break
    }
  })
  
  Cypress.Commands.add('completeSTLCQuiz', () => {
    cy.visit('/quizstlc')
  })
  
  Cypress.Commands.add('completePrinciplesQuiz', () => {
    cy.visit('/quizprinciples')
  })