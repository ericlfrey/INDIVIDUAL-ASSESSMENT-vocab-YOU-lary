import renderToDOM from '../../utils/renderToDom';

const sortDrop = () => {
  const domString = `
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Sort
    </a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" id="sortAlpha" value="">Alphabetically</a></li>
      <li><a class="dropdown-item" id="sortNewest" value="">Newest</a></li>
      <li><a class="dropdown-item" id="sortOldest" value="">Oldest</a></li>
    </ul>
  `;
  renderToDOM('#sortDrop', domString);
};

export default sortDrop;