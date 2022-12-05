import { getUserLessons } from '../api/lessonData';
import lessonsOnDOM from '../pages/lessonsOnDOM';

const showLessons = (user) => {
  getUserLessons(user).then((arr) => {
    lessonsOnDOM(arr, user);
  });
};

export default showLessons;
