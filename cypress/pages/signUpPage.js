import { faker } from "@faker-js/faker";

const elements = {
  email: 'input[type="email"]',
  firstName: 'input[placeholder="First name"]',
  lastName: 'input[placeholder="Last name"]',
  company: 'input[placeholder="Company name"]',
  size: 'input[placeholder="Team size"]',
  dropdown: '.el-select-dropdown__item',
  phone: 'input.iti__tel-input',
  btnStartTrial: '.signup-submit__button'
};

export default class SignUp {

  static fillSignUpForm() {
    cy.get(elements.email).type(faker.internet.email({ provider: 'Company.com' }));
    cy.get(elements.firstName).type(faker.person.firstName());
    cy.get(elements.lastName).type(faker.person.lastName());
    cy.get(elements.company).type(faker.company.name());
    cy.get(elements.size).click();
    cy.get(elements.dropdown).first().click();
    cy.get(elements.phone).first().type(faker.phone.number());
  }

  static assertSignUpPage(message) {
    cy.get('.text-center').should("contain", message);
    cy.get(elements.btnStartTrial).should("be.disabled");
  }


}