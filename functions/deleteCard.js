import { deleteVocabCard, getUserVocabData } from '../api/vocabData';
import cardsOnDOM from '../pages/cardsOnDOM';

const deleteCard = (e, user) => {
  const [, firebaseKey] = e.target.id.split('--');
  deleteVocabCard(firebaseKey).then(() => {
    getUserVocabData(user).then((arr) => {
      cardsOnDOM(arr, user.uid);
    });
  });
};

export default deleteCard;
