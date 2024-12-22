/// <reference types="cypress"/>

describe('Login Feature',() => {
    it('User Login with Valid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    })
    it('User Login with Invalid Username',() => {
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
         cy.get('[name="username"]').type('Admim');
         cy.get('[name="password"]').type('admin123');
         cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
         cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    })
    it('User Login with Invalid Password',() => {
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
         cy.get('[name="username"]').type('Admin');
         cy.get('[name="password"]').type('admin124');
         cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
         cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    })
    it('User Forgot Your Password',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click();
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password')
    })
    it('User Reset Password with valid Username',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click();
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password')
        cy.get('[name="username"]').type('Admin');
        cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset').click();
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully')
    })
    it('User Reset Password with Invalid Username',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click();
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password')
        cy.get('[name="username"]').type('Admin');
        cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset').click();
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully')
    })
    it('User Access Linkedin OrangeHRM',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]').should('have.attr', 'href', 'https://www.linkedin.com/company/orangehrm/mycompany/').click();
    })
    it('User Access Facebook OrangeHRM',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('a[href="https://www.facebook.com/OrangeHRM/"]').should('have.attr', 'href', 'https://www.facebook.com/OrangeHRM/').click();
    })
    it('User Access Twitter OrangeHRM',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('a[href="https://twitter.com/orangehrm?lang=en"]').should('have.attr', 'href', 'https://twitter.com/orangehrm?lang=en').click();
    })
    it('User Access Youtube OrangeHRM',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('a[href="https://www.youtube.com/c/OrangeHRMInc"]').should('have.attr', 'href', 'https://www.youtube.com/c/OrangeHRMInc').click();
    })
    it('User Access Website OrangeHRM',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('a[href="http://www.orangehrm.com"]').should('have.attr', 'href', 'http://www.orangehrm.com').click();
    })

})