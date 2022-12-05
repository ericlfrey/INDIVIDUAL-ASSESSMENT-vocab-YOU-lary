// import { lessonPlanCards } from '../api/lessonData';
import { createLesson, getLessonCards, updateLesson } from '../api/lessonData';

const addNewLesson = (user) => {
  const lessonCardKeys = [];
  const lessonChecks = document.querySelectorAll('.lesson-check');
  lessonChecks.forEach((item) => {
    const [, firebaseKey] = item.id.split('--');
    if (item.checked) {
      lessonCardKeys.push(firebaseKey);
    }
  });
  getLessonCards(lessonCardKeys, user).then((lessonCards) => {
    const payload = {
      title: document.querySelector('#lessonName').value,
      uid: user.uid,
      lessonCards
    };
    createLesson(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateLesson(patchPayload).then(/* add code here */);
    });
  });
};

export default addNewLesson;
