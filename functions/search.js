import { getUserVocabData } from '../api/vocabData';
import cardsOnDOM from '../pages/cardsOnDOM';

const search = (e, user) => {
  const searchBar = document.querySelector('#searchBar');
  if (e.keyCode === 13) {
    const searchValue = searchBar.value.toLowerCase();
    getUserVocabData(user).then((arr) => {
      const searchArr = arr.filter((item) => item.title.toLowerCase().includes(searchValue)
        || item.definition.toLowerCase().includes(searchValue));
      cardsOnDOM(searchArr, user.uid);
    });
    searchBar.value = '';
  }
};

export default search;
