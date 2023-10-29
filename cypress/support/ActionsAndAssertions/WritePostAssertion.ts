class writePostAssertion {
  elements = {
    post: () => cy.get("p.orangehrm-buzz-post-body-text"),
  };
  writePost(data: string) {
    this.elements.post().should("contain", data);
  }
}
export default writePostAssertion;
