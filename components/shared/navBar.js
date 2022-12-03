import renderToDOM from '../../utils/renderToDom';
import addEntryButton from '../buttons/addEntryButton';
import addLanguageButton from '../buttons/addLanguageButton';
import communityButton from '../buttons/communityButton';
import homeButton from '../buttons/homeButton';
import filterDrop from './filterDrop';
import searchBar from './searchBar';
import sortDrop from './sortDrop';
import lessonPlanButton from '../buttons/lessonPlanButton';
import addDrop from './addDrop';
import addLessonPlanButton from '../buttons/addLessonPlanButton';

const navBar = (user, status) => {
  const domString = `
  <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" id="logo">
      <i class="fa fa-book logo"></i>
      <i class="fa fa-pen-nib logo">LOGO</i>
      <i class="fa fa-house-user logo"></i>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav" id="navbarNav">
        <li class="nav-item" id="communityBtnContainer"> 
        </li>
        <li class="nav-item dropdown" id="addDrop">
        </li>
        <li class="nav-item" id="lessonPlanButton"> 
        </li>        
        <li class="nav-item dropdown" id="filterDrop">
        </li>
        <li class="nav-item dropdown" id="sortDrop">
        </li>
        <li class="nav-item" id="searchBarContainer">
        </li>
        <li class="nav-item" id="logout-button">
        </span>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `;

  renderToDOM('#navBar', domString);
  homeButton(status);
  communityButton(status);
  sortDrop(status);
  filterDrop(user, status);
  searchBar(status);
  if (status === 'user') {
    addDrop(status);
    addLanguageButton();
    addEntryButton();
    addLessonPlanButton();
    lessonPlanButton();
  }
};

export default navBar;
