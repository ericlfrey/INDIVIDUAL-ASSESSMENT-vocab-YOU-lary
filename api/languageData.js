import client from '../utils/client';

const endpoint = client.databaseURL;

const getLanguages = (user) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages.json?"orderBy"="uid"&"equalTo"="${user.uid}"`, {
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

export default getLanguages;
