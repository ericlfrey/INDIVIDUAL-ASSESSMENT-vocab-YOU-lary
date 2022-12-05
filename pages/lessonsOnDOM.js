import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const lessonsOnDOM = (arr, user) => {
  console.warn('lessons');
  clearDOM();
  if (arr.length === 0) {
    const domString = `
    <h1>No Lessons</h1>
    `;
    renderToDOM('#main', domString);
  } else {
    const domString = `
  <h1>${user.displayName}'s Lessons</h1>
  <div id="viewLessonCards"></div>
  `;
    renderToDOM('#main', domString);
    let cardString = '';
    arr.forEach((item) => {
      cardString += `
    <div class="card" style="">
    <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <div class="lesson-icons">
    <hr>
    <i id="view-lesson-btn--${item.firebaseKey}"  class="btn link-success btn-sm round">
        <span><i class= "fas fa-eye"></i></span>
      </i>
      <i id="edit-lesson-btn--${item.firebaseKey}"  class="btn link-info btn-sm round">
        <span><i class= "fas fa-edit"></i></span>
      </i>
      <i id="delete-lesson-btn--${item.firebaseKey}"  class="btn link-danger btn-sm round">
        <span><i class= "fas fa-trash-alt"></i></span>
      </i>
    </div>
  </div>
</div>
    `;
    });
    renderToDOM('#viewLessonCards', cardString);
  }
};

export default lessonsOnDOM;
