import { addLanguage, getLanguages, updateLanguage } from '../api/languageData';

const addPublicLanguage = (obj, user) => {
  getLanguages(user).then((arr) => {
    const languages = arr.map((item) => item.language);
    if (!languages.includes(obj.category)) {
      const langPayload = {
        language: obj.category,
        uid: user.uid
      };
      addLanguage(langPayload).then(({ name }) => {
        const patchLangPayload = { firebaseKey: name };
        updateLanguage(patchLangPayload);
      });
    }
  });
};

export default addPublicLanguage;
