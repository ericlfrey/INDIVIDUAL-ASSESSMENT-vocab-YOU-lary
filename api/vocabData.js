import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocabData = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabEntries.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getVocabData;
