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
      <div class="fav-star" style="height: 26px;">
        ${item.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : '<span></span>'}
      </div>
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text definition">${item.definition}</p>
    <div class="book-icons">
      <i class="btn btn-success"   id="view-card-btn--${item.firebaseKey}">
        <span><i class= "fas fa-eye"></i></span>
      </i>
      ${item.uid === uid ? `
      <i id="edit-card-btn--${item.firebaseKey}"  class="btn btn-info">
        <span><i class= "fas fa-edit"></i></span>
      </i>
      <i id="delete-card-btn--${item.firebaseKey}"  class="btn btn-danger">
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
