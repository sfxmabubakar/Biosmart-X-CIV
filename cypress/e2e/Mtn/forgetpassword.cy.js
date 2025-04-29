describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://portaltest.mtn.ci')

    })


it('forget password', () => {
    cy.get('.forgot-password').click()

})
})