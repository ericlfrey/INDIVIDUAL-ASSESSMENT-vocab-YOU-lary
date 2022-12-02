import domBuilder from '../components/shared/domBuilder';
import navEvents from '../events/navEvents';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import showUserCards from '../functions/showUserCards';

const startApp = (user) => {
  domBuilder(user);
  showUserCards(user);
  navEvents(user);
  formEvents(user);
  domEvents(user);
};

export default startApp;
