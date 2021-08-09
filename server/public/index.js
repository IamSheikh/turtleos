import './installPage.js';
import './loginPage.js';
import './desktop.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = '<install-page></install-page>';
  const install_form = document.getElementById('install_form');
  install_form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.username = document.getElementById('username').value;
    window.userpassword = document.getElementById('userpassword').value;
    app.innerHTML = '<login-page></login-page>';
  });
});

export default window.username;
