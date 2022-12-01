import { addLanguage, updateLanguage } from '../api/languageData';
import { getUserVocabData } from '../api/vocabData';
import addNewCard from '../functions/addNewCard';
import updateCard from '../functions/updateCard';
import cardsOnDOM from '../pages/cardsOnDOM';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // ADD CARD
    if (e.target.id === 'submit-card') {
      addNewCard(user);
    }
    // UPDATE CARD
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      updateCard(user, firebaseKey);
    }
    // ADD LANGUAGE
    if (e.target.id === 'submit-language') {
      const payload = {
        language: document.querySelector('#languageInput').value,
        uid: user.uid
      };
      addLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateLanguage(patchPayload).then(() => {
          getUserVocabData(user).then((arr) => {
            cardsOnDOM(arr, user.uid);
          });
        });
      });
    }
  });
};
export default formEvents;
