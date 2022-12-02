import renderToDOM from '../../utils/renderToDom';

const addEntryButton = () => {
  const domString = `
  <button class="btn btn-secondary add-card btn-sm" aria-current="page" id="showAddCardForm">Add Entry</button>   
  `;
  renderToDOM('#addEntryButton', domString);
};

export default addEntryButton;
