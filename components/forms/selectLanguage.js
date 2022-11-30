import renderToDOM from '../../utils/renderToDom';

const selectLanguage = () => {
  const domString = `<label for="language">Select Language/Tech</label>
    <select class="form-control" id="category" required>
    <option value="">Select Language/Tech</option>
    <option value="JavaScript">JavaScript</option>
    <option value="CSS">CSS</option>
    <option value="HTML">HTML</option>
    <option value="Tech">Tech</option>
    `;
  renderToDOM('#select-category', domString);
};

export default selectLanguage;
