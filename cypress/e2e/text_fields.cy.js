import { tests } from '../fixtures/tests.json'

describe('Tests Input Fields', () => {
    beforeEach(() => {
        cy.visit('/mortgage-calculator/')
    })
    tests.home_price.forEach((test) => {
        it(`Tests the home price field with ${test.title}`, () => {
            if(test.value) {
                cy.get('input[id="homePrice"]').clear().type(test.value)
            } else {
                cy.get('input[id="homePrice"]').clear()
            }
            cy.contains('Home price').click()
            if(test.error_message) {
                cy.validateError('label_1', test.error_message)
            }
        })
    })
    tests.down_payment.forEach((test) => {
        it(`Tests the down payment field with ${test.title}`, () => {
            cy.get('input[id="form-1_downPayment"]').clear().type(test.value)
            cy.contains('Home price').click()
            if(test.error_message) {
                cy.validateError('label_2', test.error_message)
            }
        })
    })
})