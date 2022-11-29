import clearDOM from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const cardsOnDOM = (arr, uid) => {
  clearDOM();
  let domString = `
    <h1>Card Title</h1>
    <div id="vocabCards"></div>
  `;
  console.warn(uid);
  arr.forEach((item) => {
    domString += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.definition}</p>
    <div>
    ${item.uid === uid ? `
    <a href="#" class="card-link" id="cardEdit--${item.firebaseKey}">Edit</a>
    <a href="#" class="card-link" id="cardDelete--${item.firebaseKey}">Delete</a>` : ''}
    </div>
  </div>
</div>
  `;
  });
  renderToDOM('#main', domString);
};

export default cardsOnDOM;
