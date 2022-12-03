import { addLanguage } from '../api/languageData';
import addNewCard from '../functions/addNewCard';
import updateCard from '../functions/updateCard';

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
      addLanguage(user);
    }
  });
};
export default formEvents;
