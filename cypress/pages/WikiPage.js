class wikiSearchPage {
    elements = {
      searchInput: () => cy.get("#searchInput"),
      searchBtn: () => cy.get("#searchButton"),
    };
  
    typeText(Text) {
      this.elements.searchInput().type(Text);
    }
   
    clickSearch() {
      this.elements.searchBtn().click();
    }
  }
  
  module.exports = new wikiSearchPage();