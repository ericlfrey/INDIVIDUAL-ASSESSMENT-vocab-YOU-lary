import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="btn btn-success nav-link active add-card" aria-current="page" id="showAddCardForm">Add Entry</a>
        </li>
      </ul>
      <span class="navbar-text">
      <div id="logout-button"></div>
      </span>
    </div>
  </div>
</nav>
  `;

  renderToDOM('#navBar', domString);
};

export default navBar;
