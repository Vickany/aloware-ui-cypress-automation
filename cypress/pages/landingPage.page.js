const elements = {
  mainBody: '#main-content-body',
  menus: {
    solutions: '.solution-menu',
    features: '#header-menu > ul > li:nth-child(2)',
    integration: '#header-menu > ul > li:nth-child(3)',
    compareUs: 'Compare Us',
    resources: 'Resources',
  },
  sideBarFeatures: '.feature-sidebar.desk-b >* li'
}

export default class LandingPage {
  static visit() {
    cy.visit(Cypress.config('baseUrl'))
  }

  static clickSolutionsMenu() {
    cy.get(elements.menus.solutions).click()
  }

  static clickFeaturesMenu() {
    cy.get(elements.menus.features).click()
  }

  static clickIntegrationsMenu() {
    cy.get(elements.menus.integration).click()
  }

  static assertIntegrationsPage(integrationText, trialText) {
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}integrations/`);
    cy.get(elements.mainBody).should("contain", integrationText);
  }

  static assertFeaturesPage(trialText) {
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}features/`);
    cy.get(elements.mainBody).contains(trialText).should("be.visible");
    cy.get(elements.sideBarFeatures).should("have.length", 11)
  }

  static assertSolutionMenu(demoText) {
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}solution/`);
    cy.get(elements.mainBody).should("contain", demoText)
  }

}