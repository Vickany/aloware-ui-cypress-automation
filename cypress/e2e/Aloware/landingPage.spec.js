import LandingPage from "../../pages/landingPage.page";
import SignUp from "../../pages/signUpPage";
import message from "../../fixtures/dataText.json";

describe("Validate landing page scenarios", () => {
  beforeEach("Visit landing page", () => {
    LandingPage.visit();
  });

  it("Verify that main navigation links are working", () => {
    LandingPage.clickSolutionsMenu();
    LandingPage.assertSolutionMenu(message.demoWarning);
    LandingPage.clickFeaturesMenu();
    LandingPage.assertFeaturesPage(message.freeTrialWarning);
    LandingPage.clickIntegrationsMenu();
    LandingPage.assertIntegrationsPage(message.integrationsPageText);
  });

  it("Validate that request free trial page is loading", () => {
    LandingPage.startFreeTrial(message.freeTrialWarning);
    //only filling in to demonstration purpose
    SignUp.fillSignUpForm();
    SignUp.assertSignUpPage(message.welcomeMessage);
  });

  it("Verify available plans for the AI bot", () => {
    LandingPage.clickAIMenu();
    LandingPage.assertAIbotPage();
    LandingPage.assertAiPricing(message.plan, message.engagements, message.monthlyPayment, message.annualPayment);
  });


});