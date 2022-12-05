import addNewCard from '../functions/addNewCard';
import addNewLanguage from '../functions/addNewLanguage';
import addNewLesson from '../functions/addNewLesson';
import updateCard from '../functions/updateCard';
// import lessonsOnDOM from '../pages/lessonsOnDOM';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // ADD CARD
    if (e.target.id === 'submit-card') {
      addNewCard(user);
    }
    // UPDATE CARD
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      updateCard(user, firebaseKey);
    }
    // ADD LANGUAGE
    if (e.target.id === 'submit-language') {
      addNewLanguage(user);
    }
    // ADD LESSON PLAN
    if (e.target.id === 'lessonPlanForm') {
      addNewLesson(user);
    }
  });
};
export default formEvents;
