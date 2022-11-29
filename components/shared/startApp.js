import getVocabData from '../../api/vocabData';
import cardsOnDOM from '../../pages/cardsOnDOM';
import logoutButton from '../buttons/logoutButton';
import domBuilder from './domBuilder';
import navBar from './navBar';

const startApp = (user) => {
  domBuilder(user);
  navBar(user);
  logoutButton();
  getVocabData(user.uid).then((arr) => {
    cardsOnDOM(arr, user.uid);
  });
};

export default startApp;
