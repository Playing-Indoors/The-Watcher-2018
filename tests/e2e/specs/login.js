// https://docs.cypress.io/api/introduction/api.html

describe('Testing of login', () => {
	beforeEach(() => {
		cy.visit('/logout');
	});

	it('displays errors on login', function() {
		cy.get('input[name=email]').type('fakeuser@gmail.com');
		cy.get('input[name=password]').type('password123{enter}');

		// we should have visible errors now
		cy
			.get('[data-test=error]')
			.should('be.visible')
			.and(
				'contain',
				'There is no user record corresponding to this identifier'
			);

		// and still be on the same URL
		// TODO better handle this since this matches everything
		cy.url().should('include', '/');
	});

	it('logs in', function() {
		cy.get('input[name=email]').type('calebkester@gmail.com');
		// TODO change this and change my password ;)
		cy.get('input[name=password]').type('thewatcher');
		cy.get('[data-test=submit]').click();
		cy.url().should('include', '/settlements');
	});
});
