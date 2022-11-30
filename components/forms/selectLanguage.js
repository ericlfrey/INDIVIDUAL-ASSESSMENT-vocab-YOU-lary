import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (obj = {}) => {
  const domString = `<label for="language">Select Language/Tech</label>
    <select class="form-control" id="category" required>
    <option value="select">Select Language/Tech</option>
    <option value="JavaScript" >JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
    <option value="Tech">Tech</option>
    `;
  renderToDOM('#select-category', domString);
  const select = document.querySelector('#category');
  if (obj.category) {
    select.value = obj.category;
  } else {
    select.value = 'select';
  }
};

export default selectLanguage;
