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
    if (arr.length === 0) {
      domString += `
      <li><a class="dropdown-item" id="showAddLanguageFormFilterDrop" value="">Add Language</a></li>
      `;
    } else {
      arr.forEach((item) => {
        domString += `
        <li><a class="dropdown-item" id="filter--${item.language}" value="${item.language}">${item.language}</a></li>
        `;
      });
    }
    domString += '</ul>';
    renderToDOM('#filterDrop', domString);
  });
};

export default filterDrop;
