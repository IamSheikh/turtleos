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
    const login_form = document.getElementById('login_form');
    login_form.addEventListener('submit', (e) => {
      e.preventDefault();
      const loginPassword = document.getElementById('loginPassword');
      if (loginPassword.value == window.userpassword) {
        console.log('Successfully Logged In');
      } else {
        console.log('Please enter correct password');
      }
    });
  });
});

export default window.username;
