import { addVocabCard, getUserVocabData, updateVocabCard } from '../api/vocabData';
import cardsOnDOM from '../pages/cardsOnDOM';

const addNewCard = (user) => {
  const currentDate = new Date().toISOString();
  const payload = {
    title: document.querySelector('#title').value,
    definition: document.querySelector('#definition').value,
    category: document.querySelector('#category').value,
    favorite: document.querySelector('#favorite').checked,
    public: document.querySelector('#public').checked,
    uid: user.uid,
    timeSubmitted: currentDate
  };
  addVocabCard(payload).then(({ name }) => {
    const patchPayload = { firebaseKey: name };
    updateVocabCard(patchPayload).then(() => {
      getUserVocabData(user).then((arr) => {
        cardsOnDOM(arr, user.uid);
      });
    });
  });
};

export default addNewCard;
