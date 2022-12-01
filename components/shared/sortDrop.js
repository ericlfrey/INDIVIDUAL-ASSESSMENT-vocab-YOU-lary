import renderToDOM from '../../utils/renderToDom';

const sortDrop = (status) => {
  const domString = `
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Sort
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" id="sortAlpha${status}" value="">Alphabetically</a></li>
      <li><a class="dropdown-item" id="sortNewest${status}" value="">Newest</a></li>
      <li><a class="dropdown-item" id="sortOldest${status}" value="">Oldest</a></li>
    </ul>
  `;
  renderToDOM('#sortDrop', domString);
};

export default sortDrop;
