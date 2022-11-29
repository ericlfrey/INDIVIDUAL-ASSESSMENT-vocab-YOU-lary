import clearDOM from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addCardForm = () => {
  clearDOM();
  const domString = '<h1>Form</h1>';
  renderToDOM('#form-container', domString);
};
export default addCardForm;
