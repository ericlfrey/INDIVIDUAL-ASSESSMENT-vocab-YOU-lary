import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="navBar"></div>
    <div id="main"></div>
  `;
  renderToDOM('#app', domString);
};

export default domBuilder;
