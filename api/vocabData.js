import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocabData = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabEntries.json`, {
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

const addVocabCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabEntries.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getVocabData, addVocabCard };
