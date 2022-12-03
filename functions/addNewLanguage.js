import { addLanguage, getLanguages, updateLanguage } from '../api/languageData';
import { getUserVocabData } from '../api/vocabData';
import filterDrop from '../components/shared/filterDrop';
import cardsOnDOM from '../pages/cardsOnDOM';

const addNewLanguage = (user) => {
  const payload = {
    language: document.querySelector('#languageInput').value,
    uid: user.uid
  };
  addLanguage(payload).then(({ name }) => {
    const patchPayload = { firebaseKey: name };
    updateLanguage(patchPayload).then(() => {
      getLanguages(user).then(() => {
        getUserVocabData(user).then((arr) => {
          filterDrop(user, 'user');
          cardsOnDOM(arr, user.uid);
        });
      });
    });
  });
};

export default addNewLanguage;
