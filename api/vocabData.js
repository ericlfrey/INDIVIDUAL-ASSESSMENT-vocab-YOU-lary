import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL ENTRIES
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

// GET SINGLE ENTRY
const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabEntries/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// ADD NEW ENTRY
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

// UPDATE/EDIT ENTRY
const updateVocabCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabEntries/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// DELETE ENTRY
const deleteVocabCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabEntries/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getVocabData, addVocabCard, getSingleCard, updateVocabCard, deleteVocabCard
};
