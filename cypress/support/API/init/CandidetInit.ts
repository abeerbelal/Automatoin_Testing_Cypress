import { CreateCandidatePayload } from "../payload/CandidetPayload";

export default class candidatInit {
  static initCandidate(): CreateCandidatePayload {
    let createCandidatePayload: CreateCandidatePayload = {
      firstName: "abeerrr",
      lastName: "hanayshehhh",
      middleName: "belall",
      email: "abeertt@g.com",
      comment: "",
      consentToKeepData: false,
      contactNumber: "",
      dateOfApplication: "2023-10-14",
      keywords: "",
      vacancyId: 4,
    };
    return createCandidatePayload;
  }
}
