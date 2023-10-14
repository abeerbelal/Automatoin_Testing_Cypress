export interface CreateCandidatePayload {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  comment: string;
  consentToKeepData: boolean;
  contactNumber: string;
  dateOfApplication: string;
  keywords: string;
  vacancyId:number;
  //failOnStatusCode: boolean
}
