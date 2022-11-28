import SearchBar from "./SearchBar";

// Create a test for search bar component

describe("SearchBar", () => {
  it("should mount the component", () => {
    cy.mount(<SearchBar />);
  });
});
