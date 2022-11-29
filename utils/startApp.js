import cardsOnDOM from '../pages/cardsOnDOM';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { getVocabData } from '../api/vocabData';
import navEvents from '../events/navEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
  logoutButton();
  getVocabData(user.uid).then((arr) => {
    cardsOnDOM(arr, user.uid);
  });
  navEvents(user);
  formEvents(user);
};

export default startApp;
