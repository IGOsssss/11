///<reference types="cypress" />

import { getRandomNumber } from '/cypress/support/utils';
import meUser from '/cypress/fixtures/me-user.json';
import { setJwtToken } from '/cypress/support/shared.js';

describe('Sign up', () => {

    it('should do register user', () => {

        cy.visit('/');
        cy.get('.navbar').should('be.visible').as('appHeader');

        cy.get('@appHeader').find('a[href$="/register"]').click();
        cy.url().should('include', '/#/register');

        cy.get('.auth-page').as('registerPage');
        cy.get('@registerPage').find('h1').should('have.text', 'Sign up');
        cy.get('@registerPage').find('form').should('be.visible').as('registerForm');

        const rnd = getRandomNumber(1000, 9999);

        const username = 'user_' + rnd;
        cy.get('@registerForm').find('input[ng-model$=username]').type(username);

        const email = username + '@gmail.com';
        cy.get('@registerForm').find('input[ng-model$=email]').type(email);
        cy.get('@registerForm').find('input[ng-model$=password]').type('xyzXYZ123_');
        cy.get('@registerForm').find('button[type=submit]').click();

        cy.get('@appHeader').should('contain.text', username);

    });

    it('should do login user', () => {

        cy.visit('/');
        cy.get('.navbar').should('be.visible').as('appHeader');

        cy.get('@appHeader').find('a[href$="/login"]').click();
        cy.url().should('include', '/#/login');
    
        cy.get('.auth-page').should('be.visible').as('loginPage');
        cy.get('@loginPage').find('h1').should('have.text', 'Sign in');
        cy.get('@loginPage').find('form').should('be.visible').as('loginForm');
    
        cy.get('@loginForm').find('input[ng-model$=email]').type(meUser.email);
        cy.get('@loginForm').find('input[ng-model$=password]').type(meUser.password);
        cy.get('@loginForm').find('button[type=submit]').click();
    
        cy.get('@appHeader').should('contain.text', meUser.username);

    });

    it('should do logout user', () => {

        cy.readFile('tmp/token.txt')
            .should('not.be.empty')
            .then(token => {
                cy.visit('/', {
                    onBeforeLoad: (window) => setJwtToken(window, token)
                });
            });

        cy.get('.navbar').should('be.visible').as('appHeader');

        cy.get('@appHeader').find('a[href$="/settings"]').click();
        cy.url().should('include', '/#/settings');

        cy.get('.settings-page').as('settingsPage');

        cy.get('@settingsPage').find('h1').should('have.text', 'Your Settings');
        // TODO: improve selector to button[data-cy=logout]
        cy.get('@settingsPage').find('button[ng-click*=logout]').click();

        cy.get('@appHeader').should('not.contain.text', meUser.username);
    });

});
