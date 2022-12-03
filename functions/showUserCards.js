import { getUserVocabData } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/shared/navBar';
import searchBar from '../components/shared/searchBar';
import cardsOnDOM from '../pages/cardsOnDOM';

const showUserCards = (user) => {
  navBar(user, 'user');
  searchBar('user');
  logoutButton();
  getUserVocabData(user).then((arr) => {
    cardsOnDOM(arr, user.uid);
  });
};

export default showUserCards;
