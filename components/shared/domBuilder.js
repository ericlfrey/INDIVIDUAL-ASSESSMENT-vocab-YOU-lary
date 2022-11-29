import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="navBar"></div>
    <div id="main"></div>
    <div id="form-container"></div>
  `;
  renderToDOM('#app', domString);
};

export default domBuilder;
