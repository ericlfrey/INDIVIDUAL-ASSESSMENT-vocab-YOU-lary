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
        const titleSort = arr.sort((a, b) => a.title.localeCompare(b.title));
        // ALPHABETICALLY
        if (e.target.id === 'sortAlpha') {
          cardsOnDOM(titleSort, user.uid);
        }
        // NEWEST-OLDEST
        if (e.target.id === 'sortNewest') {
          console.warn('Newest');
        }
        // OLDEST-NEWEST
        if (e.target.id === 'sortOldest') {
          console.warn('Oldest');
        }
      });
    }
  });
};

export default navEvents;
