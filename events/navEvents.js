import addCardForm from '../components/forms/addCardForm';
import addLanguageForm from '../components/forms/addLanguageForm';
import { publicSearch, userSearch } from '../functions/search';
import { sortPublicCards, sortUserCards } from '../functions/sortCards';
import { signOut } from '../utils/auth';
import { filterUserCards, filterPublicCards } from '../functions/filterCards';
import showUserCards from '../functions/showUserCards';
import showPublicCards from '../functions/showPublicCards';
import addLessonPlan from '../functions/addLessonPlans';

const navEvents = (user) => {
  document.querySelector('#navBar').addEventListener('click', (e) => {
    // LOGOUT BUTTON
    if (e.target.id === 'google-auth') {
      signOut();
    }
    // SHOW ALL CARDS
    if (e.target.id === 'logo') {
      showUserCards(user);
    }
    // COMMUNITY BUTTON
    if (e.target.id === 'communityBtn') {
      showPublicCards(user);
    }
    // HOME BUTTON
    if (e.target.id === 'homeBtn') {
      showUserCards(user);
    }
    // ADD NEW CARD BUTTON
    if (e.target.id === 'showAddCardForm') {
      addCardForm(user);
    }
    // FILTER USER CARDS
    if (e.target.id.includes('userfilter')) {
      const [, language] = e.target.id.split('--');
      filterUserCards(language, user);
    }
    // FILTER PUBLIC CARDS
    if (e.target.id.includes('publicfilter')) {
      const [, language] = e.target.id.split('--');
      filterPublicCards(language, user);
    }
    // SORT USER CARDS
    if (e.target.id.includes('usersort')) {
      sortUserCards(e, user);
    }
    // SORT PUBLIC CARDS
    if (e.target.id.includes('publicsort')) {
      sortPublicCards(e, user);
    }
    // ADD LANGUAGE BUTTON
    if (e.target.id.includes('showAddLanguageForm')) {
      addLanguageForm();
    }
    // ADD LESSON PLAN BUTTON
    if (e.target.id.includes('addLessonPlanButton')) {
      addLessonPlan(user);
      // showAddLessonForm
    }
  });
  // SEARCH
  document.querySelector('#navBar').addEventListener('keyup', (e) => {
    if (e.target.id === 'usersearchBar') {
      userSearch(e, user);
    }
    if (e.target.id === 'publicsearchBar') {
      publicSearch(e, user);
    }
  });
};

export default navEvents;
