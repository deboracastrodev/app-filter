describe('Page root with gists list', () => {

    it('When visiting the root page make sure url contains initial params filters ', () => {
        cy.visit('/');

        cy.url().should('contain', 'num_files=0');

    });

    it('and check the menu ', () => {
        cy.get('#nav').children('.router-link-active').should('attr.attr', 'href', '/')
        cy.get('#nav').children('[href="/about"]').should('contain','About');
    });

    it('and check filter fecth layout ', () => {
        cy.contains('h4', 'Filter fetch');
        cy.contains('h5', 'Gists update after');

        cy.get('.el-radio-group')
        .should('contain', '10 minutes ago')
        .and('contain', '15 minutes ago')
        .and('contain', '20 minutes ago');
    });

    it('and check if component filter matchs with url', () => {
        cy.get('[datacy="g-filter15"]').click();
        cy.wait(200);
        cy.url().should('contain', 'minutes=15');
        cy.get('.el-radio-group')
        .children('.el-radio.is-checked')
        .should('contain', '15 minutes ago');

        cy.get('[datacy="g-filter10"]').click();
        cy.wait(200);
        cy.url().should('contain', 'minutes=10');
    });

    it('and check filter table layout ', () => {
        cy.contains('h4', 'Filter table');
        cy.contains('label', 'Quantity files (>1)');
        cy.get('[datacy="in-filter-files"]').get('.el-input').get('.el-input__inner').should('have.attr', 'max', '99');
    });

    it('and check if component filter table with url', () => {
        cy.get('[datacy="in-filter-files"]').get('.el-input-number__increase').click();
        cy.wait(200);
        cy.url().should('contain', 'num_files=1');
    });

    it('and check table', () => {
        cy.get('[datacy="t-gists"]')
        .should('contain', 'Update at')
        .and('contain', 'Login')
        .and('contain', 'Quantity Files')
        .and('contain', 'Created at')
        .and('contain', 'Files');
    });
});
