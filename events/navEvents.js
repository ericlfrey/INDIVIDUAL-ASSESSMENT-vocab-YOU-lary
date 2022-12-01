import { getLanguages } from '../api/languageData';
import { getVocabData } from '../api/vocabData';
import addCardForm from '../components/forms/addCardForm';
import addLanguageForm from '../components/forms/addLanguageForm';
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
      getVocabData().then((arr) => {
        cardsOnDOM(arr, user.uid);
      });
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
    if (e.target.id === 'showAddLanguageForm') {
      getLanguages(user).then(addLanguageForm);
    }
  });
  // SEARCH
  document.querySelector('#searchBar').addEventListener('keyup', (e) => {
    search(e, user);
  });
};

export default navEvents;
