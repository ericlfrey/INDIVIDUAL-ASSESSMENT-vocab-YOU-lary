import renderToDOM from '../../utils/renderToDom';
import addEntryButton from '../buttons/addEntryButton';
import filterDrop from './filterDrop';
import searchBar from './searchBar';
import sortDrop from './sortDrop';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id="logo">LOGO</a>
    <div id="addEntryButton"></div>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav" id="navbarNav">
        <li class="nav-item">
          <button class="btn btn-success add-card" aria-current="page" id="showAddCardForm">Add Entry</button>    
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
};

export default navBar;
