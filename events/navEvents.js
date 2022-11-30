import { getVocabData } from '../api/vocabData';
import addCardForm from '../components/forms/addCardForm';
import cardsOnDOM from '../pages/cardsOnDOM';
import { signOut } from '../utils/auth';

const navEvents = (user) => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
  document.querySelector('#navBar').addEventListener('click', (e) => {
    // ADD NEW CARD
    if (e.target.id === 'showAddCardForm') {
      addCardForm(user);
    }
    if (e.target.id === 'logo') {
      getVocabData().then((arr) => {
        cardsOnDOM(arr, user.uid);
      });
    }
    if (e.target.id.includes('select')) {
      const [, language] = e.target.id.split('--');
      getVocabData().then((arr) => {
        const filteredArr = arr.filter((item) => item.category === language);
        cardsOnDOM(filteredArr, user.uid);
      });
    }
  });
};

export default navEvents;
