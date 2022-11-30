import { addVocabCard, getVocabData, updateVocabCard } from '../api/vocabData';
import cardsOnDOM from '../pages/cardsOnDOM';

const formEvents = (user) => {
  const currentDate = new Date().toISOString();

  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id === 'submit-card') {
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
          getVocabData(user.uid).then((arr) => {
            cardsOnDOM(arr, user.uid);
          });
        });
      });
    }
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
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
        getVocabData(user.uid).then((arr) => {
          cardsOnDOM(arr, user.uid);
        });
      });
    }
  });
};
export default formEvents;
