import { getCommunityLanguages, getLanguages } from '../../api/languageData';
import renderToDOM from '../../utils/renderToDom';

const filterDrop = (user, status) => {
  getLanguages(user).then((arr) => {
    let domString = `
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Filter
    </a>
    <ul class="dropdown-menu">
    `;
    if (arr.length === 0) {
      domString += `
      <li><a class="dropdown-item" id="showAddLanguageFormFilterDrop" value="">Add Language</a></li>
      `;
    } else if (status === 'user') {
      arr.forEach((item) => {
        domString += `
        <li><a class="dropdown-item" id="${status}filter--${item.language}" value="${item.language}">${item.language}</a></li>
        `;
      });
    } else if (status === 'public') {
      getCommunityLanguages(user).then((langs) => {
        domString = `
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Filter
          </a>
        <ul class="dropdown-menu">
         `;
        langs.forEach((item) => {
          domString += `
          <li><a class="dropdown-item" id="${status}filter--${item}" value="${item}">${item}</a></li>
          `;
        });
        domString += '</ul>';
        renderToDOM('#filterDrop', domString);
      });
    }
    domString += '</ul>';
    renderToDOM('#filterDrop', domString);
  });
};

export default filterDrop;
