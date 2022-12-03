import { getCommunityVocabData } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/shared/navBar';
import searchBar from '../components/shared/searchBar';
import cardsOnDOM from '../pages/cardsOnDOM';

const showPublicCards = (user) => {
  navBar(user, 'public');
  searchBar('public');
  logoutButton();
  getCommunityVocabData(user).then((arr) => {
    cardsOnDOM(arr, user.uid);
  });
};

export default showPublicCards;
