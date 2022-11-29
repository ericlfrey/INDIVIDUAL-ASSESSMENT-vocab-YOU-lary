import addCardForm from '../components/forms/addCardForm';
import { signOut } from '../utils/auth';

const navEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    // LOGOUT BUTTON
    if (e.target.id === 'logout-button') {
      signOut();
    }
    // ADD NEW CARD
    if (e.target.id === 'showAddCardForm') {
      addCardForm(user);
    }
  });
};

export default navEvents;
