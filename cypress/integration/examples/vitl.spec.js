describe('Vitl cypress e2e test', () => {
    it('Visit Vitl', () => {
        cy.visit('http://localhost:3000')
        cy.title().should('eq', 'Vitl');
    });
});
