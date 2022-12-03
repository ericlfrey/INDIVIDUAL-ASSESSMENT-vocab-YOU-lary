import renderToDOM from '../../utils/renderToDom';

const addDrop = (status) => {
  console.warn(status);
  const domString = `
    <a class="nav-link dropdown-toggle" id="navAdd" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Add
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" id="addEntryButton" value="">Entry</a></li>
      <li><a class="dropdown-item" id="addLanguageButton" value="">Language/Tech</a></li>
      <li><a class="dropdown-item" id="addLessonPlanButton" value="">Lesson</a></li>
    </ul>
  `;
  renderToDOM('#addDrop', domString);
};

export default addDrop;
