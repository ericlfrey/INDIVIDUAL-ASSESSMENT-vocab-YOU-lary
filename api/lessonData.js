import client from '../utils/client';

const endpoint = client.databaseURL;

const createLesson = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/lessons.json`, {
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

const updateLesson = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/lessons/${payload.firebaseKey}.json`, {
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

export { createLesson, updateLesson };
