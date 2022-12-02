import renderToDOM from '../../utils/renderToDom';

const communityButton = (status) => {
  if (status === 'user') {
    const domString = `
  <button class="btn btn-secondary add-card btn-sm" aria-current="page" id="communityBtn">Community</button>  
  `;
    renderToDOM('#communityBtnContainer', domString);
  }
};

export default communityButton;
