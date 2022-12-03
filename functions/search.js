import { getCommunityVocabData, getUserVocabData } from '../api/vocabData';
import cardsOnDOM from '../pages/cardsOnDOM';

const userSearch = (e, user) => {
  const usersearchBar = document.querySelector('#usersearchBar');
  if (e.keyCode === 13) {
    const searchValue = usersearchBar.value.toLowerCase();
    getUserVocabData(user).then((arr) => {
      const searchArr = arr.filter((item) => item.title.toLowerCase().includes(searchValue)
        || item.definition.toLowerCase().includes(searchValue)
        || item.author.toLowerCase().includes(searchValue));
      cardsOnDOM(searchArr, user.uid);
    });
    usersearchBar.value = '';
  }
};

const publicSearch = (e, user) => {
  const publicsearchBar = document.querySelector('#publicsearchBar');
  if (e.keyCode === 13) {
    const searchValue = publicsearchBar.value.toLowerCase();
    getCommunityVocabData(user).then((arr) => {
      const searchArr = arr.filter((item) => item.title.toLowerCase().includes(searchValue)
        || item.definition.toLowerCase().includes(searchValue)
        || item.author.toLowerCase().includes(searchValue));
      cardsOnDOM(searchArr, user.uid);
    });
    publicsearchBar.value = '';
  }
};

export { userSearch, publicSearch };
