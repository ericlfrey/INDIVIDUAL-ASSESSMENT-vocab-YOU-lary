import {
  addVocabCard, getSingleCard, getUserVocabData, updateVocabCard
} from '../api/vocabData';
import cardsOnDOM from '../pages/cardsOnDOM';
import addPublicLanguage from './addPublicLanguage';

const addPublicCard = (e, user) => {
  const [, firebaseKey] = e.target.id.split('--');
  const currentDate = new Date().toISOString();
  getSingleCard(firebaseKey).then((obj) => {
    const payload = {
      title: obj.title,
      definition: obj.definition,
      category: obj.category,
      favorite: obj.favorite,
      public: obj.public,
      uid: user.uid,
      author: obj.author,
      timeSubmitted: currentDate
    };
    addVocabCard(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateVocabCard(patchPayload).then(() => {
        getUserVocabData(user).then((arr) => {
          cardsOnDOM(arr, user.uid);
        });
      });
    });
    addPublicLanguage(obj, user);
  });
};

export default addPublicCard;
