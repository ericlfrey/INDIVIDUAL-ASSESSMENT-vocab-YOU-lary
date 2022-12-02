import { getUserVocabData, updateVocabCard } from '../api/vocabData';
import cardsOnDOM from '../pages/cardsOnDOM';

const updateCard = (user, firebaseKey) => {
  const payload = {
    title: document.querySelector('#title').value,
    definition: document.querySelector('#definition').value,
    category: document.querySelector('#category').value,
    favorite: document.querySelector('#favorite').checked,
    public: document.querySelector('#public').checked,
    uid: user.uid,
    timeSubmitted: user.timeSubmitted,
    firebaseKey
  };
  updateVocabCard(payload).then(() => {
    getUserVocabData(user).then((arr) => {
      cardsOnDOM(arr, user.uid);
    });
  });
};

export default updateCard;
