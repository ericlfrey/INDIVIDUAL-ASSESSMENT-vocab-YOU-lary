// import addCardForm from '../components/forms/addCardForm';
import { signOut } from '../utils/auth';

const navEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ADD NEW CARD
  document.querySelector('#navBar').addEventListener('click', () => {
    // if (e.target.id === 'showAddCardForm') {
    console.warn('butt stuff');
    // }
  });
};

export default navEvents;
