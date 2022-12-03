import { getSingleCard } from '../api/vocabData';
import addCardForm from '../components/forms/addCardForm';

const editCard = (e, user) => {
  const [, firebaseKey] = e.target.id.split('--');
  getSingleCard(firebaseKey).then((obj) => {
    addCardForm(user, obj);
  });
};

export default editCard;
