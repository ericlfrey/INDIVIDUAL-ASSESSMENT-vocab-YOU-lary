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
        favorite: document.querySelector('#favorite').checked,
        public: document.querySelector('#public').checked,
        uid: user.uid,
        timeSubmitted: currentDate
      };
      addVocabCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocabCard(patchPayload).then(() => {
          getVocabData().then(cardsOnDOM);
        });
      });
    }
  });
};
export default formEvents;
