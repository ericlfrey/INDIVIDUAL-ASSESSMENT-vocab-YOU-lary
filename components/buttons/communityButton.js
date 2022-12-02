import renderToDOM from '../../utils/renderToDom';

const communityButton = (status) => {
  if (status === 'user') {
    const domString = `
  <button class="btn add-card btn-sm grey-text" aria-current="page" id="communityBtn">Community</button>  
  `;
    renderToDOM('#communityBtnContainer', domString);
  }
};

export default communityButton;
