import addUser from "../../support/API/helpers/SinupHelperEnhancment";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

describe("SingnUp Login", { tags: "@smoke" }, () => {
  it("SignUp: User Should be able to create new user", () => {
    addUser.addNewuserViaAPI().then((resolve) => {
      cy.log(`${resolve}`);
    });
  });
});
