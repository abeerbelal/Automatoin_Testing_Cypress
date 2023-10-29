import TimesheetsInit from "../API/init/TimesheetsInit";
export const URLs = {
  submit: `demo.orangehrmlive.com/web/index.php/api/v2/time/timesheets`,
};

export default class Timesheets {
  static getTimeSheetID(): Cypress.Chainable<number> {
    return cy
      .request({
        method: "GET",
        url: `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/time/timesheets/default?date=2023-10-23`,
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        console.log(response.body.data.id);
        return response.body.data.id;
      });
  }
  static editTimesheets(timeSheetId: number) {
    return cy
      .request({
        method: "PUT",
        url: `/index.php/api/v2/time/timesheets/${timeSheetId}/entries`,
        body: TimesheetsInit.TimeSheetBoady(),
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  }

  static SubmitTimesheets(timeSheetId: number) {
    return cy
      .request({
        method: "PUT",
        url: `${URLs.submit}/${timeSheetId}`,
        body: {
          action: "SUBMIT",
        },
      })
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  }
}
