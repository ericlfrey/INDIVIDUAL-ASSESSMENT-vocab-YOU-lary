import clearDOM from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLessonForm = (user, obj = {}) => {
  clearDOM();
  console.warn(user.displayName);
  const domString = `
  <div id="formFlex">
  <h1>Lesson Plans</h1>
    <form id="lessonPlanFom" class="mb-4">
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
      <button type="submit" class="btn btn-lg text-lg">
        Submit
      </button>
    </form>
    </div>
  `;
  renderToDOM('#form-container', domString);
};

export default addLessonForm;
