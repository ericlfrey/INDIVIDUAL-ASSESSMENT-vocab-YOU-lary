import {
  deleteVocabCard, getSingleCard, getUserVocabData
} from '../api/vocabData';
import addCardForm from '../components/forms/addCardForm';
import addPublicCard from '../functions/addPublicCard';
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
      getSingleCard(firebaseKey).then((obj) => {
        addCardForm(user, obj);
      });
    }
    // DELETE CARD
    if (e.target.id.includes('delete-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteVocabCard(firebaseKey).then(() => {
        getUserVocabData(user).then((arr) => {
          cardsOnDOM(arr, user.uid);
        });
      });
    }
    // ADD PUBLIC CARD
    if (e.target.id.includes('add-card-btn')) {
      addPublicCard(e, user);
    }
  });
};

export default domEvents;
