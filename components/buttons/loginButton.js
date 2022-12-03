import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
  <h1>Bienvenue à Vocab-Vous-Laire!</h1>
  <button id="google-auth" class="btn btn- sm btn-outline-danger">LOGIN</button>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
