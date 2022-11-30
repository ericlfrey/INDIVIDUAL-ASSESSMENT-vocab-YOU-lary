import renderToDOM from '../../utils/renderToDom';

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
        <li class="nav-item">
          <button class="btn btn-success add-card" aria-current="page" id="showAddCardForm">Add Entry</button>    
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Filter by Language/Tech
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" id="select--JavaScript" value="JavaScript">JavaScript</a></li>
            <li><a class="dropdown-item" id="select--CSS" value="CSS">CSS</a></li>
            <li><a class="dropdown-item" id="select--HTML" value="HTML">HTML</a></li>
            <li><a class="dropdown-item" id="select--Tech" value="Tech">Tech</a></li>
          </ul>
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
};

export default navBar;
