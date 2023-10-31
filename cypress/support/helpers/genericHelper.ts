export default class Generic {
  static ramdomNumberFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  static getRandomString = (world: string) => {
    return `${world}${this.ramdomNumberFromInterval(1, 200)}`;
  };

  static GenericSearchUser = (...searchInfo: any[]) => {
    let found = false;
    cy.get(".oxd-table-body")
      .find(".oxd-table-row")
      .each((row) => {
        let matched = false;
        Cypress.$(row)
          .find("td")
          .each((cellIndex, cell) => {
            if (
              searchInfo[cellIndex] &&
              !Cypress.$(cell).text().includes(searchInfo[cellIndex])
            ) {
              matched = false;
            }
          });
        if (matched) {
          found = true;
          return false; // Exit the outer loop early if a match is found
        }
      })
      .then(() => {
        if (found) {
          cy.log("Yes");
        } else {
          cy.log("No");
        }
      });
  };
}
