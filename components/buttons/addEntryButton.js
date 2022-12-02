import renderToDOM from '../../utils/renderToDom';

const addEntryButton = () => {
  const domString = `
  <button class="btn grey-text add-card btn-sm" aria-current="page" id="showAddCardForm">Add Entry</button>   
  `;
  renderToDOM('#addEntryButton', domString);
};

export default addEntryButton;
