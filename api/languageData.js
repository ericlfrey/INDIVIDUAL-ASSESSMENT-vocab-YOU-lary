import client from '../utils/client';

const endpoint = client.databaseURL;
// GET USER LANGUAGES
const getLanguages = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json?orderBy="uid"&equalTo="${user.uid}"`, {
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
// GET PUBLIC LANGUAGES
const getCommunityLanguages = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabEntries.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const allData = Object.values(data);
        const filteredData = allData.filter((item) => item.uid === user.uid || item.public === true).map((item) => item.category);
        const filteredLanguages = filteredData.filter((item, index) => filteredData.indexOf(item) === index);
        resolve(filteredLanguages);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const addLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json`, {
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
const updateLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${payload.firebaseKey}.json`, {
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
const deleteLanguage = (firebaseKey) => new Promise((resolve, reject) => {
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
  getLanguages, addLanguage, updateLanguage, deleteLanguage, getCommunityLanguages
};
