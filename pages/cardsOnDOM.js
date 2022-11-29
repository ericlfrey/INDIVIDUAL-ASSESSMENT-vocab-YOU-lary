import renderToDOM from '../utils/renderToDom';

const cardsOnDOM = (arr) => {
  let domString = `
    <h1>Card Title</h1>
    <div id="vocabCards"></div>
  `;
  arr.forEach((item) => {
    domString += `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
  `;
  });
  renderToDOM('#main', domString);
};

export default cardsOnDOM;
