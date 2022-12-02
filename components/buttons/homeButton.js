import renderToDOM from '../../utils/renderToDom';

const homeButton = (status) => {
  if (status === 'public') {
    const domString = `
  <button class="btn grey-text add-card btn-sm" aria-current="page" id="homeBtn">Home</button>  
  `;
    renderToDOM('#communityBtnContainer', domString);
  }
};

export default homeButton;
