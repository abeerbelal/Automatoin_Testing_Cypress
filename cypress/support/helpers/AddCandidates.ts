import candidatInit from "../API/init/CandidetInit";

export const URLs = {
  candidates:
    "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates",
};
export default class AddCandidates {
  AddCandidates(): Cypress.Chainable<number> {
    return cy
      .request({
        method: "POST",
        url: URLs.candidates,
        body: candidatInit.initCandidate(),
      })
      .then((response) => {
        return response.body.data.id;
      });
  }

  ShortListedCandidate(candidteID: number) {
    cy.visit(
      `https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidteID}`
    );
    cy.request({
      method: "PUT",
      url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${candidteID}/shortlist`,
      body: {
        note: null,
      },
    });
  }

  SchedualINterview(candidteID: number) {
    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/changeCandidateVacancyStatus?candidateId=${candidteID}&selectedAction=4`)
  }
  verfiySchedualIntrview(candidteID: number) {
   // cy.wait(4000)
    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidteID}`)
  }
}
