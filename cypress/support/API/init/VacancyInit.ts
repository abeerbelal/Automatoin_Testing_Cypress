import { VacancyPayload } from "../payload/VacancyPayload";
export default class VacancInit {
  static initVacancy(): VacancyPayload {
    let vacancyPayload: VacancyPayload = {
      name: "test",
      jobTitleId: 2,
      employeeId: 22,
      numOfPositions: null,
      description: "",
      status: true,
      isPublished: true,
    };
    return vacancyPayload;
  }
}
