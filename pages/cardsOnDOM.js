import renderToDOM from '../utils/renderToDom';

const cardsOnDOM = (arr, uid) => {
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
    <a href="#" class="card-link">Edit</a>
    <a href="#" class="card-link">Delete</a>
  </div>
</div>
  `;
  });
  renderToDOM('#main', domString);
};

export default cardsOnDOM;
