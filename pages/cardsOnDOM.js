import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const cardsOnDOM = (arr, uid) => {
  clearDOM();
  const domString = `
    <h1>Card Title</h1>
    <div id="vocabCards"></div>
  `;
  renderToDOM('#main', domString);
  let cardString = '';
  arr.forEach((item) => {
    cardString += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.definition}</p>
    <div class="book-icons">
      <i class="btn btn-success"   id="view-book-btn--${item.firebaseKey}">
        <span><i class= "fas fa-eye"></i></span>
      </i>
      ${item.uid === uid ? `
      <i id="edit-book-btn--${item.firebaseKey}"  class="btn btn-info">
        <span><i class= "fas fa-edit"></i></span>
      </i>
      <i id="delete-book-btn--${item.firebaseKey}"  class="btn btn-danger">
        <span><i class= "fas fa-trash-alt"></i></span>
      </i>` : ''}
    </div>
  </div>
</div>
  `;
    renderToDOM('#vocabCards', cardString);
  });
};

export default cardsOnDOM;
