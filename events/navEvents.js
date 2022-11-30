import { getVocabData } from '../api/vocabData';
import addCardForm from '../components/forms/addCardForm';
import cardsOnDOM from '../pages/cardsOnDOM';
import { signOut } from '../utils/auth';

const navEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  document.querySelector('#navBar').addEventListener('click', (e) => {
    // SHOW ALL CARDS
    if (e.target.id === 'logo') {
      getVocabData().then((arr) => {
        cardsOnDOM(arr, user.uid);
      });
    }
    // ADD NEW CARD
    if (e.target.id === 'showAddCardForm') {
      addCardForm(user);
    }
    // FILTER CARDS
    if (e.target.id.includes('filter')) {
      const [, language] = e.target.id.split('--');
      getVocabData().then((arr) => {
        const filteredArr = arr.filter((item) => item.category === language);
        cardsOnDOM(filteredArr, user.uid);
      });
    }
    // SORT CARDS
    if (e.target.id.includes('sort')) {
      getVocabData().then((arr) => {
        // ALPHABETICALLY
        if (e.target.id === 'sortAlpha') {
          const titleSort = arr.sort((a, b) => a.title.localeCompare(b.title));
          cardsOnDOM(titleSort, user.uid);
        }
        // NEWEST-OLDEST
        if (e.target.id === 'sortNewest') {
          const dateSortNewest = arr.sort((a, b) => Date.parse(b.timeSubmitted) - Date.parse(a.timeSubmitted));
          cardsOnDOM(dateSortNewest, user.uid);
        }
        // // OLDEST-NEWEST
        if (e.target.id === 'sortOldest') {
          const dateSortOldest = arr.sort((a, b) => Date.parse(a.timeSubmitted) - Date.parse(b.timeSubmitted));
          cardsOnDOM(dateSortOldest, user.uid);
        }
      });
    }
  });
  const searchBar = document.querySelector('#searchBar');
  searchBar.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      const searchValue = searchBar.value.toLowerCase();
      getVocabData().then((arr) => {
        const searchArr = arr.filter((item) => item.title.toLowerCase().includes(searchValue)
          || item.definition.toLowerCase().includes(searchValue));
        cardsOnDOM(searchArr, user.uid);
      });
      searchBar.value = '';
    }
  });
};

export default navEvents;
