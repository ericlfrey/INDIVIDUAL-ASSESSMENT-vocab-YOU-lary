import { getCommunityVocabData, getUserVocabData } from '../api/vocabData';
import cardsOnDOM from '../pages/cardsOnDOM';

const sortCards = (e, arr, user) => {
  // FAVORITES
  if (e.target.id.includes('sortFavorites')) {
    const favoriteSort = arr.sort((a, b) => b.favorite - a.favorite);
    cardsOnDOM(favoriteSort, user.uid);
  }
  // ALPHABETICALLY
  if (e.target.id.includes('sortAlpha')) {
    const titleSort = arr.sort((a, b) => a.title.localeCompare(b.title));
    cardsOnDOM(titleSort, user.uid);
  }
  // NEWEST-OLDEST
  if (e.target.id.includes('sortNewest')) {
    const dateSortNewest = arr.sort((a, b) => Date.parse(b.timeSubmitted) - Date.parse(a.timeSubmitted));
    cardsOnDOM(dateSortNewest, user.uid);
  }
  // // OLDEST-NEWEST
  if (e.target.id.includes('sortOldest')) {
    const dateSortOldest = arr.sort((a, b) => Date.parse(a.timeSubmitted) - Date.parse(b.timeSubmitted));
    cardsOnDOM(dateSortOldest, user.uid);
  }
};

const sortUserCards = (e, user) => {
  getUserVocabData(user).then((arr) => {
    sortCards(e, arr, user);
  });
};

const sortPublicCards = (e, user) => {
  getCommunityVocabData(user).then((arr) => {
    sortCards(e, arr, user);
  });
};

export { sortUserCards, sortPublicCards };
