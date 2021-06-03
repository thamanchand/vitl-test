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
});
