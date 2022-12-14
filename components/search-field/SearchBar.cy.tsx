import SearchBar from './SearchBar';

// Create a test for search bar component

describe('SearchBar', () => {
  it('should mount the component', () => {
    // component must have props
    cy.mount(
      <SearchBar
        onSearch=''
        onTermChange={() => {
          // do something
        }}
      />,
    );
  });
});
