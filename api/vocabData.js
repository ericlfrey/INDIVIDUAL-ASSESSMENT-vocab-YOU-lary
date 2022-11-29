import client from '../utils/client';

const endpoint = client.databaseURL;
console.warn(client);

const getVocabData = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabEntries.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getVocabData;
