import renderToDOM from '../../utils/renderToDom';

const addLanguageButton = (status) => {
  const domString = `
  <button class="btn btn-success add-card btn-sm" aria-current="page" id="showAddLanguageForm${status}">Add Language/Tech</button> 
  `;
  renderToDOM('#addLanguageButton', domString);
};

export default addLanguageButton;
