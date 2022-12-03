import addPublicCard from '../functions/addPublicCard';
import editCard from '../functions/editCard';
import deleteCard from '../functions/deleteCard';

const domEvents = (user) => {
  document.querySelector('#main').addEventListener('click', (e) => {
    // VIEW CARD
    if (e.target.id.includes('view-card-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(firebaseKey);
    }
    // EDIT/UPDATE CARD
    if (e.target.id.includes('edit-card-btn')) {
      editCard(e, user);
    }
    // DELETE CARD
    if (e.target.id.includes('delete-card-btn')) {
      deleteCard(e, user);
    }
    // ADD PUBLIC CARD
    if (e.target.id.includes('add-card-btn')) {
      addPublicCard(e, user);
    }
  });
};

export default domEvents;
