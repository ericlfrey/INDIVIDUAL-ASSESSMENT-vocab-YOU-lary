import { getLanguages } from '../../api/languageData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (user, obj = {}) => {
  getLanguages(user).then((arr) => {
    let domString = `
  <label for="language">Select Language/Tech</label>
    <select class="form-control" id="category" required>
    <option value="select">Select Language/Tech</option>`;
    arr.forEach((item) => {
      domString += `
      <option value="${item.language}" >${item.language}</option>
      `;
    });
    domString += '</select>';
    renderToDOM('#select-category', domString);
    const select = document.querySelector('#category');
    if (obj.category) {
      select.value = obj.category;
    } else {
      select.value = 'select';
    }
  });
};

export default selectLanguage;
