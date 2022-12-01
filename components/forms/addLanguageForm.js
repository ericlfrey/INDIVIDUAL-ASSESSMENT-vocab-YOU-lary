import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLanguageForm = (obj = {}) => {
  clearDom();
  const domString = `
    <h1>${obj.firebaseKey ? 'Edit Language' : 'Add a Language'}</h1>
    <form id="${obj.firebaseKey ? `update-language--${obj.firebaseKey}` : 'submit-language'}" class="mb-4">
      <div class="form-group">
        <label for="language">Language</label>
        <input type="text" class="form-control" id="languageInput" placeholder="Language" value="${obj.language || ''}" required>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="favoriteLanguage" ${obj.title ? 'checked' : ''}>
        <label class="form-check-label" for="favoriteLanguage">
       Favorite
        </label>
      </div>
      <div id="submitLanguageBtn"></div>
      <button type="submit" class="btn btn-primary mt-3">enter</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addLanguageForm;
