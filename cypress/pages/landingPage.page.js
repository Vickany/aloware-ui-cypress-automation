const elements = {
  mainBody: '#main-content-body',
  menus: {
    solutions: '.solution-menu',
    features: '#header-menu > ul > li:nth-child(2)',
    integration: '#header-menu > ul > li:nth-child(3)',
    aiBot: '#header-menu > ul > li:last-child'
  },
  sideBarFeatures: '.feature-sidebar.desk-b >* li',
  btnCheckPricing: '[title="AI Bot Pricing"]'
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

  static clickAIMenu() {
    cy.get(elements.menus.aiBot).click()

  }

  static startFreeTrial(freeTrial) {
    cy.get(elements.mainBody).contains(freeTrial).click()
  }

  static assertIntegrationsPage(integrationText) {
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

  static assertAIbotPage() {
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}ai-bot/`);
  }

  static assertAiPricing(plan, engagements, monthlyPay, annualPay) {
    cy.get(elements.btnCheckPricing).click()
    cy.get('.wp-block-table >* tbody').should("contain", plan)
      .and("contain", engagements)
      .and("contain", monthlyPay)
      .and("contain", annualPay)
  }


}