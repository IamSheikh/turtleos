import './installPage.js';
import './loginPage.js';
import './desktop.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = '<install-page></install-page>';
  const install_form = document.getElementById('install_form');
  install_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const userpassword = document.getElementById('userpassword').value;
    console.log(`UserName: ${username} Password: ${userpassword}`);
  });
});
