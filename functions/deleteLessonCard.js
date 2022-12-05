import { deleteLesson } from '../api/lessonData';
import showLessons from './showLessons';

const deleteLessonCard = (e, user) => {
  const [, firebaseKey] = e.target.id.split('--');
  deleteLesson(firebaseKey).then(() => {
    showLessons(user);
  });
};

export default deleteLessonCard;
