import { getCommunityVocabData, getUserVocabData } from '../api/vocabData';
import cardsOnDOM from '../pages/cardsOnDOM';

const filterUserCards = (language, user) => {
  getUserVocabData(user).then((arr) => {
    const filteredArr = arr.filter((item) => item.category === language);
    cardsOnDOM(filteredArr, user.uid);
  });
};

const filterPublicCards = (language, user) => {
  getCommunityVocabData(user).then((arr) => {
    const filteredArr = arr.filter((item) => item.category === language);
    cardsOnDOM(filteredArr, user.uid);
  });
};
export { filterUserCards, filterPublicCards };
