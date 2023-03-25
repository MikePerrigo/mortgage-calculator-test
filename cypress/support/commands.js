Cypress.Commands.add('assertValueChanges', (initialRateInfo, updatedRateInfo) => {
    expect(initialRateInfo.interest_rt).to.not.equal(updatedRateInfo.interest_rt)
    expect(initialRateInfo.estimated_monthly_payment_amt).to.not.equal(updatedRateInfo.estimated_monthly_payment_amt)
})

Cypress.Commands.add('validateError', (label, message) => {
    cy.get(`label[id=${label}]`).parent().contains(message)
})