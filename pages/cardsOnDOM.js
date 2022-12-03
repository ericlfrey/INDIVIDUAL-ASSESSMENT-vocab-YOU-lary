import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const cardsOnDOM = (arr, uid) => {
  clearDOM();
  if (arr.length === 0) {
    const domString = `
    <div class="heading">
      <h1>No Entries</h1>
    </div>
    `;
    renderToDOM('#main', domString);
  } else {
    const domString = `
    <div class="heading">
      <h1>Vocab-YOU-Lary</h1>
    </div>
    <div id="vocabCards"></div>
  `;
    renderToDOM('#main', domString);
    let cardString = '';
    arr.forEach((item) => {
      cardString += `
  <div class="card" style="">
    <div class="card-body">
      <div class="card-icons" style="height: 26px;">
        ${item.favorite ? '<span class="heart"><i class="fa fa-heart" aria-hidden="true"></i></span>' : '<span></span>'}
        ${item.public ? '<span class="lock"><i class="fa fa-lock-open" aria-hidden="true"></i></span>' : '<span class="lock"><i class="fa fa-lock" aria-hidden="true"></i></span>'}
      </div>
    <h5 class="card-title">${item.title}</h5>
    <h6 class="card-title">${item.category}</h6>
    <p class="card-text definition">${item.definition}</p>
    <div class="book-icons">
      ${item.uid === uid ? `
      <p class="author">Author: ${item.author}</p>
      <hr>
      <i id="edit-card-btn--${item.firebaseKey}"  class="btn link-info btn-sm round">
        <span><i class= "fas fa-edit"></i></span>
      </i>
      <i id="delete-card-btn--${item.firebaseKey}"  class="btn link-danger btn-sm round">
        <span><i class= "fas fa-trash-alt"></i></span>
      </i>` : `
      <p class="author">Author: ${item.author}</p>
      <hr>
      <i id="add-card-btn--${item.firebaseKey}"  class="btn link-primary btn-sm round">
        <span><i class= "fas fa-plus"></i></span>
      </i>
      `}
    </div>
  </div>
</div>
  `;
      renderToDOM('#vocabCards', cardString);
    });
  }
};

export default cardsOnDOM;
