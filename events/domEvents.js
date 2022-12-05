import addPublicCard from '../functions/addPublicCard';
import editCard from '../functions/editCard';
import deleteCard from '../functions/deleteCard';
import viewLesson from '../pages/viewLesson';
import deleteLessonCard from '../functions/deleteLessonCard';

const domEvents = (user) => {
  document.querySelector('#main').addEventListener('click', (e) => {
    // EDIT/UPDATE CARD
    if (e.target.id.includes('edit-card-btn')) {
      editCard(e, user);
    }
    // DELETE CARD
    if (e.target.id.includes('delete-card-btn')) {
      deleteCard(e, user);
    }
    // ADD PUBLIC CARD
    if (e.target.id.includes('add-card-btn')) {
      addPublicCard(e, user);
    }
    // VIEW LESSON
    if (e.target.id.includes('view-lesson-btn')) {
      viewLesson(e);
    }
    if (e.target.id.includes('delete-lesson-btn')) {
      deleteLessonCard(e, user);
    }
  });
};

export default domEvents;
