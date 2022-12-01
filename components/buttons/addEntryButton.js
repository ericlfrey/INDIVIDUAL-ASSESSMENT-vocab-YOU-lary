import renderToDOM from '../../utils/renderToDom';

const addEntryButton = (status) => {
  const domString = `
  <button class="btn btn-success add-card btn-sm" aria-current="page" id="showAddCardForm${status}">Add Entry</button>   
  `;
  renderToDOM('#addEntryButton', domString);
};

export default addEntryButton;
