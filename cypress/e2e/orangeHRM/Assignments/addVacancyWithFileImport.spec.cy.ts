import LoginPage from "../../../support/pageObjects/resetPass";
import VacancyWithFileImport from "../../../support/helpers/VacancyWithFileImport";
import AddVacancyFile from "../../../support/pageObjects/VacancyWithFileImportPage";
import { add } from "cypress/types/lodash";
const loginObj: LoginPage = new LoginPage();
const addVacancyFile: AddVacancyFile = new AddVacancyFile();

describe("Add Employee  Page", () => {
  beforeEach(function () {
    cy.visitAndLogin(loginObj, "admin", "admin123");
  });

  it("Given The system has a vacancy record", () => {
    VacancyWithFileImport.VacancyWithFileImport().then((VacancyID) => {
      cy.visit(
        `https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addJobVacancy/${VacancyID}`
      );
      addVacancyFile.uploadVacancyFile("abeer");
    });
  });
});
