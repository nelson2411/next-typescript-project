import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should mount the component", () => {
    cy.mount(<Navbar />);
  });
});
