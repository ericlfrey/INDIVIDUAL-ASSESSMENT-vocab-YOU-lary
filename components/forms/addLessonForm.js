import lessonCards from '../../pages/lessonCards';
import clearDOM from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addLessonForm = (user, obj = {}) => {
  clearDOM();
  const domString = `
  <div class="form-flex">
  <h1> Add a New Lesson Plan</h1>
    <form id="lessonPlanForm" class="mb-4">
      <div class="form-group">
        <label for="lessonName">Lesson Plan Name</label>
        <input type="text" class="form-control" id="lessonName" aria-describedby="lessonName" placeholder="Lesson Plan Name" value="${obj.title || ''}" required>
      </div>
      <div class="form-group" id="lessonCards"></div>
      <button type="submit" class="btn btn-lg text-lg">
        Submit
      </button>
    </form>
    </div>
  `;
  renderToDOM('#form-container', domString);
  lessonCards(user);
};

export default addLessonForm;
