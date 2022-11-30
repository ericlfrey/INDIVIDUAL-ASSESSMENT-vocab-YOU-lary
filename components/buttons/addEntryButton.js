import renderToDOM from '../../utils/renderToDom';

const addEntryButton = () => {
  const domString = `
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  `;
  renderToDOM('#addEntryButton', domString);
};

export default addEntryButton;
