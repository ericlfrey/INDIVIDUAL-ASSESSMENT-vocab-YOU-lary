import renderToDOM from '../../utils/renderToDom';
import addEntryButton from '../buttons/addEntryButton';
import addLanguageButton from '../buttons/addLanguageButton';
import filterDrop from './filterDrop';
import searchBar from './searchBar';
import sortDrop from './sortDrop';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id="logo">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav" id="navbarNav">
        <li class="nav-item" id="addEntryButton"> 
        </li>
        <li class="nav-item" id="addLanguageButton"> 
        </li>
        <li class="nav-item dropdown" id="filterDrop">
        </li>
        <li class="nav-item dropdown" id="sortDrop">
        </li>
        <li class="nav-item" id="searchBarContainer">
        </li>
        <li class="nav-item">
        <span class="navbar-text">
          <div id="logout-button"></div>
        </span>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `;

  renderToDOM('#navBar', domString);
  addEntryButton();
  sortDrop();
  filterDrop();
  searchBar();
  addLanguageButton();
};

export default navBar;
