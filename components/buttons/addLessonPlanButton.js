import renderToDOM from '../../utils/renderToDom';

const addLessonPlanButton = () => {
  const domString = `
  <button class="btn grey-text add-card btn-sm" aria-current="page" id="showAddLessonForm">Lesson Plan</button>   
  `;
  renderToDOM('#addLessonPlanButton', domString);
};

export default addLessonPlanButton;
