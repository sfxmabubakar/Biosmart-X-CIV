describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://portaltest.mtn.ci')

    })

    it('login', () => {
        cy.get('.ion-margin-top-24 > .ng-pristine > .native-input').type("sfxadmin")
        cy.get('.input-item.ion-margin-top-16').type("password")
        cy.get('.ion-text-center > :nth-child(1)').click()
})
})