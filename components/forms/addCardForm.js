import clearDOM from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';
import selectLanguage from './selectLanguage';

const addCardForm = (uid, obj = {}) => {
  clearDOM();
  const domString = `
  <h1>${obj.firebaseKey ? 'Edit Entry Details' : 'Add New Entry'}</h1>
    <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="title">Entry Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group" id="select-category"></div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="favorite" ${obj.favorite ? 'checked' : ''}>
        <label class="form-check-label" for="favorite">
       Favorite
        </label>        
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="public" ${obj.public ? 'checked' : ''}>
        <label class="form-check-label" for="public">
        Public
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Submit Entry
      </button>
    </form>
  `;
  renderToDOM('#form-container', domString);
  selectLanguage(obj);
};
export default addCardForm;
