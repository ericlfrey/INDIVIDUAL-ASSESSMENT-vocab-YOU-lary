import renderToDOM from '../../utils/renderToDom';

const communityButton = () => {
  const domString = `
  <button class="btn btn-success add-card btn-sm" aria-current="page" id="communityBtn">Community</button>  
  `;
  renderToDOM('#communityBtnContainer', domString);
};

export default communityButton;
