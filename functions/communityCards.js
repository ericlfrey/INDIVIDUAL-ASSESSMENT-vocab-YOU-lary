import { getCommunityVocabData } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/shared/navBar';
import cardsOnDOM from '../pages/cardsOnDOM';

const communityCards = (user) => {
  navBar(user, 'public');
  logoutButton();
  getCommunityVocabData(user).then((arr) => {
    cardsOnDOM(arr, user.uid);
  });
};

export default communityCards;
