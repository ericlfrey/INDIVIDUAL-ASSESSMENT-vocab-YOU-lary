import { getUserVocabData } from '../api/vocabData';
import cardsOnDOM from '../pages/cardsOnDOM';

const sortCards = (e, user) => {
  getUserVocabData(user).then((arr) => {
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
};

export default sortCards;
