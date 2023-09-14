describe('login Test Spec', () => {
  it('Validate the login access', () => {
    // Visiting the '/login' page of the web application
    cy.visit('/login')

    // Typing a username "Admin" into the username input field
    cy.get('[name="username"]').type('Admin')

    // Typing a password "admin123" into the password input field
    cy.get('[name="password"]').type('admin123')

    // Clicking the login button
    cy.get('.oxd-button').click()

    // Asserting that after successful login, the text 'Dashboard' should be present in '.oxd-topbar-header-title' element
    cy.get('.oxd-topbar-header-title').should('has.text', 'Dashboard')
  })
})
