import renderToDOM from '../../utils/renderToDom';

const filterDrop = () => {
  const domString = `
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Language/Tech
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" id="filter--JavaScript" value="JavaScript">JavaScript</a></li>
      <li><a class="dropdown-item" id="filter--CSS" value="CSS">CSS</a></li>
      <li><a class="dropdown-item" id="filter--HTML" value="HTML">HTML</a></li>
      <li><a class="dropdown-item" id="filter--Tech" value="Tech">Tech</a></li>
    </ul>
  `;
  renderToDOM('#filterDrop', domString);
};

export default filterDrop;
