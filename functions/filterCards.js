import { getVocabData } from '../api/vocabData';
import cardsOnDOM from '../pages/cardsOnDOM';

const filterCards = (language, user) => {
  getVocabData().then((arr) => {
    const filteredArr = arr.filter((item) => item.category === language);
    cardsOnDOM(filteredArr, user.uid);
  });
};
export default filterCards;
