import renderToDOM from '../../utils/renderToDom';

const searchBar = () => {
  const domString = `
  <input class="form-control form-control-sm" type="text" placeholder="Search Entries".form-control-sm example" id="searchBar">
  `;
  renderToDOM('#searchBarContainer', domString);
};

export default searchBar;
