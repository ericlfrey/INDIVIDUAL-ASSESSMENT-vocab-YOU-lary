import client from '../utils/client';
import { getUserVocabData } from './vocabData';

const endpoint = client.databaseURL;

const getUserLessons = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/lessons.json?orderBy="uid"&equalTo="${user.uid}"`, {
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

const getLessonCards = (arr, user) => new Promise((resolve, reject) => {
  getUserVocabData(user).then((cards) => {
    const lessonCards = cards.filter((card) => arr.includes(card.firebaseKey));
    Promise.all(lessonCards).then(resolve);
  }).catch(reject);
});

export {
  createLesson, updateLesson, getLessonCards, getUserLessons
};
