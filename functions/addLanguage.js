import { getLanguages, updateLanguage } from '../api/languageData';
import { getUserVocabData } from '../api/vocabData';
import navBar from '../components/shared/navBar';
import cardsOnDOM from '../pages/cardsOnDOM';

const addLanguage = (user) => {
  const payload = {
    language: document.querySelector('#languageInput').value,
    uid: user.uid
  };
  addLanguage(payload).then(({ name }) => {
    const patchPayload = { firebaseKey: name };
    updateLanguage(patchPayload).then(() => {
      getLanguages(user).then(() => {
        getUserVocabData(user).then((arr) => {
          navBar(user, 'user');
          cardsOnDOM(arr, user.uid);
        });
      });
    });
  });
};

export default addLanguage;
