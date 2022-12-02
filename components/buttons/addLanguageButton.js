import renderToDOM from '../../utils/renderToDom';

const addLanguageButton = () => {
  const domString = `
  <button class="btn grey-text add-card btn-sm" aria-current="page" id="showAddLanguageForm">Add Language/Tech</button> 
  `;
  renderToDOM('#addLanguageButton', domString);
};

export default addLanguageButton;
