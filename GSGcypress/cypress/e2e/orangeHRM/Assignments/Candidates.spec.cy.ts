import LoginPage from "../../../support/pageObjects/resetPass";
import Candidates from "./../../../support/pageObjects/Candidates";
import CountCandidatUsers from "../../../support/helpers/Candidates";
import CandidatesAssertion from "../../../support/ActionsAndAssertions/AssertionCandidates";
import AddCandidates from "../../../support/helpers/AddCandidates";
import CandidatesSchedualInterview from "../../../support/pageObjects/AddCandidates";
import StatusSchdualInterviewAssertion from "../../../support/ActionsAndAssertions/AssertionSchedualInterview";
const loginObj: LoginPage = new LoginPage();
const Candidate: Candidates = new Candidates();
const assert: CandidatesAssertion = new CandidatesAssertion();
const addCandidte: AddCandidates = new AddCandidates();
const count: number = 0;
const SchedualInterview: CandidatesSchedualInterview =
  new CandidatesSchedualInterview();
const assertSchdual: StatusSchdualInterviewAssertion =
  new StatusSchdualInterviewAssertion();

describe("verify Recruitment", () => {
  beforeEach(function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    loginObj.login("admin", "admin123");
  });

  it("verify number of rows", () => {
    Candidate.selectRecrutment();
    CountCandidatUsers.getTotalFromAPI().then((total) => {
      // Assertion for the total value
      expect(total).to.exist;
      cy.log(`Total number of candidates: ${total}`);
      Candidate.countRows();
      assert.assertNumberOfRows(total);
    });
  });

  it.only('The candidate status should be "Interview Scheduled', () => {
    addCandidte.AddCandidates().then((id) => {
      // cy.log(id);
      addCandidte.ShortListedCandidate(id);
      addCandidte.SchedualINterview(id);
      SchedualInterview.MakeSchedualInterview();
      addCandidte.verfiySchedualIntrview(id);
      cy.wait(3000);
      assertSchdual.assertStatusSchdualInterview();
    });
  });
});
