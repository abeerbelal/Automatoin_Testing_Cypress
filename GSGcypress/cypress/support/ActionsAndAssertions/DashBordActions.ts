class DashBordActions {
    getQuickCard() {
        return cy.contains("p", "Time at Work").parents().eq(3);
    }
}
export default DashBordActions;