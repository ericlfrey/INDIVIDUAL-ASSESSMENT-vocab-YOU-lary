import renderToDOM from '../../utils/renderToDom';

const lessonPlanButton = () => {
  const domString = `
  <button class="btn grey-text add-card btn-sm" aria-current="page" id="lessonPlanButton">Lesson Plans</button> 
  `;
  renderToDOM('#lessonPlanButton', domString);
};

export default lessonPlanButton;
