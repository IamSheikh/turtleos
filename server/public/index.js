import './installPage.js';
import './loginPage.js';
import './desktop.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = '<install-page></install-page>';
});
