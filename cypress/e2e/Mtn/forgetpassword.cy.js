describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://portaltest.mtn.ci')

    })


it('forget password', () => {
    cy.get('.forgot-password').click()
    cy.get('.input-item.ion-invalid > .ng-untouched > .native-input').type("muminabulia@yopmail.com")
    cy.get('.ion-text-center > .ion-color').click()
})
})