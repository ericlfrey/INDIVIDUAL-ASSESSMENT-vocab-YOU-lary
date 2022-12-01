import { getUserVocabData } from '../api/vocabData';
import cardsOnDOM from '../pages/cardsOnDOM';

const filterCards = (language, user) => {
  getUserVocabData(user).then((arr) => {
    const filteredArr = arr.filter((item) => item.category === language);
    cardsOnDOM(filteredArr, user.uid);
  });
};
export default filterCards;
