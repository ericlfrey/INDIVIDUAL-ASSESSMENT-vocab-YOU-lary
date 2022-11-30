import { deleteVocabCard, getSingleCard, getVocabData } from '../api/vocabData';
import addCardForm from '../components/forms/addCardForm';
import cardsOnDOM from '../pages/cardsOnDOM';

const domEvents = (user) => {
  document.querySelector('#main').addEventListener('click', (e) => {
    // VIEW CARD
    if (e.target.id.includes('view-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
    }
    // EDIT/UPDATE CARD
    if (e.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
      getSingleCard(firebaseKey).then((obj) => {
        addCardForm(user.uid, obj);
      });
    }
    // DELETE CARD
    if (e.target.id.includes('delete-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteVocabCard(firebaseKey).then(() => {
        getVocabData(user.uid).then((arr) => {
          cardsOnDOM(arr, user.uid);
        });
      });
    }
  });
};

export default domEvents;
