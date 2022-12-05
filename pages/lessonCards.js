import { getUserVocabData } from '../api/vocabData';
import renderToDOM from '../utils/renderToDom';

const lessonCards = (user) => {
  let domString = '';
  getUserVocabData(user).then((arr) => {
    arr.forEach((item) => {
      domString += `
      <div class="card">
        <div class="card-body">
          <div class="form-check">
            <input class="form-check-input lesson-check" type="checkbox" value="" id="lessonCheck--${item.firebaseKey}">
          </div>
          <p class="card-title card-text-sm">Title: ${item.title}</p>
          <p class="card-subtitle mb-2 text-muted card-text-sm">Language/Tech: ${item.category}</p>
        </div>
      </div>
  `;
    });
    renderToDOM('#lessonCards', domString);
  });
};

export default lessonCards;
