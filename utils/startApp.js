import cardsOnDOM from '../pages/cardsOnDOM';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { getUserVocabData } from '../api/vocabData';
import navEvents from '../events/navEvents';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar(user, '');
  logoutButton();
  getUserVocabData(user).then((arr) => {
    cardsOnDOM(arr, user.uid);
  });
  navEvents(user);
  formEvents(user);
  domEvents(user);
};

export default startApp;
