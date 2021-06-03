describe('Vitl cypress e2e test', () => {
    it('Visit Vitl', () => {
        cy.visit('http://localhost:3000')
        cy.title().should('eq', 'Vitl');
    });

    it('Test API endpoint returns 200 status', () => {
        cy.request({
            method: 'GET',
            url: 'https://vitl-static-api.s3-eu-west-1.amazonaws.com/fe-test.json',
        }).then(resp => resp)
            .should((resp) => {
                expect(resp.status).to.eq(200);
            });
    });

    it('Find header, logo, cartIcon elements are present in page', () => {
        cy.get('[data-cy=header]');
        cy.get('[data-cy=vitlLogo]');
        cy.get('[data-cy=cartIcon]');
        cy.wait(2000); // wait for 2 seconds before testing
    });
});
