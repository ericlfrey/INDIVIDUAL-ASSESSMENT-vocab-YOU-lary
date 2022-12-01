import { getLanguages } from '../../api/languageData';
import renderToDOM from '../../utils/renderToDom';

const filterDrop = (user) => {
  getLanguages(user).then((arr) => {
    let domString = `
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Language/Tech
    </a>
    <ul class="dropdown-menu">
    `;
    arr.forEach((item) => {
      domString += `
      <li><a class="dropdown-item" id="filter--${item.language}" value="${item.language}">${item.language}</a></li>
      `;
    });
    domString += '</ul>';
    renderToDOM('#filterDrop', domString);
  });
};

export default filterDrop;

// <li><a class="dropdown-item" id="filter--JavaScript" value="JavaScript">JavaScript</a></li>
// <li><a class="dropdown-item" id="filter--CSS" value="CSS">CSS</a></li>
// <li><a class="dropdown-item" id="filter--HTML" value="HTML">HTML</a></li>
// <li><a class="dropdown-item" id="filter--Tech" value="Tech">Tech</a></li>
