import VacancInit from "../API/init/VacancyInit";
export const URLs = {
  vacancy:
    "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/vacancies",
};

export default class VacancyWithFileImport {
  static VacancyWithFileImport(): Cypress.Chainable<number> {
    return cy
      .request({
        method: "POST",
        url: URLs.vacancy,
        body: VacancInit.initVacancy(),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        const VacancyId = response.body.data.id;
        console.log(VacancyId);
        return VacancyId;
      });
  }
}
