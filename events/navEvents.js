import { getCommunityVocabData, getUserVocabData } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import addCardForm from '../components/forms/addCardForm';
import addLanguageForm from '../components/forms/addLanguageForm';
import navBar from '../components/shared/navBar';
import filterCards from '../functions/filterCards';
import search from '../functions/search';
import sortCards from '../functions/sortCards';
import cardsOnDOM from '../pages/cardsOnDOM';
import { signOut } from '../utils/auth';

const navEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    // LOGOUT BUTTON
    if (e.target.id === 'google-auth') {
      signOut();
    }
    // SHOW ALL CARDS
    if (e.target.id === 'logo') {
      getUserVocabData(user).then((arr) => {
        cardsOnDOM(arr, user.uid);
      });
    }
    // COMMUNITY BUTTON
    if (e.target.id === 'communityBtn') {
      navBar(user, 'public');
      logoutButton();
      getCommunityVocabData(user).then((arr) => {
        cardsOnDOM(arr, user.uid);
      });
    }
    if (e.target.id.includes('public')) {
      console.warn(e.target.id);
    }
    // ADD NEW CARD BUTTON
    if (e.target.id === 'showAddCardForm') {
      addCardForm(user);
    }
    // FILTER CARDS
    if (e.target.id.includes('filter')) {
      const [, language] = e.target.id.split('--');
      filterCards(language, user);
    }
    // SORT CARDS
    if (e.target.id.includes('sort')) {
      sortCards(e, user);
    }
    // ADD LANGUAGE BUTTON
    if (e.target.id.includes('showAddLanguageForm')) {
      addLanguageForm();
    }
  });
  // SEARCH
  document.querySelector('#searchBar').addEventListener('keyup', (e) => {
    search(e, user);
  });
};

export default navEvents;
