import LandingPage from "../../pages/landingPage.page";
import message from "../../fixtures/dataText.json"

describe("Validate Menus navigation", () => {
  beforeEach("Visit landing page", () => {
    LandingPage.visit()
  })

  it("Verify that all the navigation links are working", () => {
    LandingPage.clickSolutionsMenu();
    LandingPage.assertSolutionMenu(message.demoWarning);
    LandingPage.clickFeaturesMenu();
    LandingPage.assertFeaturesPage(message.freeTrialWarning)
    LandingPage.clickIntegrationsMenu();
    LandingPage.assertIntegrationsPage(message.integrationsPageText, message.freeTrialWarning)
  });

  it("Validate that request free trial is working", () => {


  });

  it("Verify available plans for the AI bot", () => {

  });


})